import { OnDestroy } from '../../components';
import { System } from '../../ecs';
import { GameState } from '../../GameState';

export class EntityDestroySystem extends System<GameState> {
  public query = [OnDestroy];

  public update(entity: number): void {
    this.ecs.removeEntity(entity);

    console.log('destroy entity', entity);
  }
}
