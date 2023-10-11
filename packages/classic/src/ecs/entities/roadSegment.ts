import { base } from './base';
import { component } from '../ecs';
import { RoadSegmentIdComponent, Meshes } from '../components';

export function roadSegment(id: number) {
  return [
    ...base({
      mesh: Meshes.RoadSegment,
    }),
    component(RoadSegmentIdComponent).assign({ id }),
  ];
}
