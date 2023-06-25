import { ControllerComponent } from '../components/ControllerComponent';
import { component } from '../ecs';

export function controller(index: number) {
  return [component(ControllerComponent).assign({ index })];
}
