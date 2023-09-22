import { BulletSpawnComponent } from '../components';
import { component } from '@abs/core';

export function bulletSpawn(everySeconds = 0.2) {
  return [component(BulletSpawnComponent).assign({ everySeconds })];
}
