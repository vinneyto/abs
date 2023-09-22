import {
  ClosestBarrierPointerComponent,
  PositionComponent,
  VisibilityComponent,
} from '../../components';
import { System } from '@abs/core';
import { GameState } from '../../GameState';

export class ClosestBarrierPointerUpdateSystem extends System<GameState> {
  public componentsRequired = [
    ClosestBarrierPointerComponent,
    PositionComponent,
    VisibilityComponent,
  ];

  public update(entity: number, state: GameState): void {
    const components = this.ecs.getComponents(entity);
    const { position } = components.get(PositionComponent);
    const { pan } = components.get(ClosestBarrierPointerComponent);
    const visibilityComponent = components.get(VisibilityComponent);
    const { gameModel } = state;

    const closestBarrierSegment = gameModel.getNextBarrierSegment();

    if (closestBarrierSegment === undefined) {
      visibilityComponent.visible = false;
      return;
    }

    position.set(
      pan.x,
      gameModel.getBarrierHeight() + pan.y,
      closestBarrierSegment.position
    );
    visibilityComponent.visible = true;
  }
}
