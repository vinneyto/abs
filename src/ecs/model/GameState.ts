import RAPIER from '@dimforge/rapier3d';
import { Entity } from '../ecs';

interface IntersectionPair {
  collider1: RAPIER.Collider;
  collider2: RAPIER.Collider;
}

export class GameState {
  public roadEntity: Entity = 0;
  public headEntity: Entity = 0;

  public intersections: IntersectionPair[] = [];
}
