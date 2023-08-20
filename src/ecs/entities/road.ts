import { RoadComponent } from '../components';
import { component } from '../ecs';

export function road() {
  return [component(RoadComponent)];
}
