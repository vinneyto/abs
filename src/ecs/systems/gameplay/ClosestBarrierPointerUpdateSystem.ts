import {
  ClosestBarrierPointerComponent,
  TransformComponent,
  VisibilityComponent,
} from '../../components';
import { System } from '../../ecs';
import { GameState } from '../../model/GameState';
import { getRoadComponent, getTransform } from '../../selectors';

export class ClosestBarrierPointerUpdateSystem extends System<GameState> {
  public componentsRequired = [
    ClosestBarrierPointerComponent,
    TransformComponent,
    VisibilityComponent,
  ];

  public update(entity: number, state: GameState): void {
    const components = this.ecs.getComponents(entity);

    const { ecs } = this;
    const { position } = components.get(TransformComponent);
    const { pan } = components.get(ClosestBarrierPointerComponent);
    const visibilityComponent = components.get(VisibilityComponent);

    const { closestBarrierEntity } = getRoadComponent(ecs, state);

    if (closestBarrierEntity === undefined) {
      visibilityComponent.visible = false;
      return;
    }

    position.set(
      pan.x,
      pan.y,
      getTransform(ecs, closestBarrierEntity).position.z
    );

    visibilityComponent.visible = true;
  }
}
