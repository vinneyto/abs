import { Vector3 } from 'three';
import { Component } from '../ecs';

export class PositionComponent extends Component {
  position = new Vector3();
}
