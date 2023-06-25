import { BulletSpawnComponent } from '../components/BulletSpawnComponent';
import { component } from '../ecs';

export function bulletSpawn(everySeconds = 0.2) {
  return [component(BulletSpawnComponent).assign({ everySeconds })];
}
