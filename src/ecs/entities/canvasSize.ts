import { CanvasSizeComponent } from '../components/CanvasSizeComponent';
import { RendererComponent } from '../components/RendererComponent';
import { component } from '../ecs';

export function canvasSize() {
  return [component(RendererComponent), component(CanvasSizeComponent)];
}
