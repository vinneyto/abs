import { Time } from '../../../Time';
import { DestroyCountdownComponent, OnDestroy } from '../../components';
import { System } from '../../ecs';
import { GameState } from '../../GameState';

export class DestroyCountdownSystem extends System<GameState> {
  public query = [DestroyCountdownComponent];

  public update(entity: number): void {
    const components = this.ecs.getComponents(entity);
    const countdownComponent = components.get(DestroyCountdownComponent);

    if (countdownComponent.countdown <= 0) {
      this.ecs.addComponent(entity, OnDestroy);

      console.log('destroy by countdown', entity);

      return;
    }

    countdownComponent.countdown -= Time.deltaSeconds();
  }
}
