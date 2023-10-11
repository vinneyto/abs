import { ControllerComponent } from '../components';
import { component } from '../ecs';

export function controller(index: number) {
  return [component(ControllerComponent).assign({ index })];
}
