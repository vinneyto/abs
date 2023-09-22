import { AxesHelper, Euler, Quaternion } from 'three';
import { collider } from './collider';
import { view } from './view';
import { RapierModule } from '../../types';
import {
  CollisionGroups,
  EnemyIdComponent,
  EnemyRotorsComponent,
} from '../components';
import { GROUP_ENEMIES } from './constants';
import { Assets, getRotors } from '../../Assets';
import { component } from '../ecs';

export function enemy(RAPIER: RapierModule, assets: Assets, id: number) {
  const root = assets.helicopter.model.clone();
  root.add(new AxesHelper(10));

  const rotors = getRotors(root);

  if (!rotors.mainRotor || !rotors.tailRotor) {
    throw new Error('where are rotors?!');
  }

  const { mainRotor, tailRotor } = rotors;

  return [
    ...view({
      view: root,
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
    component(EnemyRotorsComponent).assign({
      mainRotor,
      tailRotor,
    }),
  ];
}
