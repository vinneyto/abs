import { ClosestBarrierCountComponent, TextComponent } from '../../components';
import { System } from '../../ecs';
import { GameState } from '../../GameState';

export class ClosestBarrierCountUpdateSystem extends System<GameState> {
  public query = [ClosestBarrierCountComponent, TextComponent];

  public update(entity: number, state: GameState): void {
    const components = this.ecs.getComponents(entity);
    const textComponent = components.get(TextComponent);

    const countText = state.gameModel.getPassedCount().toString();

    if (countText !== textComponent.text) {
      textComponent.text = countText;
      textComponent.needsUpdate = true;
    }
  }
}
