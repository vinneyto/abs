import { WebGLRenderer } from 'three';
import { CanvasSizeComponent } from '../components/CanvasSizeComponent';
import { Entity, System } from '../ecs';

export class CanvasResizeSystem extends System {
  constructor(private readonly renderer: WebGLRenderer) {
    super();
  }

  public componentsRequired = [CanvasSizeComponent];

  public update(entity: Entity): void {
    const { renderer } = this;

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
