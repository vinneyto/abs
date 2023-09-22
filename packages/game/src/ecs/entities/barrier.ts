import { Assets } from '../../Assets';
import { view } from './view';
import { component } from '@abs/core';
import {
  RoadSegmentBarrierComponent,
  RoadSegmentIdComponent,
} from '../components';

export function barrier(assets: Assets, id: number) {
  return [
    ...view({
      view: assets.barrier.model.clone(),
      castShadow: true,
      receiveShadow: false,
    }),
    component(RoadSegmentIdComponent).assign({ id }),
    component(RoadSegmentBarrierComponent),
  ];
}
