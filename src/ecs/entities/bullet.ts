import { Vector3 } from 'three';
import { collider } from './collider';
import { base } from './base';
import { destroyCountdown } from './destroyCountdown';
import { RapierModule } from '../../types';
import { BulletComponent, CollisionGroups, Meshes } from '../components';
import { BULLET_RADIUS, GROUP_ENEMIES } from '../../constants';
import { component } from '../ecs';

export function bullet(
  RAPIER: RapierModule,
  spawn: Vector3,
  direction: Vector3
) {
  const velocity = direction.clone().multiplyScalar(500);

  return [
    ...base({
      mesh: Meshes.Bullet,
    }),
    ...collider(
      RAPIER.RigidBodyDesc.dynamic()
        .setLinvel(velocity.x, velocity.y, velocity.z)
        .setCcdEnabled(true)
        .setGravityScale(0)
        .setAdditionalMass(1)
        .setTranslation(spawn.x, spawn.y, spawn.z),
      RAPIER.ColliderDesc.ball(BULLET_RADIUS),
      new CollisionGroups([GROUP_ENEMIES]) // query contacts with enemies
    ),
    ...destroyCountdown(2),
    component(BulletComponent),
  ];
}
