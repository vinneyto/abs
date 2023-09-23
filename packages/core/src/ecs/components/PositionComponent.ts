import { Vector3 } from '@abs/math';
import { Component } from '../ecs';

export class PositionComponent extends Component {
  position = new Vector3();
}
