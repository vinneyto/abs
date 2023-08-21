import {
  ClosestBarrierPointerComponent,
  TransformComponent,
  VisibilityComponent,
} from '../../components';
import { System } from '../../ecs';
import { GameState } from '../../model/GameState';
import { getRoadComponent, getTransform } from '../../selectors';

export class ClosestBarrierPointerUpdateSystem extends System {
  public componentsRequired = [
    ClosestBarrierPointerComponent,
    TransformComponent,
    VisibilityComponent,
  ];

  constructor(public readonly state: GameState) {
    super();
  }

  public update(entity: number): void {
    const components = this.ecs.getComponents(entity);

    const { ecs, state } = this;
    const { position } = components.get(TransformComponent);
    const visibilityComponent = components.get(VisibilityComponent);

    const { closestBarrierEntity } = getRoadComponent(ecs, state);

    if (closestBarrierEntity === undefined) {
      visibilityComponent.visible = false;
      return;
    }

    position.set(0, 3, getTransform(ecs, closestBarrierEntity).position.z);

    visibilityComponent.visible = true;
  }
}
