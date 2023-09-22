import { UpdateComponent } from '../../components';
import { Entity, System } from '../../ecs';
import { GameState } from '../../GameState';

export class PhysicsSystem extends System<GameState> {
  public componentsRequired = [UpdateComponent];

  public update(_: Entity, state: GameState): void {
    state.world.step();
  }
}
