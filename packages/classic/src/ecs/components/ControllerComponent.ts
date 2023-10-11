import { Component } from '../ecs';

export interface ControllerButton {
  value: number;
  pressed: boolean;
}

export class ControllerComponent extends Component {
  index = 0;

  trigger: ControllerButton = { value: 0, pressed: false };
}
