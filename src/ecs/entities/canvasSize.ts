import { CanvasSizeComponent } from '../components/CanvasSizeComponent';
import { component } from '../ecs';

export function canvasSize() {
  return [component(CanvasSizeComponent)];
}
