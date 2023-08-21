import { Entity, System } from '../../ecs';
import { destroyEntity, getTransform } from '../../selectors';
import { RoadComponent, RoadSegment } from '../../components';
import { roadSegment, barrier } from '../../entities';
import { GameState } from '../../model/GameState';

export class RoadManageSystem extends System<GameState> {
  public componentsRequired = [RoadComponent];

  public update(entity: Entity, state: GameState): void {
    const { assets, RAPIER } = state;

    const components = this.ecs.getComponents(entity);
    const road = components.get(RoadComponent);

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
        road.segmentCount++;

        const roadSegmentEntity = this.ecs.addEntity(roadSegment(assets, pos));

        let barrierEntity: Entity | undefined;

        if (road.segmentCount % road.barrierFrequency === 0) {
          barrierEntity = this.ecs.addEntity(barrier(RAPIER, assets, pos));
        }

        road.segments.push({ roadSegmentEntity, barrierEntity });
        console.log('add road segment');
      }
    }

    road.closestBarrierEntity = this.getClosestBarrier(
      road.segments,
      road.segmentSize * road.barrierFrequency
    );
  }

  private getClosestBarrier(segments: RoadSegment[], distance: number) {
    // reverse order
    for (let i = segments.length - 1; i >= 0; i--) {
      const segment = segments[i];
      if (segment.barrierEntity) {
        const transform = getTransform(this.ecs, segment.barrierEntity);
        if (transform.position.z > -distance) {
          return segment.barrierEntity;
        }
      }
    }
    return undefined;
  }
}
