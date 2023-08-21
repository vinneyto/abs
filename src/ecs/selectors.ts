import { Collider } from '@dimforge/rapier3d';
import {
  HeadComponent,
  LifeCircle,
  LifeCircleComponent,
  RoadComponent,
  RoadSegmentComponent,
  TransformComponent,
  ViewComponent,
  VisibilityComponent,
} from './components';
import { ECS, Entity } from './ecs';
import { GameState } from './model/GameState';

export type GameECS = ECS<GameState>;

export function getView(ecs: GameECS, entity: Entity) {
  const components = ecs.getComponents(entity);
  return components.get(ViewComponent);
}

export function getTransform(ecs: GameECS, entity: Entity) {
  const components = ecs.getComponents(entity);
  return components.get(TransformComponent);
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

export function getRoadComponent(ecs: GameECS, state: GameState) {
  const components = ecs.getComponents(state.entities.road);
  return components.get(RoadComponent);
}

export function getHeadComponent(ecs: GameECS, state: GameState) {
  const components = ecs.getComponents(state.entities.head);
  return components.get(HeadComponent);
}

export function getRoadSegmentComponent(ecs: GameECS, entity: Entity) {
  const components = ecs.getComponents(entity);
  return components.get(RoadSegmentComponent);
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
