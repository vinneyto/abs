import { CanvasSizeComponent } from '../components/CanvasSizeComponent';
import { RendererComponent } from '../components/RendererComponent';
import { Entity, System } from '../ecs';

export class CanvasResizeSystem extends System {
  public componentsRequired = [RendererComponent, CanvasSizeComponent];

  public update(entity: Entity): void {
    const components = this.ecs.getComponents(entity);

    const { renderer } = components.get(RendererComponent);
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
