import { Mesh, MeshBasicMaterial, SphereGeometry, Vector3 } from 'three';
import { collider } from './collider';
import { view } from './view';
import { destroyCountdown } from './destroyCountdown';
import { RapierModule } from '../../types';
import { CollisionGroups } from '../components';
import { GROUP_ENEMIES } from './constants';

const BULLET_RADIUS = 0.03;
const bulletGeometry = new SphereGeometry(BULLET_RADIUS, 16, 16);
const bulletMaterial = new MeshBasicMaterial({ color: 0xff0000 });

export function bullet(
  RAPIER: RapierModule,
  spawn: Vector3,
  direction: Vector3
) {
  const velocity = direction.clone().multiplyScalar(500);

  return [
    ...view({
      view: new Mesh(bulletGeometry, bulletMaterial),
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
    ...destroyCountdown(1),
  ];
}
