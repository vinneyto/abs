import {
  LifeCircle,
  LifeCircleComponent,
  ViewComponent,
} from '../../components';
import { System } from '../../ecs';
import { GameState } from '../../GameState';

export class ViewAddSystem extends System<GameState> {
  public componentsRequired = [LifeCircleComponent, ViewComponent];

  public update(entity: number, state: GameState): void {
    const { scene } = state;
    const components = this.ecs.getComponents(entity);
    const lifeCircleComponent = components.get(LifeCircleComponent);
    const { view, addTo, castShadow, receiveShadow } =
      components.get(ViewComponent);

    if (lifeCircleComponent.state !== LifeCircle.New) {
      return;
    }

    const container = scene.getObjectByName(addTo);

    if (container === undefined) {
      console.log(scene);
      throw new Error(`unable add object to container ${addTo}`);
    }

    container.add(view);

    view.traverse(obj => {
      obj.castShadow = castShadow;
      obj.receiveShadow = receiveShadow;
    });

    console.log('add view', view);
  }
}
