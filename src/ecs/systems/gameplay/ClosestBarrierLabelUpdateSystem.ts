import { ClosestBarrierCountComponent, ViewComponent } from '../../components';
import { System } from '../../ecs';
import { GameState } from '../../model/GameState';
import { getRoadComponent } from '../../selectors';

export class ClosestBarrierLabelUpdateSystem extends System<GameState> {
  public componentsRequired = [ClosestBarrierCountComponent, ViewComponent];

  public update(entity: number, state: GameState): void {
    const { ecs } = this;
    const components = this.ecs.getComponents(entity);

    const { closestBarrierEntity } = getRoadComponent(ecs, state);
    const { view } = components.get(ViewComponent);
    const closestBarrierCountComponent = components.get(
      ClosestBarrierCountComponent
    );

    if (
      closestBarrierCountComponent.closestBarrierEntity !== closestBarrierEntity
    ) {
      closestBarrierCountComponent.closestBarrierEntity = closestBarrierEntity;

      closestBarrierCountComponent.count++;

      const text = view as any;
      text.text = closestBarrierCountComponent.count.toString();
      text.sync();
    }
  }
}
