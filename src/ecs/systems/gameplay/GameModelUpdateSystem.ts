import { Assets } from '../../../Assets';
import { Time } from '../../../Time';
import { EnemyIdComponent, UpdateComponent } from '../../components';
import { Entity, System } from '../../ecs';
import { barrier, enemy, roadSegment } from '../../entities';
import {
  EnemiesEvent,
  Enemy,
  GameModel,
  RoadEvent,
  RoadSegment,
} from '../../../model';
import { GameState } from '../../GameState';
import { destroyEntity } from '../../selectors';
import { RapierModule } from '../../../types';
import { Sphere, Vector3 } from 'three';

export class GameModelUpdateSystem extends System<GameState> {
  public componentsRequired = [UpdateComponent];

  private firstTime = true;
  private assets!: Assets;
  private RAPIER!: RapierModule;

  private roadSegmentEntityMap = new Map<
    number,
    { segment: Entity; barrier?: Entity }
  >();

  public update(_: number, state: GameState): void {
    if (this.firstTime) {
      this.firstTime = false;

      this.initGameModel(state);
    }

    const { gameModel, renderer } = state;

    gameModel.setHeadCollisionEnabled(false);

    const session = renderer.xr.getSession();
    if (session) {
      gameModel.setHeadCollisionEnabled(true);

      const camera = state.renderer.xr.getCamera();

      gameModel.setHeadPosition(camera.position);
    }

    state.gameModel.update(Time.deltaSeconds());
  }

  private initGameModel(state: GameState) {
    this.assets = state.assets;
    this.RAPIER = state.RAPIER;

    this.listenGameModel(state.gameModel);

    state.gameModel
      .getEnemies()
      .spawnEnemy(new Sphere(new Vector3(0, 5, -10), 3));
  }

  private listenGameModel(gameModel: GameModel) {
    gameModel.getRoad().on(RoadEvent.AddSegment, this.onAddRoadSegment);
    gameModel.getRoad().on(RoadEvent.RemoveSegment, this.onRemoveRoadSegment);

    gameModel.getEnemies().on(EnemiesEvent.AddEnemy, this.onAddEnemy);
    gameModel.getEnemies().on(EnemiesEvent.DeleteEnemy, this.onRemoveEnemy);
  }

  private onAddRoadSegment = (segment: RoadSegment) => {
    const { ecs, assets, roadSegmentEntityMap } = this;

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
    const { RAPIER, ecs } = this;

    ecs.addEntity(enemy(RAPIER, enemyModel.id));
  };

  private onRemoveEnemy = (enemyModel: Enemy) => {
    const { ecs } = this;

    const enemyEntity = ecs.find(
      [EnemyIdComponent],
      components => components.get(EnemyIdComponent).id === enemyModel.id
    );

    if (enemyEntity !== undefined) {
      destroyEntity(ecs, enemyEntity);
    }
  };
}
