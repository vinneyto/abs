import { GameState } from '../../ecs/GameState';
import { OnDestroy } from '../../ecs/components';
import { System } from '../../ecs/ecs';
import { ThreeEnemyHealthBarComponent } from '../components';

export class ThreeEnemyHealthBarRemoveSystem extends System<GameState> {
  public query = [OnDestroy, ThreeEnemyHealthBarComponent];

  public update(entity: number, state: GameState): void {
    const components = this.ecs.getComponents(entity);

    const { healthBar } = components.get(ThreeEnemyHealthBarComponent);

    state.scene.remove(healthBar);
  }
}
