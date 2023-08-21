import { World } from '@dimforge/rapier3d';
import {
  ColliderComponent,
  LifeCircle,
  LifeCircleComponent,
} from '../../components';
import { System } from '../../ecs';

export class ColliderRemoveSystem extends System {
  constructor(private readonly world: World) {
    super();
  }

  public componentsRequired = [LifeCircleComponent, ColliderComponent];

  public update(entity: number): void {
    const components = this.ecs.getComponents(entity);

    const lifeCircleComponent = components.get(LifeCircleComponent);
    const colliderComponent = components.get(ColliderComponent);

    if (lifeCircleComponent.state !== LifeCircle.Destroy) {
      return;
    }

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
