import { Vector3, Mesh, SphereGeometry, MeshPhysicalMaterial } from 'three';
import { collider } from '../collider';
import { view } from '../view';
import { RapierModule } from '../../../types';

export function ball(RAPIER: RapierModule, position: Vector3, radius: number) {
  return [
    ...view({
      position,
      view: new Mesh(
        new SphereGeometry(radius, 32, 32),
        new MeshPhysicalMaterial({ color: 'red' })
      ),
    }),
    ...collider(
      RAPIER.RigidBodyDesc.dynamic(),
      RAPIER.ColliderDesc.ball(radius)
    ),
  ];
}