import { UpdateComponent } from '../../components';
import { Entity, System } from '../../ecs';
import { GameState } from '../../GameState';

export class RenderSystem extends System<GameState> {
  public query = [UpdateComponent];

  public update(_: Entity, state: GameState): void {
    const { renderer, scene, camera } = state;

    camera.aspect = renderer.domElement.width / renderer.domElement.height;
    camera.updateProjectionMatrix();

    renderer.render(scene, camera);
  }
}
