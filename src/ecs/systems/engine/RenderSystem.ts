import { UpdateComponent } from '../../components';
import { Entity, System } from '../../ecs';
import { GameState } from '../../model/GameState';

export class RenderSystem extends System<GameState> {
  public componentsRequired = [UpdateComponent];

  public update(_: Entity, state: GameState): void {
    const { renderer, scene, camera } = state;

    camera.aspect = renderer.domElement.width / renderer.domElement.height;
    camera.updateProjectionMatrix();

    renderer.render(scene, camera);
  }
}
