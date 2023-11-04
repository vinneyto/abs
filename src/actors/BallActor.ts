import { Mesh, MeshBasicMaterial, SphereGeometry } from 'three';
import { Context } from '../Context';
import { CollisionShape } from './CollisionShape';
import { RigidBodyActor } from './RigidBodyActor';

export class BallActor extends RigidBodyActor {
  constructor(radius = 0.5) {
    const shape = new CollisionShape(
      Context.RAPIER.RigidBodyDesc.dynamic(),
      Context.RAPIER.ColliderDesc.ball(radius),
    );

    const debugMesh = new Mesh(
      new SphereGeometry(radius),
      new MeshBasicMaterial({ wireframe: true, color: 'red' }),
    );

    super(shape, debugMesh);
  }
}
