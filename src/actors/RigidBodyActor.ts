import { Actor } from './Actor';
import { rotToQuat, transToVec } from '../helpers';
import { CollisionShapeActor } from './CollisionShapeActor';
import { Mesh, Object3DEventMap } from 'three';
import { Context } from '../Context';

export class RigidBodyActor<
  TEventMap extends Object3DEventMap = Object3DEventMap,
> extends Actor<TEventMap> {
  constructor(
    public context: Context,
    public collisionShape: CollisionShapeActor,
    public debugMesh: Mesh,
  ) {
    super(context);

    this.add(collisionShape);
    this.add(debugMesh);
  }

  postUpdate(): void {
    const rigidBody = this.collisionShape.getRigidBody();

    this.position.copy(transToVec(rigidBody.translation()));
    this.quaternion.copy(rotToQuat(rigidBody.rotation()));

    this.debugMesh.visible = this.context.debugPhysics;
  }

  dispose() {
    this.collisionShape.dispose();
  }

  getCollisionShape() {
    return this.collisionShape;
  }
}
