import { Quaternion, Vector3 } from '@abs/math';
import { combineBitMasks, encodeLayersToBitMask } from '../../util';
import { Component } from '../ecs';

export enum ColliderType {
  Ball,
  Trimesh,
}

export interface BallCollider {
  type: ColliderType.Ball;
  radius: number;
}

export interface TrimeshCollider {
  type: ColliderType.Trimesh;
  vertices: Float32Array;
  indices: Uint32Array;
}

export type Collider = BallCollider | TrimeshCollider;

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
      encodeLayersToBitMask(this.filter)
    );
  }
}

export class ColliderComponent extends Component {
  public collider: Collider = {
    type: ColliderType.Ball,
    radius: 1,
  };

  public translation = new Vector3();
  public rotation = new Quaternion();

  public linVel = new Vector3();

  public isStatic = false;
  public isSensor = false;
  public ccd = false;

  public gravityScale = 1;
  public additionalMass = 0;

  public collisionGroups = new CollisionGroups();
  public solverGroups = new CollisionGroups();
}
