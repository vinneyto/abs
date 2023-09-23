import {
  CatmullRomCurve3,
  Euler,
  Matrix4,
  Quaternion,
  Sphere,
  Vector3,
} from '@abs/math';
import { Id } from './Id';
import EventEmitter from 'eventemitter3';

const up = new Vector3(0, 1, 0);
const quat90x = new Quaternion().setFromEuler(new Euler(-Math.PI / 2, 0, 0));

export enum EnemyGunEvent {
  Fire = 'Fire',
}

export class EnemyGun extends EventEmitter {
  public enabled = true;

  public timeToFire = 0;
  public interval = 0.2;

  constructor(public readonly enemyId = 0, public readonly index = 0) {
    super();
  }

  update(delta: number) {
    if (!this.enabled) {
      return;
    }

    if (this.timeToFire <= 0) {
      this.timeToFire = this.interval;
      this.emit(EnemyGunEvent.Fire, this);
    }

    this.timeToFire -= delta;
  }
}

export class Enemy extends EventEmitter {
  public readonly id = Id.get();
  private curve!: CatmullRomCurve3;
  private t: number = 0;
  private speed: number = 0.1;
  private points: Vector3[] = [];
  private rotationMatrix = new Matrix4();

  public position: Vector3;
  public quaternion: Quaternion;

  public guns: EnemyGun[] = [];

  constructor(private arial: Sphere) {
    super();
    this.position = arial.center.clone();
    this.quaternion = new Quaternion();
    this.generateNewCurve();

    for (let i = 0; i < 4; i++) {
      const gun = new EnemyGun(this.id, i);
      gun.timeToFire *= i;
      gun.on(EnemyGunEvent.Fire, g => this.emit(EnemyGunEvent.Fire, g));
      this.guns.push(gun);
    }
  }

  update(delta: number, playerPosition: Vector3) {
    this.updatePosition(delta, playerPosition);
    this.updateGuns(delta);
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

  private updatePosition(delta: number, playerPosition: Vector3) {
    this.t += this.speed * delta;

    if (this.t > 1) {
      this.t = 0;
      this.generateNewCurve();
    }

    this.position = this.curve.getPoint(this.t);

    this.rotationMatrix.lookAt(playerPosition, this.position, up);
    this.quaternion
      .setFromRotationMatrix(this.rotationMatrix)
      .multiply(quat90x);
  }

  private updateGuns(delta: number) {
    for (const gun of this.guns) {
      gun.update(delta);
    }
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
    return enemy;
  }

  update(delta: number, playerPosition: Vector3) {
    for (const enemy of this.enemies.values()) {
      enemy.update(delta, playerPosition);
    }
  }

  getEnemyById(id: number) {
    return this.enemies.get(id);
  }
}
