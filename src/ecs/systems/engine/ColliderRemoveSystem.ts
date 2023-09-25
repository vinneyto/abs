import { World } from '@dimforge/rapier3d';
import { ColliderComponent, OnDestroy } from '../../components';
import { System } from '../../ecs';
import { GameState } from '../../GameState';

export class ColliderRemoveSystem extends System<GameState> {
  constructor(private readonly world: World) {
    super();
  }

  public query = [OnDestroy, ColliderComponent];

  public update(entity: number): void {
    const components = this.ecs.getComponents(entity);

    const colliderComponent = components.get(ColliderComponent);

    if (
      colliderComponent.collider === undefined ||
      colliderComponent.rigidBody === undefined
    ) {
      throw new Error('unable to destroy undefined collider or rigid body');
    }

    this.world.removeCollider(colliderComponent.collider, true);
    this.world.removeRigidBody(colliderComponent.rigidBody);

    console.log('destroy collider', colliderComponent.collider);
  }
}
