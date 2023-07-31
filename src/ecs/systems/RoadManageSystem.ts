import { System } from '../ecs';
import { destroyEntity, getTransform } from '../selectors';
import { UpdateComponent } from '../components/UpdateComponent';
import { GameState } from '../model/GameState';
import { Assets } from '../../Assets';
import { barrier } from '../entities/barrier';
import { roadSegment } from '../entities/roadSegment';

export class RoadManageSystem extends System {
  public componentsRequired = [UpdateComponent];

  constructor(
    private readonly state: GameState,
    private readonly assets: Assets
  ) {
    super();
  }

  public update(): void {
    const { state, assets } = this;
    const { road } = state;

    // delete back segments
    {
      let continueDeleting = road.segments.length > 0;

      while (continueDeleting) {
        const entity = road.segments[0];
        const { position } = getTransform(this.ecs, entity.roadSegmentEntity);

        if (position.z > road.backDistance) {
          destroyEntity(this.ecs, entity.roadSegmentEntity);

          if (entity.barrierEntity !== undefined) {
            destroyEntity(this.ecs, entity.barrierEntity);
          }

          road.segments.splice(0, 1);

          console.log('remove road segment');
        } else {
          continueDeleting = false;
        }
      }
    }

    // add front segments
    {
      let backDistance = road.backDistance;

      if (road.segments.length > 0) {
        const entity = road.segments[road.segments.length - 1];
        const { position } = getTransform(this.ecs, entity.roadSegmentEntity);
        backDistance = position.z - road.segmentSize;
      }

      const { frontDistance, segmentSize } = road;

      for (let pos = backDistance; pos >= frontDistance; pos -= segmentSize) {
        const roadSegmentEntity = this.ecs.addEntity(roadSegment(assets, pos));
        const barrierEntity = this.ecs.addEntity(barrier(assets, pos));

        road.segments.push({ roadSegmentEntity, barrierEntity });
        console.log('add road segment');
      }
    }
  }
}
