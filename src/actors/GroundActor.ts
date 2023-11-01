import { BoxGeometry, Mesh, MeshBasicMaterial, Vector3 } from 'three';
import { Facade } from '../Facade';
import { CollisionShape } from './CollisionShape';
import { RigidBodyActor } from './RigidBodyActor';

export class GroundActor extends RigidBodyActor {
  constructor(size = new Vector3(10, 0.5, 10)) {
    const shape = new CollisionShape(
      Facade.RAPIER.RigidBodyDesc.fixed().setTranslation(0, 0, 0),
      Facade.RAPIER.ColliderDesc.cuboid(
        size.x * 0.5,
        size.y * 0.5,
        size.z * 0.5,
      ),
    );

    const debugMesh = new Mesh(
      new BoxGeometry(size.x, size.y, size.z),
      new MeshBasicMaterial({ wireframe: true, color: 'green' }),
    );

    super(shape, debugMesh);

    this.setTranslation(new Vector3(0, -size.y * 0.5, 0));
  }
}
