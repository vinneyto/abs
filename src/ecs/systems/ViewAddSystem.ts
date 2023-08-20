import { Scene } from 'three';
import { LifeCircle, LifeCircleComponent, ViewComponent } from '../components';
import { System } from '../ecs';

export class ViewAddSystem extends System {
  public constructor(private readonly scene: Scene) {
    super();
  }

  public componentsRequired = [LifeCircleComponent, ViewComponent];

  public update(entity: number): void {
    const components = this.ecs.getComponents(entity);
    const lifeCircleComponent = components.get(LifeCircleComponent);
    const { view, addTo, castShadow, receiveShadow } =
      components.get(ViewComponent);

    if (lifeCircleComponent.state !== LifeCircle.New) {
      return;
    }

    const container = this.scene.getObjectByName(addTo);

    if (container === undefined) {
      console.log(this.scene);
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
