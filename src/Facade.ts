import EventEmitter from 'eventemitter3';
import { Assets, RapierModule } from './types';
import { World } from '@dimforge/rapier3d';

export enum GameInputEvent {
  SelectStart = 'selectStart',
  SelectEnd = 'selectEnd',
  Move = 'Move',
}

export class Facade {
  private static instance_?: Facade;

  public static get instance() {
    if (this.instance_ === undefined) {
      this.instance_ = new Facade();
    }
    return this.instance_;
  }

  public static get world() {
    return this.instance.world;
  }

  public static get RAPIER() {
    return this.instance.RAPIER;
  }

  public static get assets() {
    return this.instance.assets;
  }

  public static get input() {
    return this.instance.input;
  }

  public debugPhysics = true;

  private world!: World;
  private assets!: Assets;
  private RAPIER!: RapierModule;
  private input = new EventEmitter();
  private initialized = false;

  public init(world: World, assets: Assets, RAPIER: RapierModule) {
    if (this.initialized) {
      throw new Error('context has already initialized');
    }
    this.world = world;
    this.assets = assets;
    this.RAPIER = RAPIER;
    this.initialized = true;
  }
}
