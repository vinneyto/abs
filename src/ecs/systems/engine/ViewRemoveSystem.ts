import {
  LifeCircle,
  LifeCircleComponent,
  ViewComponent,
} from '../../components';
import { System } from '../../ecs';
import { GameState } from '../../model/GameState';

export class ViewRemoveSystem extends System<GameState> {
  public componentsRequired = [LifeCircleComponent, ViewComponent];

  public update(entity: number): void {
    const components = this.ecs.getComponents(entity);
    const lifeCircleComponent = components.get(LifeCircleComponent);
    const { view } = components.get(ViewComponent);

    if (lifeCircleComponent.state !== LifeCircle.Destroy) {
      return;
    }

    if (view.parent) {
      view.parent.remove(view);
    }

    console.log('remove view', view);
  }
}
