import { Mesh } from 'three';
import { Component } from '../ecs';

export class ViewComponent extends Component {
  public mesh = new Mesh();
}
