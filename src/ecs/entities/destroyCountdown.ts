import { DestroyCountdownComponent } from '../components/DestroyCountdownComponent';
import { component } from '../ecs';

export function destroyCountdown(countdown: number) {
  return [component(DestroyCountdownComponent).assign({ countdown })];
}
