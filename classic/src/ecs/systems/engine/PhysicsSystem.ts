import { EventQueue } from '@dimforge/rapier3d';
import { UpdateComponent } from '../../components';
import { Entity, System } from '../../ecs';
import { GameEvent, GameState } from '../../GameState';

export class PhysicsSystem extends System<GameState> {
  public query = [UpdateComponent];

  constructor(private readonly eventQueue: EventQueue) {
    super();
  }

  public update(_: Entity, state: GameState): void {
    state.world.step(this.eventQueue);

    this.eventQueue.drainCollisionEvents((h1, h2) => {
      const c1 = state.world.getCollider(h1);
      const c2 = state.world.getCollider(h2);

      const entity1 = (c1.parent()?.userData as { entity: number }).entity;
      const entity2 = (c2.parent()?.userData as { entity: number }).entity;

      state.events.emit(GameEvent.Collide, { entity1, entity2 });
    });
  }
}
