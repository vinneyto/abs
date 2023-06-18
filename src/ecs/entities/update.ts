import { UpdateComponent } from '../components/UpdateComponent';
import { component } from '../ecs';

export function update() {
  return [component(UpdateComponent)];
}
