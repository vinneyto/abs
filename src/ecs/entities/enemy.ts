import { Euler, Quaternion, Sphere, Vector3 } from 'three';
import { collider } from './collider';
import { base } from './base';
import { RapierModule } from '../../types';
import {
  CollisionGroups,
  EnemyHealthComponent,
  EnemyMotionComponent,
  Meshes,
} from '../components';
import { Assets } from '../../Assets';
import { component } from '../ecs';
import { GROUP_ENEMIES } from '../../constants';

export function enemy(
  RAPIER: RapierModule,
  assets: Assets,
  position: Vector3,
  arial?: Sphere,
) {
  return [
    ...base({
      mesh: Meshes.Enemy,
      receiveShadow: false,
      castShadow: true,
      position,
    }),
    ...collider(
      RAPIER.RigidBodyDesc.fixed(),
      RAPIER.ColliderDesc.trimesh(
        assets.helicopter.trimesh.vertices,
        assets.helicopter.trimesh.indices,
      )
        .setSensor(true)
        .setActiveEvents(RAPIER.ActiveEvents.COLLISION_EVENTS)
        .setRotation(new Quaternion().setFromEuler(new Euler(Math.PI / 2))),
      new CollisionGroups([GROUP_ENEMIES]), // query contacts with enemies
    ),
    component(EnemyMotionComponent).assign({ arial }),
    component(EnemyHealthComponent),
  ];
}
