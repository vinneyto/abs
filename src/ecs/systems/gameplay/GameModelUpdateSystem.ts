import { Assets } from '../../../Assets';
import { Time } from '../../../Time';
import { UpdateComponent } from '../../components';
import { Entity, System } from '../../ecs';
import { barrier, roadSegment } from '../../entities';
import { GameModel, RoadEvent, RoadSegment } from '../../../model';
import { GameState } from '../../GameState';
import { destroyEntity } from '../../selectors';

export class GameModelUpdateSystem extends System<GameState> {
  public componentsRequired = [UpdateComponent];

  private firstTime = true;
  private assets!: Assets;

  private roadSegmentEntityMap = new Map<
    number,
    { segment: Entity; barrier?: Entity }
  >();

  public update(_: number, state: GameState): void {
    if (this.firstTime) {
      this.assets = state.assets;
      this.firstTime = false;

      this.listenGameModel(state.gameModel);
    }

    const { gameModel, renderer } = state;

    gameModel.headCollisionEnabled = false;

    const session = renderer.xr.getSession();
    if (session) {
      gameModel.headCollisionEnabled = true;

      const camera = state.renderer.xr.getCamera();

      gameModel.setHeadPosition(camera.position);
    }

    state.gameModel.update(Time.deltaSeconds());
  }

  private listenGameModel(gameModel: GameModel) {
    gameModel.road.on(RoadEvent.AddSegment, this.onAddRoadSegment);
    gameModel.road.on(RoadEvent.RemoveSegment, this.onRemoveRoadSegment);
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

  private onRemoveRoadSegment = (segmentId: number) => {
    const { ecs, roadSegmentEntityMap } = this;

    const segment = roadSegmentEntityMap.get(segmentId);
    if (segment !== undefined) {
      destroyEntity(ecs, segment.segment);
      if (segment.barrier) {
        destroyEntity(ecs, segment.barrier);
      }
    }
  };
}
