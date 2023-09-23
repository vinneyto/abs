import EventEmitter from 'eventemitter3';
import { State } from './State';
import { ECS, Entity, System } from './ecs';
import { EnemiesEvent, RoadEvent, RoadSegment } from './model';

export interface Groups<S extends State> {
  input: Array<System<S>>;
  gameplay: Array<System<S>>;
  physics: Array<System<S>>;
  graphics: Array<System<S>>;
}

export interface WorldAssets {
  helicopterBody: {
    vertices: Float32Array;
    indices: Uint32Array;
  };
}

export class World<S extends State> extends EventEmitter {
  public readonly ecs: ECS<S>;
  public readonly groups: Groups<S> = {
    input: [],
    gameplay: [],
    physics: [],
    graphics: [],
  };

  private entitiesMap = new Map<number, Entity>();

  private roadSegmentEntityMap = new Map<
    number,
    { segment: Entity; barrier?: Entity }
  >();

  constructor(private readonly state: S, private readonly assets: WorldAssets) {
    super();

    this.ecs = new ECS<S>();

    this.subscribe();
  }

  private subscribe() {
    const { gameModel } = this.state;

    gameModel.getRoad().on(RoadEvent.AddSegment, this.onAddRoadSegment);
    gameModel.getRoad().on(RoadEvent.RemoveSegment, this.onRemoveRoadSegment);

    gameModel.getEnemies().on(EnemiesEvent.AddEnemy, this.onAddEnemy);
    gameModel.getEnemies().on(EnemiesEvent.DeleteEnemy, this.onRemoveEnemy);
  }

  private onAddRoadSegment = (segment: RoadSegment) => {
    const { ecs, roadSegmentEntityMap } = this;

    const segmentEntity = ecs.addEntity(roadSegment(assets, segment.id));

    let barrierEntity: Entity | undefined;
    if (segment.hasBarrier) {
      barrierEntity = ecs.addEntity(barrier(assets, segment.id));
    }

    roadSegmentEntityMap.set(segment.id, {
      segment: segmentEntity,
      barrier: barrierEntity,
    });
  };

  private onRemoveRoadSegment = (segment: RoadSegment) => {
    const { ecs, roadSegmentEntityMap } = this;

    const entity = roadSegmentEntityMap.get(segment.id);
    if (entity !== undefined) {
      destroyEntity(ecs, entity.segment);
      if (entity.barrier) {
        destroyEntity(ecs, entity.barrier);
      }
      roadSegmentEntityMap.delete(segment.id);
    }
  };

  private onAddEnemy = (enemyModel: Enemy) => {
    const { RAPIER, assets, ecs } = this;

    const entity = ecs.addEntity(enemy(RAPIER, assets, enemyModel.id));

    this.entitiesMap.set(enemyModel.id, entity);
  };

  private onRemoveEnemy = (enemyModel: Enemy) => {
    const { ecs } = this;

    const enemyEntity = this.entitiesMap.get(enemyModel.id);

    if (enemyEntity !== undefined) {
      destroyEntity(ecs, enemyEntity);
    }
  };

  public registerSystems() {
    const keys: Array<keyof typeof this.groups> = [
      'input',
      'gameplay',
      'physics',
      'graphics',
    ];

    for (const key of keys) {
      for (const system of this.groups[key]) {
        this.ecs.addSystem(system);
      }
    }
  }

  update() {
    this.ecs.update(this.state);
  }
}
