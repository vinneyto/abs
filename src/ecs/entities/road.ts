import { LifeCircleComponent } from '../components/LifeCircleComponent';
import { RoadComponent } from '../components/RoadComponent';
import { component } from '../ecs';

export function road() {
  return [component(LifeCircleComponent), component(RoadComponent)];
}
