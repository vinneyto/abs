import EventEmitter from 'eventemitter3';
import { Vector3 } from 'three';
import { RoadSegment } from './RoadModel';

export enum HeadEvent {
  BarrierCollision = 'BarrierCollision',
}

export class HeadModel extends EventEmitter {
  public position = new Vector3();
  public collidedBarrierId?: number;

  setPosition(position: Vector3) {
    this.position.copy(position);
  }

  checkBarrierCollision(barrier: RoadSegment, barrierHeight: number) {
    if (barrier.id === this.collidedBarrierId) {
      return;
    }

    const { position } = this;

    if (
      position.y > barrierHeight &&
      position.z < barrier.distance &&
      position.z > barrier.previousDistance
    ) {
      this.collidedBarrierId = barrier.id;

      this.emit(HeadEvent.BarrierCollision, this.collidedBarrierId);
    }
  }
}
