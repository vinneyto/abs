import { Component } from '../ecs';

export enum Meshes {
  RoadSegment = 'RoadSegment',
  Barrier = 'Barrier',
  Bullet = 'Bullet',
  Enemy = 'Enemy',
  Text = 'Text',
  Gun = 'Gun',

  None = 'None',
}

export class MeshComponent extends Component {
  public mesh = Meshes.None;

  public castShadow = false;
  public receiveShadow = true;
}
