import { Vector3 } from 'three';
import { base } from './base';
import {
  ColliderComponent,
  ColliderType,
  CollisionGroups,
  DestroyCountdownComponent,
  ViewType,
} from '../components';
import { component } from '../ecs';
import { BULLET_RADIUS, GROUP_ENEMIES } from '../../constants';

export function bullet(spawn: Vector3, direction: Vector3) {
  const velocity = direction.clone().multiplyScalar(500);

  return [
    ...base({
      viewType: ViewType.Bullet,
    }),
    component(ColliderComponent).assign({
      linVel: velocity,
      ccd: true,
      gravityScale: 0,
      additionalMass: 1,
      translation: spawn,
      collider: { type: ColliderType.Ball, radius: BULLET_RADIUS },
      collisionGroups: new CollisionGroups([GROUP_ENEMIES]),
    }),
    component(DestroyCountdownComponent).assign({ countdown: 1 }),
  ];
}
