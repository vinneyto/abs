import { Collider, World } from '@dimforge/rapier3d';
import {
  CollisionGroups,
  HeadComponent,
  TransformComponent,
  ViewComponent,
} from '../components';
import { System } from '../ecs';
import { Mesh, MeshPhysicalMaterial } from 'three';
import { GROUP_BARRIER } from '../entities';

export class HeadBarrierHitSystem extends System {
  private hasCollision = false;
  private barrierMask = new CollisionGroups([GROUP_BARRIER]).getMask();

  public componentsRequired = [
    HeadComponent,
    TransformComponent,
    ViewComponent,
  ];

  constructor(private readonly world: World) {
    super();
  }

  public update(entity: number): void {
    const components = this.ecs.getComponents(entity);

    const { position, quaternion } = components.get(TransformComponent);
    const { shape } = components.get(HeadComponent);
    const { view } = components.get(ViewComponent);

    const material = (view as Mesh).material as MeshPhysicalMaterial;

    this.hasCollision = false;

    this.world.intersectionsWithShape(
      position,
      quaternion,
      shape,
      this.checkCollision,
      undefined,
      this.barrierMask
    );

    material.color.setColorName(this.hasCollision ? 'red' : 'yellow');
  }

  checkCollision = (_handle: Collider) => {
    this.hasCollision = true;
    return true;
  };
}
