import {
  Collider,
  RigidBody,
  RigidBodyDesc,
  ColliderDesc,
} from '@dimforge/rapier3d';
import { combineBitMasks, encodeLayersToBitMask } from '../../util';

export class CollisionGroups {
  public readonly membership: number[];
  public readonly filter: number[];

  constructor(membership: number[] = [0], filter?: number[]) {
    this.membership = membership;
    this.filter = filter !== undefined ? filter : [...membership];
  }

  getMask() {
    return combineBitMasks(
      encodeLayersToBitMask(this.membership),
      encodeLayersToBitMask(this.filter),
    );
  }
}

export class ColliderComponent {
  public rigidBodyDesc?: RigidBodyDesc;
  public colliderDesc?: ColliderDesc;

  public rigidBody?: RigidBody;
  public collider?: Collider;

  public collisionGroups = new CollisionGroups();
  public solverGroups = new CollisionGroups();

  public userData?: Record<string, unknown>;
}
