import { Collider } from '@dimforge/rapier3d';
import {
  LifeCircle,
  LifeCircleComponent,
  ViewComponent,
  VisibilityComponent,
} from './components';
import { ECS, Entity } from './ecs';
import { GameState } from './GameState';

export type GameECS = ECS<GameState>;

export function getView(ecs: GameECS, entity: Entity) {
  const components = ecs.getComponents(entity);
  return components.get(ViewComponent);
}

export function getVisibility(ecs: GameECS, entity: Entity) {
  const components = ecs.getComponents(entity);
  return components.get(VisibilityComponent);
}

export function getLifeCircle(ecs: GameECS, entity: Entity) {
  const components = ecs.getComponents(entity);
  return components.get(LifeCircleComponent);
}

export function destroyEntity(ecs: GameECS, entity: Entity) {
  getLifeCircle(ecs, entity).state = LifeCircle.Destroy;
}

export function getColliderEntity(collider: Collider) {
  const userData = collider.parent()?.userData;
  if (userData !== undefined) {
    const entity = (userData as { entity?: Entity }).entity;
    if (entity !== undefined) {
      return entity;
    }
  }
  return undefined;
}
