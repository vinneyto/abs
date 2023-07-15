import { Object3D, Vector3 } from 'three';
import { LifeCircle } from '../components/LifeCircleComponent';
import { RoadComponent } from '../components/RoadComponent';
import { System } from '../ecs';
import { view } from '../entities/view';
import { getLifeCircle, getTransform } from '../selectors';
import { Time } from '../../Time';

export class RoadManageSystem extends System {
  public componentsRequired = [RoadComponent];

  constructor(private readonly roadSegmentObject: Object3D) {
    super();
  }

  public update(entity: number): void {
    const components = this.ecs.getComponents(entity);

    const roadComponent = components.get(RoadComponent);

    // delete back segments
    {
      let continueDeleting = roadComponent.segments.length > 0;

      while (continueDeleting) {
        const entity = roadComponent.segments[0];
        const { position } = getTransform(this.ecs, entity);

        if (position.z > roadComponent.backDistance) {
          getLifeCircle(this.ecs, entity).state = LifeCircle.Destroy;
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
        const { position } = getTransform(this.ecs, entity);
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
        roadComponent.segments.push(roadSegmentEntity);
        console.log('add road segment');
      }
    }

    // move road segments
    {
      for (const segmentEntity of roadComponent.segments) {
        const { position } = getTransform(this.ecs, segmentEntity);

        position.z += Time.deltaSeconds() * roadComponent.velocity;
      }
    }
  }
}
