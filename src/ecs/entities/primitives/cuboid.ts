import { Vector3, Mesh, MeshPhysicalMaterial, BoxGeometry } from 'three';
import { collider } from '../collider';
import { view } from '../view';
import { RapierModule } from '../../../types';

export function cuboid(
  RAPIER: RapierModule,
  position: Vector3,
  width: number,
  height: number,
  depth: number
) {
  return [
    ...view({
      view: new Mesh(
        new BoxGeometry(width, height, depth),
        new MeshPhysicalMaterial({ color: 'red' })
      ),
    }),
    ...collider(
      RAPIER.RigidBodyDesc.dynamic().setTranslation(
        position.x,
        position.y,
        position.z
      ),
      RAPIER.ColliderDesc.cuboid(width * 0.5, height * 0.5, depth * 0.5)
    ),
  ];
}
