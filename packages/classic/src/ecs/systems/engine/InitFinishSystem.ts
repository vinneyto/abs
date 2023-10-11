import { OnAdd } from '../../components';
import { System } from '../../ecs';
import { GameState } from '../../GameState';

export class InitFinishSystem extends System<GameState> {
  public query = [OnAdd];

  public update(entity: number): void {
    this.ecs.removeComponent(entity, OnAdd);
  }
}
