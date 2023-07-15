import { Object3D } from 'three';
import { ControllerComponent } from '../components/ControllerComponent';
import { System } from '../ecs';
import { VisibilityComponent } from '../components/VisibilityComponent';

export class ControllerVisibilitySystem extends System {
  constructor(private readonly controllers: Object3D[]) {
    super();
  }

  public componentsRequired = [ControllerComponent, VisibilityComponent];

  public update(entity: number): void {
    const components = this.ecs.getComponents(entity);

    const { index } = components.get(ControllerComponent);
    const visibilityComponent = components.get(VisibilityComponent);

    visibilityComponent.visible = this.controllers[index].visible;
  }
}
