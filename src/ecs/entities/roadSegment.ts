import { Vector3 } from 'three';
import { Assets } from '../../Assets';
import { view } from './view';
import { component } from '../ecs';
import { RoadSegmentComponent } from '../components/RoadSegmentComponent';

export function roadSegment(assets: Assets, pos: number) {
  return [
    ...view({
      position: new Vector3(0, 0, pos),
      view: assets.road.model.clone(),
    }),
    component(RoadSegmentComponent),
  ];
}
