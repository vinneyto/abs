import RAPIER, { World } from '@dimforge/rapier3d';
import { PerspectiveCamera, Scene, WebGLRenderer } from 'three';
import { RapierModule } from '../types';
import { Assets } from '../Assets';
import { GameModel } from '../model/GameModel';

interface IntersectionPair {
  collider1: RAPIER.Collider;
  collider2: RAPIER.Collider;
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
    public readonly gameModel: GameModel
  ) {}
}
