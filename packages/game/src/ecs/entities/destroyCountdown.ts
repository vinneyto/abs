import { DestroyCountdownComponent } from '../components';
import { component } from '@abs/core';

export function destroyCountdown(countdown: number) {
  return [component(DestroyCountdownComponent).assign({ countdown })];
}
