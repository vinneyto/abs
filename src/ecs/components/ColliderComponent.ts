import {
  Collider,
  RigidBody,
  RigidBodyDesc,
  ColliderDesc,
} from '@dimforge/rapier3d';

export class ColliderComponent {
  public rigidBodyDesc?: RigidBodyDesc;
  public colliderDesc?: ColliderDesc;

  public rigidBody?: RigidBody;
  public collider?: Collider;

  public initTransform = true;
}
