import { Scene } from 'three';
import {
  LifeCircle,
  LifeCircleComponent,
} from '../components/LifeCircleComponent';
import { ViewComponent } from '../components/ViewComponent';
import { System } from '../ecs';

export class ViewLifeCircleSystem extends System {
  public constructor(public readonly scene: Scene) {
    super();
  }

  public componentsRequired = [LifeCircleComponent, ViewComponent];

  public update(entity: number): void {
    const components = this.ecs.getComponents(entity);
    const lifeCircleComponent = components.get(LifeCircleComponent);
    const { view } = components.get(ViewComponent);

    switch (lifeCircleComponent.state) {
      case LifeCircle.New:
        this.scene.add(view);
        lifeCircleComponent.state = LifeCircle.Added;
        break;
      case LifeCircle.Destroy:
        this.scene.remove(view);
        break;
    }
  }
}
