import { Object3D } from 'three';
import { Component } from '../ecs';

export class EnemyRotorsComponent extends Component {
  mainRotor!: Object3D;
  tailRotor!: Object3D;
}
