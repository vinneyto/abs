import { ThreeViewComponent } from '..';
import { GameState } from '../../ecs/GameState';
import { LifeCircleComponent, LifeCircle } from '../../ecs/components';
import { System } from '../../ecs/ecs';

export class ThreeViewRemoveSystem extends System<GameState> {
  public componentsRequired = [LifeCircleComponent, ThreeViewComponent];

  public update(entity: number): void {
    const components = this.ecs.getComponents(entity);
    const lifeCircleComponent = components.get(LifeCircleComponent);
    const { view } = components.get(ThreeViewComponent);

    if (lifeCircleComponent.state !== LifeCircle.Destroy) {
      return;
    }

    if (view.parent) {
      view.parent.remove(view);
    }

    console.log('remove view', view);
  }
}
