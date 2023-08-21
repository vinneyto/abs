import { Component, Entity } from '../ecs';

export class ClosestBarrierCountComponent extends Component {
  count = 0;
  closestBarrierEntity?: Entity;
}
