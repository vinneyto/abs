import { Vector2 } from 'three';
import { Component } from '../ecs';

export class CanvasSizeComponent extends Component {
  public size = new Vector2();
}
