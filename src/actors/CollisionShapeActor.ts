import {
  Collider,
  ColliderDesc,
  RigidBody,
  RigidBodyDesc,
} from '@dimforge/rapier3d';
import { Context } from '../Context';
import { Actor } from './Actor';
import { RigidBodyActor } from '.';

export class CollisionShapeActor extends Actor {
  public static getActor(rigidBody: RigidBody) {
    return (rigidBody.userData as Record<string, any>)
      .collisionShapeActor as CollisionShapeActor;
  }

  private rigidBody: RigidBody;
  private collider: Collider;

  constructor(
    context: Context,
    public rigidBodyDesc: RigidBodyDesc,
    public colliderDesc: ColliderDesc,
  ) {
    super(context);
    this.rigidBody = this.context.world.createRigidBody(rigidBodyDesc);
    this.collider = this.context.world.createCollider(
      colliderDesc,
      this.rigidBody,
    );

    this.rigidBody.userData = { collisionShapeActor: this };
  }

  dispose() {
    this.context.world.removeCollider(this.collider, true);
    this.context.world.removeRigidBody(this.rigidBody);
  }

  getRigidBody() {
    return this.rigidBody;
  }

  getCollider() {
    return this.collider;
  }

  getRigidBodyActor() {
    return this.parent as RigidBodyActor;
  }
}
