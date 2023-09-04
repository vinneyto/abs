import { EnemyIdComponent, TransformComponent } from '../../components';
import { System } from '../../ecs';
import { GameState } from '../../GameState';

export class EnemyUpdateSystem extends System<GameState> {
  public componentsRequired = [TransformComponent, EnemyIdComponent];

  public update(entity: number, state: GameState): void {
    const components = this.ecs.getComponents(entity);

    const { position } = components.get(TransformComponent);
    const { id: enemyId } = components.get(EnemyIdComponent);

    const enemy = state.gameModel.getEnemies().getEnemyById(enemyId);

    if (enemy === undefined) {
      return;
    }

    position.copy(enemy.body.center);
  }
}
