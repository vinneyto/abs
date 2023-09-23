import { base } from './base';
import { component } from '../ecs';
import {
  RoadSegmentBarrierComponent,
  RoadSegmentIdComponent,
  Meshes,
} from '../components';

export function barrier(id: number) {
  return [
    ...base({
      mesh: Meshes.Barrier,
      castShadow: true,
      receiveShadow: false,
    }),
    component(RoadSegmentIdComponent).assign({ id }),
    component(RoadSegmentBarrierComponent),
  ];
}
