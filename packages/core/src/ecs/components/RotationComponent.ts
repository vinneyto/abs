import { Quaternion } from '@abs/math';
import { Component } from '../ecs';

export class RotationComponent extends Component {
  quaternion = new Quaternion();
}
