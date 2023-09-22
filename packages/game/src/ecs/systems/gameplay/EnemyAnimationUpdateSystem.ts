// import { Time } from '../../../Time';
import { Time } from '../../../Time';
import { EnemyIdComponent, EnemyRotorsComponent } from '../../components';
import { System } from '@abs/core';
import { GameState } from '../../GameState';

export class EnemyAnimationUpdateSystem extends System<GameState> {
  public componentsRequired = [EnemyIdComponent, EnemyRotorsComponent];

  public update(entity: number, state: GameState): void {
    const components = this.ecs.getComponents(entity);

    const { mainRotor, tailRotor } = components.get(EnemyRotorsComponent);
    const { id: enemyId } = components.get(EnemyIdComponent);

    const enemy = state.gameModel.getEnemies().getEnemyById(enemyId);

    if (enemy === undefined) {
      return;
    }

    mainRotor.rotation.y += Time.deltaSeconds() * 10;
    tailRotor.visible = false; // cose of model
  }
}
