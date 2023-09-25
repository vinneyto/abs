import { ThreeViewComponent } from '..';
import { TextComponent } from '../../ecs/components';
import { System } from '../../ecs/ecs';
import { GameState } from '../../ecs/GameState';

export class ThreeTextUpdateSystem extends System<GameState> {
  public query = [TextComponent, ThreeViewComponent];

  public update(entity: number): void {
    const components = this.ecs.getComponents(entity);

    const textComponent = components.get(TextComponent);
    const { view } = components.get(ThreeViewComponent);

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
