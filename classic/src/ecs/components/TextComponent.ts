import { Component } from '../ecs';

export class TextComponent extends Component {
  text = '';
  fontSize = 0.9;
  color = 0xff0000;
  needsUpdate = true;
}
