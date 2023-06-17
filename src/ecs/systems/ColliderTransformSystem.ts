import { ColliderComponent } from '../components/ColliderComponent';
import { PositionComponent } from '../components/PositionComponent';
import { RotationComponent } from '../components/RotationComponent';
import { System } from '../ecs';

export class ColliderTransformSystem extends System {
  public componentsRequired = [
    ColliderComponent,
    PositionComponent,
    RotationComponent,
  ];
  public update(entity: number): void {
    const components = this.ecs.getComponents(entity);
    const { position } = components.get(PositionComponent);
    const { quaternion } = components.get(RotationComponent);
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
