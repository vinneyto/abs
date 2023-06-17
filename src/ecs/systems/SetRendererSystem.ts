import { WebGLRenderer } from 'three';
import { RendererComponent } from '../components/RendererComponent';
import { Entity, System } from '../ecs';

export class SetRendererSystem extends System {
  constructor(public readonly renderer: WebGLRenderer) {
    super();
  }

  public componentsRequired = [RendererComponent];

  public update(entity: Entity): void {
    const components = this.ecs.getComponents(entity);

    const rendererComponent = components.get(RendererComponent);

    rendererComponent.renderer = this.renderer;
  }
}
