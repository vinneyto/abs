import { Shape } from '@dimforge/rapier3d';
import { Component, Entity } from '../ecs';

export class HeadComponent extends Component {
  shape!: Shape;
  colliderEntity?: Entity;
}
