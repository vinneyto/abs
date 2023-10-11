import { DestroyCountdownComponent } from '../components';
import { component } from '../ecs';

export function destroyCountdown(countdown: number) {
  return [component(DestroyCountdownComponent).assign({ countdown })];
}
