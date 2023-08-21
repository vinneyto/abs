import { Object3D } from 'three';
import { ControllerComponent, TransformComponent } from '../../components';
import { System } from '../../ecs';

export class ControllerTransformSystem extends System {
  constructor(private readonly controllers: Object3D[]) {
    super();
  }

  public componentsRequired = [ControllerComponent, TransformComponent];

  public update(entity: number): void {
    const components = this.ecs.getComponents(entity);

    const { index } = components.get(ControllerComponent);
    const { position, quaternion, scale } = components.get(TransformComponent);

    position.copy(this.controllers[index].position);
    quaternion.copy(this.controllers[index].quaternion);
    scale.copy(this.controllers[index].scale);
  }
}
