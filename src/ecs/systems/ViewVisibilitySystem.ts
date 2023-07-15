import { VisibilityComponent } from '../components/VisibilityComponent';
import { ViewComponent } from '../components/ViewComponent';
import { System } from '../ecs';

export class ViewVisibilitySystem extends System {
  public componentsRequired = [ViewComponent, VisibilityComponent];
  public update(entity: number): void {
    const components = this.ecs.getComponents(entity);
    const { view } = components.get(ViewComponent);
    const { visible } = components.get(VisibilityComponent);

    view.visible = visible;
  }
}
