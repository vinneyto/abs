import { Object3D } from 'three';
import { Component } from '../ecs';

export const MAIN_SCENE = 'main_scene';

export class ViewComponent extends Component {
  public view = new Object3D();

  public addTo = MAIN_SCENE;
}
