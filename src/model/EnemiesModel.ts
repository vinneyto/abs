import { Sphere, Vector3 } from 'three';
import { Id } from './Id';
import EventEmitter from 'eventemitter3';
import { ENEMY_RADIUS } from '../Assets';

export class Enemy {
  public readonly id = Id.get();
  public readonly velocity = new Vector3();

  constructor(public body: Sphere, public speed: number) {}

  update(delta: number, target: Vector3) {
    this.velocity
      .subVectors(target, this.body.center)
      .normalize()
      .multiplyScalar(this.speed);

    this.body.center.addScaledVector(this.velocity, delta);
  }
}

export enum EnemiesEvent {
  AddEnemy = 'AddEnemy',
  DeleteEnemy = 'DeleteEnemy',
  HitPlayer = 'HitPlayer',
}

export interface SpawnEnemiesConfig {
  habitatCount: number;
  enemiesPerHabitatCount: number;
  distance: number;
  height: number;
  habitatRadius: number;
  velocity: number;
}

export class EnemiesModel extends EventEmitter {
  private readonly enemies = new Map<number, Enemy>();

  spawnEnemy(position: Vector3, speed: number) {
    const enemy = new Enemy(new Sphere(position, ENEMY_RADIUS), speed);
    this.enemies.set(enemy.id, enemy);
    this.emit(EnemiesEvent.AddEnemy, enemy);
  }

  update(delta: number, headBody: Sphere) {
    for (const enemy of this.enemies.values()) {
      enemy.update(delta, headBody.center);
    }
  }

  getEnemyById(id: number) {
    return this.enemies.get(id);
  }
}
