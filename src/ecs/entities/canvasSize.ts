import { CanvasSizeComponent } from '../components/CanvasSizeComponent';
import { RendererComponent } from '../components/RendererComponent';

export function canvasSize() {
  return new Set([new RendererComponent(), new CanvasSizeComponent()]);
}
