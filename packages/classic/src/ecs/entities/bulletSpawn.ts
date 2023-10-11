import { BulletSpawnComponent } from '../components';
import { component } from '../ecs';

export function bulletSpawn(everySeconds = 0.2) {
  return [component(BulletSpawnComponent).assign({ everySeconds })];
}
