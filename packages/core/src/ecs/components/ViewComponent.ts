import { Quaternion } from '@abs/math';
import { Component } from '../ecs';

export enum ViewType {
  RoadSegment = 'RoadSegment',
  Barrier = 'Barrier',
  Bullet = 'Bullet',
  Enemy = 'Enemy',
  None = 'None',
}

export class ViewComponent extends Component {
  public type = ViewType.None;

  public position = new Quaternion();
  public quaternion = new Quaternion();

  public castShadow = false;
  public receiveShadow = true;
}
