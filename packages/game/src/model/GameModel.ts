import EventEmitter from 'eventemitter3';
import { RoadEvent, RoadModel, RoadSegment } from './RoadModel';
import { Vector3 } from 'three';
import { EnemiesModel } from './EnemiesModel';

export class GameModel extends EventEmitter {
  private road = new RoadModel();
  private enemies = new EnemiesModel();

  private headPosition = new Vector3();
  private headCollisionEnabled = true;

  private nextBarrierSegment?: RoadSegment;

  private passedCount = 0;
  private attemptCount = 3;

  private segmentPassedMap = new Set<number>();

  constructor() {
    super();

    this.road.on(RoadEvent.RemoveSegment, (segmentId: number) => {
      this.segmentPassedMap.delete(segmentId);
    });
  }

  updateRoad(delta: number) {
    this.road.update(delta);
  }

  updateEnemies(delta: number) {
    this.enemies.update(delta, this.headPosition);
  }

  updateNextBarrier() {
    const nextBarrierSegment = this.road.getClosestBarrier(this.headPosition.z);

    if (nextBarrierSegment === undefined) {
      return;
    }

    if (!this.segmentPassedMap.has(nextBarrierSegment.id)) {
      this.segmentPassedMap.add(nextBarrierSegment.id);

      this.nextBarrierSegment = nextBarrierSegment;
      this.updatePassesCount();
      this.updateAttemptCount();
    }
  }

  updatePassesCount() {
    this.passedCount++;
  }

  updateAttemptCount() {
    if (
      this.headCollisionEnabled &&
      this.headPosition.y > this.road.barrierHeight
    ) {
      this.decreaseAttempts();
    }
  }

  decreaseAttempts() {
    if (this.attemptCount > 0) {
      this.attemptCount--;
    }
  }

  update(delta: number) {
    this.updateRoad(delta);
    this.updateNextBarrier();
    this.updateEnemies(delta);
  }

  getNextBarrierSegment() {
    return this.nextBarrierSegment;
  }

  getBarrierHeight() {
    return this.road.barrierHeight;
  }

  setHeadPosition(position: Vector3) {
    this.headPosition.copy(position);
  }

  getHeadPosition() {
    return this.headPosition;
  }

  setHeadCollisionEnabled(value: boolean) {
    this.headCollisionEnabled = value;
  }

  getRoad() {
    return this.road;
  }

  getEnemies() {
    return this.enemies;
  }

  getAttemptCount() {
    return this.attemptCount;
  }
  getPassedCount() {
    return this.passedCount;
  }
}
