import { ColliderComponent, EnemyIdComponent } from '../../components';
import { System } from '../../ecs';
import { GameState } from '../../GameState';

export class EnemyPositionUpdateSystem extends System<GameState> {
  public componentsRequired = [ColliderComponent, EnemyIdComponent];

  public update(entity: number, state: GameState): void {
    const components = this.ecs.getComponents(entity);

    const { rigidBody } = components.get(ColliderComponent);
    const { id: enemyId } = components.get(EnemyIdComponent);

    const enemy = state.gameModel.getEnemies().getEnemyById(enemyId);

    if (enemy === undefined || rigidBody === undefined) {
      return;
    }

    rigidBody.setTranslation(enemy.position, false);
    rigidBody.setRotation(enemy.quaternion, false);
  }
}
