import { Object3D, Vector3 } from 'three';
import {
  LifeCircle,
  LifeCircleComponent,
} from '../components/LifeCircleComponent';
import { RoadComponent } from '../components/RoadComponent';
import { System } from '../ecs';
import { view } from '../entities/view';

export class RoadManageSystem extends System {
  public componentsRequired = [LifeCircleComponent, RoadComponent];

  constructor(private readonly roadSegmentObject: Object3D) {
    super();
  }

  public update(entity: number): void {
    const components = this.ecs.getComponents(entity);

    const roadComponent = components.get(RoadComponent);
    const lifeCircleComponent = components.get(LifeCircleComponent);

    if (lifeCircleComponent.state === LifeCircle.New) {
      const { backDistance, frontDistance, segmentSize } = roadComponent;

      for (let pos = frontDistance; pos < backDistance; pos += segmentSize) {
        const roadSegmentEntity = this.ecs.addEntity(
          view({
            position: new Vector3(0, 0, pos),
            view: this.roadSegmentObject.clone(),
          })
        );
        roadComponent.segments.push(roadSegmentEntity);
      }

      console.log('create road initial segments');

      return;
    }
  }
}
