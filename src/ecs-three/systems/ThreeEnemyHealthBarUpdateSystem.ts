import { GameState } from '../../ecs/GameState';
import { EnemyHealthComponent } from '../../ecs/components';
import { System } from '../../ecs/ecs';
import { ThreeEnemyHealthBarComponent } from '../components';
import { ProgressBarMaterial } from '../materials';

export class ThreeEnemyHealthBarUpdateSystem extends System<GameState> {
  public query = [EnemyHealthComponent, ThreeEnemyHealthBarComponent];

  public update(entity: number): void {
    const components = this.ecs.getComponents(entity);

    const { health } = components.get(EnemyHealthComponent);
    const { healthBar } = components.get(ThreeEnemyHealthBarComponent);

    (healthBar.material as ProgressBarMaterial).setProgress(health / 100);
  }
}
