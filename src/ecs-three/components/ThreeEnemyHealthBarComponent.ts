import { Object3D, Sprite } from 'three';
import { Component } from '../../ecs/ecs';

export class ThreeEnemyHealthBarComponent extends Component {
  public backgroundBar = new Sprite();
  public healthBar = new Sprite();
  public container = new Object3D();
}
