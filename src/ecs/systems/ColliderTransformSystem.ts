import { ColliderComponent } from '../components/ColliderComponent';
import { TransformComponent } from '../components/TransformComponent';
import { System } from '../ecs';

export class ColliderTransformSystem extends System {
  public componentsRequired = [ColliderComponent, TransformComponent];
  public update(entity: number): void {
    const components = this.ecs.getComponents(entity);
    const { position, quaternion } = components.get(TransformComponent);
    const { collider, readTransform } = components.get(ColliderComponent);

    if (collider === undefined) {
      throw new Error('collider is undefined, unable to change transform');
    }

    if (!readTransform) {
      const t = collider.translation();
      const r = collider.rotation();

      position.set(t.x, t.y, t.z);
      quaternion.set(r.x, r.y, r.z, r.w);
    } else {
      collider.setTranslation(position);
      collider.setRotation(quaternion);
    }
  }
}
