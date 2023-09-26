import { Sprite } from 'three';
import { Component } from '../../ecs/ecs';

export class ThreeEnemyHealthBarComponent extends Component {
  public healthBar = new Sprite();
}
