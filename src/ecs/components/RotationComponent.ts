import { Quaternion } from 'three';
import { Component } from '../ecs';

export class RotationComponent extends Component {
  public readonly quaternion = new Quaternion();
}
