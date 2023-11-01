import { ColliderComponent, TransformComponent } from '../../components';
import { System } from '../../ecs';
import { GameState } from '../../GameState';

export class ColliderTransformSystem extends System<GameState> {
  public query = [ColliderComponent, TransformComponent];
  public update(entity: number): void {
    const components = this.ecs.getComponents(entity);
    const { position, quaternion } = components.get(TransformComponent);
    const { collider } = components.get(ColliderComponent);

    if (collider === undefined) {
      throw new Error('collider is undefined, unable to change transform');
    }

    const t = collider.translation();
    const r = collider.rotation();

    position.set(t.x, t.y, t.z);
    quaternion.set(r.x, r.y, r.z, r.w);
  }
}
