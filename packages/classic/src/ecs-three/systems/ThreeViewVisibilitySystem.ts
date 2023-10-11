import { ThreeViewComponent } from '..';
import { GameState } from '../../ecs/GameState';
import { VisibilityComponent } from '../../ecs/components';
import { System } from '../../ecs/ecs';

export class ThreeViewVisibilitySystem extends System<GameState> {
  public query = [VisibilityComponent, ThreeViewComponent];

  public update(entity: number): void {
    const components = this.ecs.getComponents(entity);
    const { view } = components.get(ThreeViewComponent);
    const { visible } = components.get(VisibilityComponent);

    view.visible = visible;
  }
}
