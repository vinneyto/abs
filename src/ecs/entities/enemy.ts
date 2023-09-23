import { Euler, Quaternion } from 'three';
import { collider } from './collider';
import { base } from './base';
import { RapierModule } from '../../types';
import { CollisionGroups, EnemyIdComponent, Meshes } from '../components';
import { Assets } from '../../Assets';
import { component } from '../ecs';
import { GROUP_ENEMIES } from '../../constants';

export function enemy(RAPIER: RapierModule, assets: Assets, id: number) {
  return [
    ...base({
      mesh: Meshes.Enemy,
      receiveShadow: false,
      castShadow: true,
    }),
    ...collider(
      RAPIER.RigidBodyDesc.fixed(),
      RAPIER.ColliderDesc.trimesh(
        assets.helicopter.trimesh.vertices,
        assets.helicopter.trimesh.indices
      )
        .setSensor(true)
        .setRotation(new Quaternion().setFromEuler(new Euler(Math.PI / 2))),
      new CollisionGroups([GROUP_ENEMIES]) // query contacts with enemies
    ),
    component(EnemyIdComponent).assign({ id }),
  ];
}
