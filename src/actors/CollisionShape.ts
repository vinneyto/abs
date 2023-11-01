import {
  Collider,
  ColliderDesc,
  RigidBody,
  RigidBodyDesc,
} from '@dimforge/rapier3d';
import { Facade } from '../Facade';
import { Actor } from './Actor';

export class CollisionShape extends Actor {
  public rigidBody: RigidBody;
  public collider: Collider;

  constructor(
    public rigidBodyDesc: RigidBodyDesc,
    public colliderDesc: ColliderDesc,
  ) {
    super();
    this.rigidBody = Facade.world.createRigidBody(rigidBodyDesc);
    this.collider = Facade.world.createCollider(colliderDesc, this.rigidBody);
  }

  dispose() {
    Facade.world.removeCollider(this.collider, true);
    Facade.world.removeRigidBody(this.rigidBody);
  }
}
