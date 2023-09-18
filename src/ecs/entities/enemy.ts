import {
  CapsuleGeometry,
  Euler,
  Mesh,
  MeshPhysicalMaterial,
  Quaternion,
} from 'three';
import { collider } from './collider';
import { view } from './view';
import { RapierModule } from '../../types';
import {
  CollisionGroups,
  EnemyIdComponent,
  EnemyRotorsComponent,
} from '../components';
import { GROUP_ENEMIES } from '.';
import { Assets, ENEMY_RADIUS, getRotors } from '../../Assets';
import { component } from '../ecs';

const enemyGeometry = new CapsuleGeometry(ENEMY_RADIUS, ENEMY_RADIUS * 2);
const enemyMaterial = new MeshPhysicalMaterial({
  color: 0x00ff00,
  depthTest: false,
  depthWrite: false,
  transparent: true,
  opacity: 0.5,
});

export function enemy(RAPIER: RapierModule, assets: Assets, id: number) {
  const debugMesh = new Mesh(enemyGeometry, enemyMaterial);
  debugMesh.renderOrder = 999;

  const root = assets.helicopter.model.clone();
  root.add(debugMesh);
  debugMesh.visible = false;

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
      RAPIER.ColliderDesc.capsule(ENEMY_RADIUS, ENEMY_RADIUS)
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
