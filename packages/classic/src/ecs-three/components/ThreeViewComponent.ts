import { Object3D } from 'three';
import { Component } from '../../ecs/ecs';

export class ThreeViewComponent extends Component {
  public view = new Object3D();
}
