import {
  ClosestBarrierAttemptsComponent,
  TextComponent,
} from '../../components';
import { System } from '../../ecs';
import { GameState } from '../../GameState';

export class ClosestBarrierAttemptsUpdateSystem extends System<GameState> {
  public componentsRequired = [ClosestBarrierAttemptsComponent, TextComponent];

  public update(entity: number, state: GameState): void {
    const components = this.ecs.getComponents(entity);
    const textComponent = components.get(TextComponent);

    const countText = state.gameModel.attemptCount.toString();

    if (countText !== textComponent.text) {
      textComponent.text = countText;
      textComponent.color = 0x004499;
      textComponent.needsUpdate = true;
    }
  }
}
