import { ThreeViewComponent } from '..';
import { GameState } from '../../ecs/GameState';
import { OnDestroy } from '../../ecs/components';
import { System } from '../../ecs/ecs';

export class ThreeViewRemoveSystem extends System<GameState> {
  public query = [OnDestroy, ThreeViewComponent];

  public update(entity: number): void {
    const components = this.ecs.getComponents(entity);
    const { view } = components.get(ThreeViewComponent);

    if (view.parent) {
      view.parent.remove(view);
    }

    console.log('remove view', view);
  }
}
