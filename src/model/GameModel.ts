import EventEmitter from 'eventemitter3';
import { HeadModel, HeadEvent } from './HeadModel';
import { RoadModel, RoadEvent } from './RoadModel';

export class GameModel extends EventEmitter {
  public road = new RoadModel();
  public head = new HeadModel();

  public passedCount = 0;
  public attemptCount = 3;

  constructor() {
    super();

    this.road.on(RoadEvent.ClosestBarrierChanged, this.onClosestBarrierChanged);
    this.head.on(HeadEvent.BarrierCollision, this.onHeadBarrierCollision);
  }

  update(delta: number) {
    this.road.update(delta);

    const closestBarrier = this.road.getClosestBarrierSegment();

    if (closestBarrier !== undefined) {
      this.head.checkBarrierCollision(closestBarrier, this.road.barrierHeight);
    }
  }

  onClosestBarrierChanged = () => {
    this.passedCount++;
  };

  onHeadBarrierCollision = () => {
    this.attemptCount--;
  };
}
