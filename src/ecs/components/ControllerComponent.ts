import { Component } from '../ecs';

export class ControllerComponent extends Component {
  index = 0;

  gamepad?: Gamepad;
}
