import { Actor } from './Actor';
import { rotToQuat, transToVec, vetToTrans } from '../helpers';
import { CollisionShape } from './CollisionShape';
import { Mesh, Vector3 } from 'three';
import { Facade } from '../Facade';

export class RigidBodyActor extends Actor {
  constructor(
    public collisionShape: CollisionShape,
    public debugMesh: Mesh,
  ) {
    super();

    this.add(collisionShape);
    this.add(debugMesh);
  }

  postUpdate(): void {
    const { rigidBody } = this.collisionShape;

    this.position.copy(transToVec(rigidBody.translation()));
    this.quaternion.copy(rotToQuat(rigidBody.rotation()));

    this.debugMesh.visible = Facade.instance.debugPhysics;
  }

  dispose() {
    this.collisionShape.dispose();
  }

  setTranslation(vector: Vector3) {
    this.collisionShape.rigidBody.setTranslation(vetToTrans(vector), true);
  }
}
