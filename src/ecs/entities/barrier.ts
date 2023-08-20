import { Vector3 } from 'three';
import { Assets } from '../../Assets';
import { view } from './view';
import { component } from '../ecs';
import { CollisionGroups, RoadSegmentComponent } from '../components';
import { collider } from './collider';
import { RapierModule } from '../../types';
import { GROUP_BARRIER } from '.';

export function barrier(RAPIER: RapierModule, assets: Assets, pos: number) {
  const { vertices, indices } = assets.barrier.trimesh;

  return [
    ...view({
      position: new Vector3(5, 0, pos),
      view: assets.barrier.model.clone(),
      castShadow: true,
    }),
    ...collider(
      RAPIER.RigidBodyDesc.fixed(),
      RAPIER.ColliderDesc.trimesh(vertices, indices),
      true,
      true,
      new CollisionGroups([GROUP_BARRIER])
    ),
    component(RoadSegmentComponent).assign({ isBarrier: true }),
  ];
}
