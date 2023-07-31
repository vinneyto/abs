import { Entity } from '../ecs';

export interface RoadSegment {
  roadSegmentEntity: Entity;
  barrierEntity?: Entity;
}

export class RoadModel {
  public segments: RoadSegment[] = [];
  public velocity = 7;
  public frontDistance = -50; // -z
  public backDistance = 20;
  public segmentSize = 10;
  public barrierCountdown = 0;
  public barrierFrequency = 1;
}
