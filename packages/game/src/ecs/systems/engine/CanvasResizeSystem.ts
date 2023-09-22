import { CanvasSizeComponent } from '../../components';
import { Entity, System } from '../../ecs';
import { GameState } from '../../GameState';

export class CanvasResizeSystem extends System<GameState> {
  public componentsRequired = [CanvasSizeComponent];

  public update(entity: Entity, state: GameState): void {
    const { renderer } = state;

    const components = this.ecs.getComponents(entity);

    const { size } = components.get(CanvasSizeComponent);

    if (window.devicePixelRatio !== renderer.getPixelRatio()) {
      renderer.setPixelRatio(window.devicePixelRatio);
    }

    const width = renderer.domElement.offsetWidth;
    const height = renderer.domElement.offsetHeight;

    if (size.width !== width || size.height !== height) {
      renderer.setSize(width, height, false);
      size.set(width, height);

      console.log(size);
    }
  }
}
