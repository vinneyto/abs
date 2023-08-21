import { LifeCircle, LifeCircleComponent } from '../../components';
import { System } from '../../ecs';

export class InitFinishSystem extends System {
  public componentsRequired = [LifeCircleComponent];

  public update(entity: number): void {
    const components = this.ecs.getComponents(entity);

    const lifeCircleComponent = components.get(LifeCircleComponent);

    if (lifeCircleComponent.state === LifeCircle.New) {
      lifeCircleComponent.state = LifeCircle.Added;
    }
  }
}
