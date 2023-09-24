import { Object3D } from 'three';
import { GameState } from '../../ecs/GameState';
import { ControllerComponent } from '../../ecs/components';
import { System } from '../../ecs/ecs';

export class ThreeControllerGamepadSystem extends System<GameState> {
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

    const gamepad = this.gamepads[controllerComponent.index];

    controllerComponent.trigger = gamepad?.buttons[0].value || 0;
  }
}
