import { ColliderDesc, RigidBodyDesc } from '@dimforge/rapier3d';
import { component } from '../ecs';
import { ColliderComponent } from '../components/ColliderComponent';

export function collider(
  rigidBodyDesc: RigidBodyDesc,
  colliderDesc: ColliderDesc
) {
  return [component(ColliderComponent).assign({ rigidBodyDesc, colliderDesc })];
}
