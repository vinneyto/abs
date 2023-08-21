import { PerspectiveCamera, Scene, WebGLRenderer } from 'three';
import { UpdateComponent } from '../../components';
import { System } from '../../ecs';

export class RenderSystem extends System {
  constructor(
    private readonly renderer: WebGLRenderer,
    private readonly scene: Scene,
    private readonly camera: PerspectiveCamera
  ) {
    super();
  }

  public componentsRequired = [UpdateComponent];

  public update(): void {
    const { renderer, scene, camera } = this;

    camera.aspect = renderer.domElement.width / renderer.domElement.height;
    camera.updateProjectionMatrix();

    renderer.render(scene, camera);
  }
}
