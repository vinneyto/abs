import {
  PositionComponent,
  RotationComponent,
  ViewComponent,
} from '../../components';
import { System } from '../../ecs';
import { GameState } from '../../GameState';

export class ViewTransformSystem extends System<GameState> {
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
