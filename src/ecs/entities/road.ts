import { RoadComponent } from '../components/RoadComponent';
import { component } from '../ecs';

export function road() {
  return [component(RoadComponent)];
}
