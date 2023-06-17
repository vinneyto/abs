import {
  LifeCircle,
  LifeCircleComponent,
} from '../components/LifeCircleComponent';
import { System } from '../ecs';

export class EntityDestroySystem extends System {
  public componentsRequired = [LifeCircleComponent];

  public update(entity: number): void {
    const components = this.ecs.getComponents(entity);
    const { state } = components.get(LifeCircleComponent);

    if (state === LifeCircle.Destroy) {
      this.ecs.removeEntity(entity);
    }
  }
}
