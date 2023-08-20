import RAPIER from '@dimforge/rapier3d';

interface IntersectionPair {
  collider1: RAPIER.Collider;
  collider2: RAPIER.Collider;
}

export class GameState {
  public roadVelocity = 2;
  public intersections: IntersectionPair[] = [];
}
