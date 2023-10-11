import { Quaternion, Vector3 } from 'three';
import { Component } from '../ecs';

export class TransformComponent extends Component {
  public position = new Vector3();
  public quaternion = new Quaternion();
  public scale = new Vector3(1, 1, 1);
}
