import { ThreeViewComponent } from '..';
import { GameState } from '../../ecs/GameState';
import { TransformComponent } from '../../ecs/components';
import { System } from '../../ecs/ecs';

export class ThreeViewTransformSystem extends System<GameState> {
  public query = [TransformComponent, ThreeViewComponent];

  public update(entity: number): void {
    const components = this.ecs.getComponents(entity);
    const { position, quaternion, scale } = components.get(TransformComponent);
    const { view } = components.get(ThreeViewComponent);

    view.position.copy(position);
    view.quaternion.copy(quaternion);
    view.scale.copy(scale);
  }
}
