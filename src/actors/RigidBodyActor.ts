import { Actor } from './Actor';
import { rotToQuat, transToVec, vetToTrans } from '../helpers';
import { CollisionShape } from './CollisionShape';
import { Mesh, Vector3 } from 'three';
import { Context } from '../Context';

export class RigidBodyActor extends Actor {
  constructor(
    public context: Context,
    public collisionShape: CollisionShape,
    public debugMesh: Mesh,
  ) {
    super(context);

    this.add(collisionShape);
    this.add(debugMesh);
  }

  postUpdate(): void {
    const { rigidBody } = this.collisionShape;

    this.position.copy(transToVec(rigidBody.translation()));
    this.quaternion.copy(rotToQuat(rigidBody.rotation()));

    this.debugMesh.visible = this.context.debugPhysics;
  }

  dispose() {
    this.collisionShape.dispose();
  }

  setTranslation(vector: Vector3) {
    this.collisionShape.rigidBody.setTranslation(vetToTrans(vector), true);
  }
}
