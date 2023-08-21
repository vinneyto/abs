import { TransformComponent, ViewComponent } from '../../components';
import { System } from '../../ecs';
import { GameState } from '../../model/GameState';

export class ViewTransformSystem extends System<GameState> {
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
