import { ThreeEnemyHealthBarComponent } from '../components';
import { GameState } from '../../ecs/GameState';
import { System } from '../../ecs/ecs';
import { TransformComponent } from '../../ecs/components';
import { HEALTH_BAR_PAN_Y } from '../constants';

export class ThreeEnemyHealthBarPositionUpdateSystem extends System<GameState> {
  query = [ThreeEnemyHealthBarComponent, TransformComponent];

  public update(entity: number): void {
    const components = this.ecs.getComponents(entity);

    const { position } = components.get(TransformComponent);
    const { healthBar } = components.get(ThreeEnemyHealthBarComponent);

    healthBar.position.copy(position);
    healthBar.position.y += HEALTH_BAR_PAN_Y;
  }
}
