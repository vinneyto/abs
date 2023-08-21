import { Collider } from '@dimforge/rapier3d';
import {
  CollisionGroups,
  HeadComponent,
  TransformComponent,
  ViewComponent,
} from '../../components';
import { Entity, System } from '../../ecs';
import { Mesh, MeshPhysicalMaterial } from 'three';
import { GROUP_BARRIER } from '../../entities';
import { getColliderEntity } from '../../selectors';
import { GameState } from '../../model/GameState';

export class HeadBarrierHitSystem extends System<GameState> {
  private colliderEntity?: Entity;

  private barrierMask = new CollisionGroups([GROUP_BARRIER]).getMask();

  public componentsRequired = [
    HeadComponent,
    TransformComponent,
    ViewComponent,
  ];

  public update(entity: number, state: GameState): void {
    const components = this.ecs.getComponents(entity);

    const { position, quaternion } = components.get(TransformComponent);
    const headComponent = components.get(HeadComponent);
    const { view } = components.get(ViewComponent);

    const material = (view as Mesh).material as MeshPhysicalMaterial;

    this.colliderEntity = undefined;

    state.world.intersectionsWithShape(
      position,
      quaternion,
      headComponent.shape,
      this.checkCollision,
      undefined,
      this.barrierMask
    );

    material.color.setColorName(
      this.colliderEntity !== undefined ? 'red' : 'yellow'
    );

    if (headComponent.colliderEntity !== this.colliderEntity) {
      headComponent.colliderEntity = this.colliderEntity;
    }
  }

  checkCollision = (handle: Collider) => {
    const colliderEntity = getColliderEntity(handle);

    if (colliderEntity !== undefined) {
      this.colliderEntity = colliderEntity;
      return false;
    }

    return true;
  };
}
