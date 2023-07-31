import { Vector3 } from 'three';
import { Assets } from '../../Assets';
import { view } from './view';
import { component } from '../ecs';
import { RoadSegmentComponent } from '../components/RoadSegmentComponent';

export function barrier(assets: Assets, pos: number) {
  return [
    ...view({
      position: new Vector3(5, 0, pos),
      view: assets.barrier.model.clone(),
      castShadow: true,
    }),
    component(RoadSegmentComponent).assign({ isBarrier: true }),
  ];
}
