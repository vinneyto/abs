import {
  ColliderComponent,
  LifeCircle,
  LifeCircleComponent,
  TransformComponent,
} from '../../components';
import { Entity, System } from '../../ecs';
import { GameState } from '../../GameState';

export class ColliderAddSystem extends System<GameState> {
  public componentsRequired = [
    LifeCircleComponent,
    ColliderComponent,
    TransformComponent,
  ];

  public update(entity: Entity, state: GameState): void {
    const { world } = state;
    const components = this.ecs.getComponents(entity);

    const lifeCircleComponent = components.get(LifeCircleComponent);
    const colliderComponent = components.get(ColliderComponent);
    const { position, quaternion } = components.get(TransformComponent);

    if (lifeCircleComponent.state !== LifeCircle.New) {
      return;
    }

    if (
      colliderComponent.colliderDesc === undefined ||
      colliderComponent.rigidBodyDesc === undefined
    ) {
      throw new Error('unable to instantiate undefined collider or rigid body');
    }

    if (colliderComponent.initTransform) {
      colliderComponent.rigidBodyDesc.setTranslation(
        position.x,
        position.y,
        position.z
      );
      colliderComponent.rigidBodyDesc.setRotation(quaternion);
    }

    colliderComponent.colliderDesc
      .setCollisionGroups(colliderComponent.collisionGroups.getMask())
      .setSolverGroups(colliderComponent.solverGroups.getMask());

    const rigidBody = world.createRigidBody(colliderComponent.rigidBodyDesc);

    const collider = world.createCollider(
      colliderComponent.colliderDesc,
      rigidBody
    );

    colliderComponent.rigidBody = rigidBody;
    colliderComponent.collider = collider;

    rigidBody.userData = { ...colliderComponent.userData, entity };

    console.log('add collider', collider);
  }
}
