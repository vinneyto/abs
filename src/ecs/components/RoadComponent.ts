import { Component, Entity } from '../ecs';

export interface RoadSegment {
  roadSegmentEntity: Entity;
  barrierEntity?: Entity;
}

export class RoadComponent extends Component {
  public segments: RoadSegment[] = [];
  public velocity = 5;
  public frontDistance = -80; // -z
  public backDistance = 20;
  public segmentSize = 10;
  public segmentCount = 0;
  public barrierFrequency = 2;
  public closestBarrierEntity?: Entity;
}
