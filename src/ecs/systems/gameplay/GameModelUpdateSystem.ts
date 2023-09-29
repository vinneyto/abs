import { Assets } from '../../../Assets';
import { Time } from '../../../Time';
import { OnDestroy, UpdateComponent } from '../../components';
import { Entity, System } from '../../ecs';
import { barrier, enemy, roadSegment } from '../../entities';
import { GameModel, RoadEvent, RoadSegment } from '../../../model';
import { GameEvent, CollisionObject, GameState } from '../../GameState';
import { RapierModule } from '../../../types';
import { Vector3 } from 'three';

export class GameModelUpdateSystem extends System<GameState> {
  public query = [UpdateComponent];

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

    this.ecs.addEntity(enemy(this.RAPIER, this.assets, new Vector3(0, 30, 0)));

    state.events.on(GameEvent.Collide, (collision: CollisionObject) => {
      const components1 = this.ecs.getComponents(collision.entity1);
      const components2 = this.ecs.getComponents(collision.entity2);

      console.log(components1, components2);
    });
  }

  private listenGameModel(gameModel: GameModel) {
    gameModel.getRoad().on(RoadEvent.AddSegment, this.onAddRoadSegment);
    gameModel.getRoad().on(RoadEvent.RemoveSegment, this.onRemoveRoadSegment);
  }

  private onAddRoadSegment = (segment: RoadSegment) => {
    const { ecs, roadSegmentEntityMap } = this;

    const segmentEntity = ecs.addEntity(roadSegment(segment.id));

    let barrierEntity: Entity | undefined;
    if (segment.hasBarrier) {
      barrierEntity = ecs.addEntity(barrier(segment.id));
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
      ecs.addComponent(entity.segment, OnDestroy);
      if (entity.barrier) {
        ecs.addComponent(entity.barrier, OnDestroy);
      }
      roadSegmentEntityMap.delete(segment.id);
    }
  };

  // private onAddEnemy = (enemyModel: Enemy) => {
  //   const { RAPIER, assets, ecs } = this;

  //   const entity = ecs.addEntity(enemy(RAPIER, assets, enemyModel.id));

  //   this.entitiesMap.set(enemyModel.id, entity);
  // };

  // private onRemoveEnemy = (enemyModel: Enemy) => {
  //   const { ecs } = this;

  //   const enemyEntity = this.entitiesMap.get(enemyModel.id);

  //   if (enemyEntity !== undefined) {
  //     destroyEntity(ecs, enemyEntity);
  //   }
  // };

  // private onEnemyFire = (_gun: EnemyGun) => {
  //   // console.log(gun.enemyId, gun.index);
  // };
}
