import { Scene } from 'three';
import {
  LifeCircle,
  LifeCircleComponent,
} from '../components/LifeCircleComponent';
import { ViewComponent } from '../components/ViewComponent';
import { System } from '../ecs';

export class ViewRemoveSystem extends System {
  public constructor(private readonly scene: Scene) {
    super();
  }

  public componentsRequired = [LifeCircleComponent, ViewComponent];

  public update(entity: number): void {
    const components = this.ecs.getComponents(entity);
    const lifeCircleComponent = components.get(LifeCircleComponent);
    const { view } = components.get(ViewComponent);

    if (lifeCircleComponent.state !== LifeCircle.Destroy) {
      return;
    }

    this.scene.remove(view);

    console.log('remove from scene', view);
  }
}
