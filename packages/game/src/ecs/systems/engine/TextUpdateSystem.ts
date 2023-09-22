import { TextComponent, ViewComponent } from '../../components';
import { System } from '@abs/core';
import { GameState } from '../../GameState';

export class TextUpdateSystem extends System<GameState> {
  public componentsRequired = [TextComponent, ViewComponent];

  public update(entity: number): void {
    const components = this.ecs.getComponents(entity);

    const textComponent = components.get(TextComponent);
    const { view } = components.get(ViewComponent);

    if (!textComponent.needsUpdate) {
      return;
    }

    const { text, fontSize, color } = textComponent;

    const textView = view as any;
    textView.text = text;
    textView.fontSize = fontSize;
    textView.color = color;
    textView.sync();

    textComponent.needsUpdate = false;
  }
}
