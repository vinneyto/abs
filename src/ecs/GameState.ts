import { World } from '@dimforge/rapier3d';
import { PerspectiveCamera, Scene, WebGLRenderer } from 'three';
import { RapierModule } from '../types';
import { Assets } from '../Assets';
import { GameModel } from '../model/GameModel';
import EventEmitter from 'eventemitter3';
import { Entity } from './ecs';

export enum CollisionEvent {
  Collide = 'Collide',
}

export interface CollisionObject {
  entity1: Entity;
  entity2: Entity;
}

export class GameState {
  constructor(
    public readonly scene: Scene,
    public readonly camera: PerspectiveCamera,
    public readonly world: World,
    public readonly renderer: WebGLRenderer,
    public readonly RAPIER: RapierModule,
    public readonly assets: Assets,
    public readonly gameModel: GameModel,
    public readonly collisions: EventEmitter
  ) {}
}
