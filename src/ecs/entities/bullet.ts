import { Mesh, MeshPhysicalMaterial, SphereGeometry, Vector3 } from 'three';
import { collider } from './collider';
import { view } from './view';
import { destroyCountdown } from './destroyCountdown';
import { RapierModule } from '../../types';

const BULLET_RADIUS = 0.03;
const bulletGeometry = new SphereGeometry(BULLET_RADIUS, 16, 16);
const bulletMaterial = new MeshPhysicalMaterial({ color: 'yellow' });

export function bullet(
  RAPIER: RapierModule,
  spawn: Vector3,
  direction: Vector3
) {
  const velocity = direction.clone().multiplyScalar(500);

  return [
    ...view({
      position: spawn,
      view: new Mesh(bulletGeometry, bulletMaterial),
    }),
    ...collider(
      RAPIER.RigidBodyDesc.dynamic()
        .setLinvel(velocity.x, velocity.y, velocity.z)
        .setCcdEnabled(true)
        .setGravityScale(0)
        .setAdditionalMass(1),
      RAPIER.ColliderDesc.ball(BULLET_RADIUS)
    ),
    ...destroyCountdown(1),
  ];
}
