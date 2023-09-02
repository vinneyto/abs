import { Assets } from '../../Assets';
import { view } from './view';
import { component } from '../ecs';
import { RoadSegmentIdComponent } from '../components';

export function roadSegment(assets: Assets, id: number) {
  return [
    ...view({
      view: assets.road.model.clone(),
    }),
    component(RoadSegmentIdComponent).assign({ id }),
  ];
}
