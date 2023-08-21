import RAPIER, { World } from '@dimforge/rapier3d';
import { Entity } from '../ecs';
import { PerspectiveCamera, Scene, WebGLRenderer } from 'three';
import { RapierModule } from '../../types';
import { Assets } from '../../Assets';

interface IntersectionPair {
  collider1: RAPIER.Collider;
  collider2: RAPIER.Collider;
}

export class GameStateEntities {
  constructor(public readonly road: Entity, public readonly head: Entity) {}
}

export class GameState {
  public intersections: IntersectionPair[] = [];

  constructor(
    public readonly scene: Scene,
    public readonly camera: PerspectiveCamera,
    public readonly world: World,
    public readonly renderer: WebGLRenderer,
    public readonly RAPIER: RapierModule,
    public readonly assets: Assets,
    public readonly entities: GameStateEntities
  ) {}
}
