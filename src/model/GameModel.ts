import EventEmitter from 'eventemitter3';
import { RoadEvent, RoadModel, RoadSegment } from './RoadModel';
import { Vector3 } from 'three';

export class GameModel extends EventEmitter {
  public road = new RoadModel();

  public headPosition = new Vector3();
  public headCollisionEnabled = true;

  public nextBarrierSegment?: RoadSegment;

  public passedCount = 0;
  public attemptCount = 3;

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
      this.headPosition.y > this.road.barrierHeight &&
      this.attemptCount > 0
    ) {
      this.attemptCount--;
    }
  }

  update(delta: number) {
    this.updateRoad(delta);
    this.updateNextBarrier();
  }

  onHeadBarrierCollision = () => {
    this.attemptCount--;
  };

  getNextBarrierSegment() {
    return this.nextBarrierSegment;
  }

  getBarrierHeight() {
    return this.road.barrierHeight;
  }

  setHeadPosition(position: Vector3) {
    this.headPosition.copy(position);
  }
}
