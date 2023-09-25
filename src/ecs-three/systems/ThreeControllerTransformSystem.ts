import { Object3D } from 'three';
import { GameState } from '../../ecs/GameState';
import { ControllerComponent, TransformComponent } from '../../ecs/components';
import { System } from '../../ecs/ecs';

export class ThreeControllerTransformSystem extends System<GameState> {
  constructor(private readonly controllers: Object3D[]) {
    super();
  }

  public query = [ControllerComponent, TransformComponent];

  public update(entity: number): void {
    const components = this.ecs.getComponents(entity);

    const { index } = components.get(ControllerComponent);
    const { position, quaternion, scale } = components.get(TransformComponent);

    position.copy(this.controllers[index].position);
    quaternion.copy(this.controllers[index].quaternion);
    scale.copy(this.controllers[index].scale);
  }
}
