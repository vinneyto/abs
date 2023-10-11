import { Object3D } from 'three';
import { Component } from '../../ecs/ecs';

export class ThreeEnemyDecorationComponent extends Component {
  mainRotor?: Object3D;
  tailRotor?: Object3D;
}
