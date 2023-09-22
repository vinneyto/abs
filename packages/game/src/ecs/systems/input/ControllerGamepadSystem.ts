import { Object3D } from 'three';
import { ControllerComponent } from '../../components';
import { System } from '@abs/core';
import { GameState } from '../../GameState';

export class ControllerGamepadSystem extends System<GameState> {
  private gamepads: Array<Gamepad | undefined> = [];

  constructor(controllers: Object3D[]) {
    super();

    controllers.forEach((controller, index) => {
      controller.addEventListener('connected', e => {
        this.gamepads[index] = e.data.gamepad;
      });

      controller.addEventListener('disconnected', () => {
        this.gamepads[index] = undefined;
      });
    });
  }

  public componentsRequired = [ControllerComponent];

  public update(entity: number): void {
    const components = this.ecs.getComponents(entity);
    const controllerComponent = components.get(ControllerComponent);

    controllerComponent.gamepad = this.gamepads[controllerComponent.index];
  }
}
