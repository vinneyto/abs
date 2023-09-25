import { Object3D } from 'three';
import { GameState } from '../../ecs/GameState';
import { ControllerComponent, VisibilityComponent } from '../../ecs/components';
import { System } from '../../ecs/ecs';

export class ThreeControllerVisibilitySystem extends System<GameState> {
  constructor(private readonly controllers: Object3D[]) {
    super();
  }

  public query = [ControllerComponent, VisibilityComponent];

  public update(entity: number): void {
    const components = this.ecs.getComponents(entity);

    const { index } = components.get(ControllerComponent);
    const visibilityComponent = components.get(VisibilityComponent);

    visibilityComponent.visible = this.controllers[index].visible;
  }
}
