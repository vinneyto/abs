import { Vector3 } from '@abs/math';
import { Component } from '../../ecs';

export class ClosestBarrierPointerComponent extends Component {
  public pan = new Vector3();
}
