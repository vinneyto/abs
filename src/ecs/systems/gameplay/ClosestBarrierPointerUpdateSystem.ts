import {
  ClosestBarrierPointerComponent,
  TransformComponent,
  VisibilityComponent,
} from '../../components';
import { System } from '../../ecs';
import { GameState } from '../../GameState';

export class ClosestBarrierPointerUpdateSystem extends System<GameState> {
  public componentsRequired = [
    ClosestBarrierPointerComponent,
    TransformComponent,
    VisibilityComponent,
  ];

  public update(entity: number, state: GameState): void {
    const components = this.ecs.getComponents(entity);
    const { position } = components.get(TransformComponent);
    const { pan } = components.get(ClosestBarrierPointerComponent);
    const visibilityComponent = components.get(VisibilityComponent);
    const { road } = state.gameModel;

    const closestBarrierSegment = road.getClosestBarrierSegment();

    if (closestBarrierSegment === undefined) {
      visibilityComponent.visible = false;
      return;
    }

    position.set(
      pan.x,
      road.barrierHeight + pan.y,
      closestBarrierSegment.distance
    );
    visibilityComponent.visible = true;
  }
}
