import { PositionComponent } from '../components/PositionComponent';
import { RotationComponent } from '../components/RotationComponent';
import { ViewComponent } from '../components/ViewComponent';
import { System } from '../ecs';

export class ViewTransformSystem extends System {
  public componentsRequired = [
    ViewComponent,
    PositionComponent,
    RotationComponent,
  ];
  public update(entity: number): void {
    const components = this.ecs.getComponents(entity);
    const { position } = components.get(PositionComponent);
    const { quaternion } = components.get(RotationComponent);
    const { view } = components.get(ViewComponent);

    view.position.copy(position);
    view.quaternion.copy(quaternion);
  }
}
