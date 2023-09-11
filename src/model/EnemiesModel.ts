import { CatmullRomCurve3, Sphere, Vector3 } from 'three';
import { Id } from './Id';
import EventEmitter from 'eventemitter3';

export class Enemy {
  public readonly id = Id.get();
  private curve!: CatmullRomCurve3;
  private t: number = 0;
  private speed: number = 0.1;
  private points: Vector3[] = [];

  public position: Vector3;

  constructor(private arial: Sphere) {
    this.position = arial.center.clone();
    this.generateNewCurve();
  }

  private generateNewCurve() {
    this.points = [];

    this.points.push(this.position.clone());
    for (let i = 0; i < 3; i++) {
      this.points.push(this.getRandomPointInSphere());
    }
    this.points.push(this.position.clone());

    this.curve = new CatmullRomCurve3(this.points);
  }

  private getRandomPointInSphere(): Vector3 {
    const theta = 2 * Math.PI * Math.random();
    const phi = Math.acos(2 * Math.random() - 1);
    const r = this.arial.radius * Math.cbrt(Math.random());

    const x = r * Math.sin(phi) * Math.cos(theta);
    const y = r * Math.sin(phi) * Math.sin(theta);
    const z = r * Math.cos(phi);

    return new Vector3(x, y, z).add(this.arial.center);
  }

  public update(delta: number) {
    this.t += this.speed * delta;

    if (this.t > 1) {
      this.t = 0;
      this.generateNewCurve();
    }

    this.position = this.curve.getPoint(this.t);
  }
}

export enum EnemiesEvent {
  AddEnemy = 'AddEnemy',
  DeleteEnemy = 'DeleteEnemy',
}

export class EnemiesModel extends EventEmitter {
  private readonly enemies = new Map<number, Enemy>();

  spawnEnemy(arial: Sphere) {
    const enemy = new Enemy(arial);
    this.enemies.set(enemy.id, enemy);
    this.emit(EnemiesEvent.AddEnemy, enemy);
  }

  update(delta: number) {
    for (const enemy of this.enemies.values()) {
      enemy.update(delta);
    }
  }

  getEnemyById(id: number) {
    return this.enemies.get(id);
  }
}
