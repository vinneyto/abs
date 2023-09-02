import EventEmitter from 'eventemitter3';
import { BARRIER_HEIGHT } from '../Assets';
import { Id } from './Id';

export class RoadSegment {
  public readonly id = Id.get();

  constructor(
    public hasBarrier = true,
    public distance = 0,
    public previousDistance = 0
  ) {}

  update(delta: number, velocity: number) {
    this.previousDistance = this.distance;

    const distDelta = delta * velocity;
    this.distance += distDelta;
  }
}

export enum RoadEvent {
  AddSegment = 'AddSegment',
  RemoveSegment = 'RemoveSegment',
  ClosestBarrierChanged = 'ClosestBarrierChanged',
}

export class RoadModel extends EventEmitter {
  public segments: RoadSegment[] = [];
  public velocity = 5;
  public frontDistance = -80; // -z
  public backDistance = 20;
  public segmentSize = 10;
  public segmentCount = 0;
  public barrierFrequency = 2;
  public barrierHeight = BARRIER_HEIGHT;
  public closestBarrierId?: number;

  deleteBackSegments() {
    let continueDeleting = this.segments.length > 0;

    while (continueDeleting) {
      const segment = this.segments[0];

      if (segment.distance > this.backDistance) {
        this.segments.splice(0, 1);

        this.emit(RoadEvent.RemoveSegment, segment.id);
      } else {
        continueDeleting = false;
      }
    }
  }

  addFrontSegments() {
    let backDistance = this.backDistance;

    if (this.segments.length > 0) {
      const segment = this.segments[this.segments.length - 1];
      backDistance = segment.distance - this.segmentSize;
    }

    const { frontDistance, segmentSize } = this;

    for (let pos = backDistance; pos >= frontDistance; pos -= segmentSize) {
      this.segmentCount++;

      const hasBarrier = this.segmentCount % this.barrierFrequency === 0;
      const segment = new RoadSegment(hasBarrier, pos, pos);

      this.segments.push(segment);
      this.emit(RoadEvent.AddSegment, segment);
    }
  }

  updateClosestBarrierId() {
    const closestBarrierId = this.getClosestBarrier(
      this.segmentSize * this.barrierFrequency
    );

    if (this.closestBarrierId !== closestBarrierId) {
      this.closestBarrierId = closestBarrierId;

      if (this.closestBarrierId !== undefined) {
        this.emit(RoadEvent.ClosestBarrierChanged, this.closestBarrierId);
      }
    }
  }

  updateSegments(delta: number) {
    for (const segment of this.segments) {
      segment.update(delta, this.velocity);
    }
  }

  update(delta: number) {
    this.deleteBackSegments();
    this.addFrontSegments();
    this.updateSegments(delta);
    this.updateClosestBarrierId();
  }

  getSegmentById(id: number) {
    for (const segment of this.segments) {
      if (segment.id === id) {
        return segment;
      }
    }
    return undefined;
  }

  getClosestBarrierSegment() {
    if (this.closestBarrierId === undefined) {
      return undefined;
    }
    return this.getSegmentById(this.closestBarrierId);
  }

  private getClosestBarrier(distance: number) {
    // reverse order
    for (let i = this.segments.length - 1; i >= 0; i--) {
      const segment = this.segments[i];
      if (segment.hasBarrier) {
        if (segment.distance > -distance) {
          return segment.id;
        }
      }
    }
    return undefined;
  }
}
