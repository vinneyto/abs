import { Vector2 } from 'three';
import { Component } from '../ecs';

export class ClosestBarrierPointerComponent extends Component {
  public pan = new Vector2(0, 0);
}
