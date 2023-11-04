import {
  Collider,
  ColliderDesc,
  RigidBody,
  RigidBodyDesc,
} from '@dimforge/rapier3d';
import { Context } from '../Context';
import { Actor } from './Actor';

export class CollisionShape extends Actor {
  public rigidBody: RigidBody;
  public collider: Collider;

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
  }

  dispose() {
    this.context.world.removeCollider(this.collider, true);
    this.context.world.removeRigidBody(this.rigidBody);
  }
}
