import { Time } from '../../../Time';
import {
  LifeCircle,
  LifeCircleComponent,
  DestroyCountdownComponent,
} from '../../components';
import { System } from '../../ecs';

export class DestroyCountdownSystem extends System {
  public componentsRequired = [LifeCircleComponent, DestroyCountdownComponent];

  public update(entity: number): void {
    const components = this.ecs.getComponents(entity);
    const lifeCircleComponent = components.get(LifeCircleComponent);
    const countdownComponent = components.get(DestroyCountdownComponent);

    if (countdownComponent.countdown <= 0) {
      lifeCircleComponent.state = LifeCircle.Destroy;

      console.log('destroy by countdown', entity);

      return;
    }

    countdownComponent.countdown -= Time.deltaSeconds();
  }
}
