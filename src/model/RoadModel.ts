import EventEmitter from 'eventemitter3';
import { Id } from './Id';
import { BARRIER_HEIGHT } from '../constants';

export class RoadSegment {
  public readonly id = Id.get();

  constructor(
    public hasBarrier = true,
    public position = 0,
    public nextPosition = 0
  ) {}

  update(delta: number, velocity: number) {
    this.nextPosition = this.position;

    const distDelta = delta * velocity;
    this.position += distDelta;
    this.nextPosition = this.position + distDelta;
  }
}

export enum RoadEvent {
  AddSegment = 'AddSegment',
  RemoveSegment = 'RemoveSegment',
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

  deleteBackSegments() {
    let continueDeleting = this.segments.length > 0;

    while (continueDeleting) {
      const segment = this.segments[0];

      if (segment.position > this.backDistance) {
        this.segments.splice(0, 1);

        this.emit(RoadEvent.RemoveSegment, segment);
      } else {
        continueDeleting = false;
      }
    }
  }

  addFrontSegments() {
    let backDistance = this.backDistance;

    if (this.segments.length > 0) {
      const segment = this.segments[this.segments.length - 1];
      backDistance = segment.position - this.segmentSize;
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

  updateSegments(delta: number) {
    for (const segment of this.segments) {
      segment.update(delta, this.velocity);
    }
  }

  update(delta: number) {
    this.deleteBackSegments();
    this.addFrontSegments();
    this.updateSegments(delta);
  }

  getSegmentById(id: number) {
    for (const segment of this.segments) {
      if (segment.id === id) {
        return segment;
      }
    }
    return undefined;
  }

  getClosestBarrier(to: number) {
    // reverse order
    for (let i = this.segments.length - 1; i >= 0; i--) {
      const segment = this.segments[i];
      if (segment.hasBarrier) {
        if (
          segment.position >
          -(this.segmentSize * this.barrierFrequency) + to
        ) {
          return this.getSegmentById(segment.id);
        }
      }
    }
    return undefined;
  }
}
