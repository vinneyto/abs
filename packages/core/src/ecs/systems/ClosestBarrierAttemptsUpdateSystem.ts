import { ClosestBarrierAttemptsComponent, TextComponent } from '../components';
import { State, System } from '@abs/core';

export class ClosestBarrierAttemptsUpdateSystem extends System<State> {
  public componentsRequired = [ClosestBarrierAttemptsComponent, TextComponent];

  public update(entity: number, state: State): void {
    const components = this.ecs.getComponents(entity);
    const textComponent = components.get(TextComponent);

    const countText = state.gameModel.getAttemptCount().toString();

    if (countText !== textComponent.text) {
      textComponent.text = countText;
      textComponent.color = 0x004499;
      textComponent.needsUpdate = true;
    }
  }
}
