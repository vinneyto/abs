import { Mesh, MeshPhysicalMaterial, SphereGeometry } from 'three';
import { collider } from './collider';
import { view } from './view';
import { RapierModule } from '../../types';
import { CollisionGroups, EnemyIdComponent } from '../components';
import { GROUP_ENEMIES } from '.';
import { ENEMY_RADIUS } from '../../Assets';
import { component } from '../ecs';

const enemyGeometry = new SphereGeometry(ENEMY_RADIUS, 16, 16);
const enemyMaterial = new MeshPhysicalMaterial({ color: 0x00ff00 });

export function enemy(RAPIER: RapierModule, id: number) {
  return [
    ...view({
      view: new Mesh(enemyGeometry, enemyMaterial),
      receiveShadow: false,
      castShadow: true,
    }),
    ...collider(
      RAPIER.RigidBodyDesc.fixed(),
      RAPIER.ColliderDesc.ball(ENEMY_RADIUS).setSensor(true),
      new CollisionGroups([GROUP_ENEMIES]) // query contacts with enemies
    ),
    component(EnemyIdComponent).assign({ id }),
  ];
}
