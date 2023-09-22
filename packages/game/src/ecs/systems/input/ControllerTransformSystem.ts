import { Object3D } from 'three';
import {
  ControllerComponent,
  PositionComponent,
  RotationComponent,
} from '../../components';
import { System } from '@abs/core';
import { GameState } from '../../GameState';

export class ControllerTransformSystem extends System<GameState> {
  constructor(private readonly controllers: Object3D[]) {
    super();
  }

  public componentsRequired = [
    ControllerComponent,
    PositionComponent,
    RotationComponent,
  ];

  public update(entity: number): void {
    const components = this.ecs.getComponents(entity);

    const { index } = components.get(ControllerComponent);
    const { position } = components.get(PositionComponent);
    const { quaternion } = components.get(RotationComponent);

    position.copy(this.controllers[index].position);
    quaternion.copy(this.controllers[index].quaternion);
  }
}
