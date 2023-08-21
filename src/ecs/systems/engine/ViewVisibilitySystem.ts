import { VisibilityComponent, ViewComponent } from '../../components';
import { System } from '../../ecs';
import { GameState } from '../../model/GameState';

export class ViewVisibilitySystem extends System<GameState> {
  public componentsRequired = [ViewComponent, VisibilityComponent];

  public update(entity: number): void {
    const components = this.ecs.getComponents(entity);
    const { view } = components.get(ViewComponent);
    const { visible } = components.get(VisibilityComponent);

    view.visible = visible;
  }
}
