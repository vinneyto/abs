import { TransformComponent, ViewComponent } from '../components';
import { System } from '../ecs';

export class ViewTransformSystem extends System {
  public componentsRequired = [ViewComponent, TransformComponent];

  public update(entity: number): void {
    const components = this.ecs.getComponents(entity);
    const { position, quaternion, scale } = components.get(TransformComponent);
    const { view } = components.get(ViewComponent);

    view.position.copy(position);
    view.quaternion.copy(quaternion);
    view.scale.copy(scale);
  }
}
