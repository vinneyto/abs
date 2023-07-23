import {
  LifeCircle,
  LifeCircleComponent,
} from './components/LifeCircleComponent';
import { TransformComponent } from './components/TransformComponent';
import { ECS, Entity } from './ecs';

export function getTransform(ecs: ECS, entity: Entity) {
  const components = ecs.getComponents(entity);
  return components.get(TransformComponent);
}

export function getLifeCircle(ecs: ECS, entity: Entity) {
  const components = ecs.getComponents(entity);
  return components.get(LifeCircleComponent);
}

export function destroyEntity(ecs: ECS, entity: Entity) {
  getLifeCircle(ecs, entity).state = LifeCircle.Destroy;
}
