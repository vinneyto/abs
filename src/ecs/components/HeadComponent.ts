import { Shape } from '@dimforge/rapier3d';
import { Component } from '../ecs';

export class HeadComponent extends Component {
  shape!: Shape;
}
