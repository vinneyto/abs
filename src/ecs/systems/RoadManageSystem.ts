import { Object3D, Vector3 } from 'three';
import { RoadComponent } from '../components/RoadComponent';
import { System } from '../ecs';
import { view } from '../entities/view';
import { destroyEntity, getTransform } from '../selectors';
import { Time } from '../../Time';

export class RoadManageSystem extends System {
  public componentsRequired = [RoadComponent];

  constructor(
    private readonly roadSegmentObject: Object3D,
    private readonly barrierObject: Object3D
  ) {
    super();
  }

  public update(entity: number): void {
    const components = this.ecs.getComponents(entity);

    const roadComponent = components.get(RoadComponent);

    // move road segments
    {
      for (const segment of roadComponent.segments) {
        const distDelta = Time.deltaSeconds() * roadComponent.velocity;

        getTransform(this.ecs, segment.roadSegmentEntity).position.z +=
          distDelta;

        if (segment.barrierEntity) {
          getTransform(this.ecs, segment.barrierEntity).position.z += distDelta;
        }
      }
    }

    // delete back segments
    {
      let continueDeleting = roadComponent.segments.length > 0;

      while (continueDeleting) {
        const entity = roadComponent.segments[0];
        const { position } = getTransform(this.ecs, entity.roadSegmentEntity);

        if (position.z > roadComponent.backDistance) {
          destroyEntity(this.ecs, entity.roadSegmentEntity);

          if (entity.barrierEntity !== undefined) {
            destroyEntity(this.ecs, entity.barrierEntity);
          }

          roadComponent.segments.splice(0, 1);

          console.log('remove road segment');
        } else {
          continueDeleting = false;
        }
      }
    }

    // add front segments
    {
      let backDistance = roadComponent.backDistance;

      if (roadComponent.segments.length > 0) {
        const entity =
          roadComponent.segments[roadComponent.segments.length - 1];
        const { position } = getTransform(this.ecs, entity.roadSegmentEntity);
        backDistance = position.z - roadComponent.segmentSize;
      }

      const { frontDistance, segmentSize } = roadComponent;

      for (let pos = backDistance; pos >= frontDistance; pos -= segmentSize) {
        const roadSegmentEntity = this.ecs.addEntity(
          view({
            position: new Vector3(0, 0, pos),
            view: this.roadSegmentObject.clone(),
          })
        );

        const barrierEntity = this.ecs.addEntity(
          view({
            position: new Vector3(5, 0, pos),
            view: this.barrierObject.clone(),
            castShadow: true,
          })
        );

        roadComponent.segments.push({ roadSegmentEntity, barrierEntity });
        console.log('add road segment');
      }
    }
  }
}
