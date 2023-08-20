import { UpdateComponent } from '../components';
import { component } from '../ecs';

export function update() {
  return [component(UpdateComponent)];
}
