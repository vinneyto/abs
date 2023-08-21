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

export function getView(ecs: ECS, entity: Entity) {
  const components = ecs.getComponents(entity);
  return components.get(ViewComponent);
}

export function getTransform(ecs: ECS, entity: Entity) {
  const components = ecs.getComponents(entity);
  return components.get(TransformComponent);
}

export function getVisibility(ecs: ECS, entity: Entity) {
  const components = ecs.getComponents(entity);
  return components.get(VisibilityComponent);
}

export function getLifeCircle(ecs: ECS, entity: Entity) {
  const components = ecs.getComponents(entity);
  return components.get(LifeCircleComponent);
}

export function destroyEntity(ecs: ECS, entity: Entity) {
  getLifeCircle(ecs, entity).state = LifeCircle.Destroy;
}

export function getRoadComponent(ecs: ECS, state: GameState) {
  const components = ecs.getComponents(state.roadEntity);
  return components.get(RoadComponent);
}

export function getHeadComponent(ecs: ECS, state: GameState) {
  const components = ecs.getComponents(state.headEntity);
  return components.get(HeadComponent);
}

export function getRoadSegmentComponent(ecs: ECS, entity: Entity) {
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
