import { ColliderDesc, RigidBodyDesc } from '@dimforge/rapier3d';
import { component } from '../ecs';
import { ColliderComponent, CollisionGroups } from '../components';

export function collider(
  rigidBodyDesc: RigidBodyDesc,
  colliderDesc: ColliderDesc,
  collisionGroups = new CollisionGroups(),
  solverGroups = new CollisionGroups(),
  userData?: Record<string, unknown>,
) {
  return [
    component(ColliderComponent).assign({
      rigidBodyDesc,
      colliderDesc,
      collisionGroups,
      solverGroups,
      userData,
    }),
  ];
}
