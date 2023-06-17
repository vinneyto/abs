import { Object3D } from 'three';
import { Component } from '../ecs';

export class ViewComponent extends Component {
  public view = new Object3D();
}
