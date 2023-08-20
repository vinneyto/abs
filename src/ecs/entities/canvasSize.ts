import { CanvasSizeComponent } from '../components';
import { component } from '../ecs';

export function canvasSize() {
  return [component(CanvasSizeComponent)];
}
