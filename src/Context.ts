import { Assets, RapierModule } from './types';
import { World } from '@dimforge/rapier3d';
import { WebGLRenderer } from 'three';

export class Context {
  public debugPhysics = true;

  constructor(
    public readonly world: World,
    public readonly assets: Assets,
    public readonly RAPIER: RapierModule,
    public readonly renderer: WebGLRenderer,
  ) {}
}
