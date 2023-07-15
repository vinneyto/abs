import { Component, Entity } from '../ecs';

export class RoadComponent extends Component {
  public segments: Entity[] = [];
  public velocity = 7;
  public frontDistance = -50; // -z
  public backDistance = 20;
  public segmentSize = 10;
}
