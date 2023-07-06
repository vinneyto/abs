import { Mesh, MeshPhysicalMaterial, SphereGeometry, Vector3 } from 'three';
import { collider } from './collider';
import { view } from './view';
import { destroyCountdown } from './destroyCountdown';
import { RapierModule } from '../../types';

export function bullet(
  RAPIER: RapierModule,
  spawn: Vector3,
  direction: Vector3
) {
  const radius = 0.03;
  const velocity = direction.clone().multiplyScalar(500);

  return [
    ...view({
      position: spawn,
      view: new Mesh(
        new SphereGeometry(radius, 16, 16),
        new MeshPhysicalMaterial({ color: 'yellow' })
      ),
    }),
    ...collider(
      RAPIER.RigidBodyDesc.dynamic()
        .setLinvel(velocity.x, velocity.y, velocity.z)
        .setCcdEnabled(true)
        .setGravityScale(0)
        .setAdditionalMass(1),
      RAPIER.ColliderDesc.ball(radius)
    ),
    ...destroyCountdown(1),
  ];
}
