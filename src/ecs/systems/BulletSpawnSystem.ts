import { Vector3 } from 'three';
import { Time } from '../../Time';
import { BulletSpawnComponent } from '../components/BulletSpawnComponent';
import { System } from '../ecs';
import { RapierModule } from '../../types';
import { ControllerComponent } from '../components/ControllerComponent';
import { ViewComponent } from '../components/ViewComponent';
import { getObjectByType } from '../../Assets';
import { bullet } from '../entities/bullet';

export class BulletSpawnSystem extends System {
  constructor(private readonly RAPIER: RapierModule) {
    super();
  }

  public componentsRequired = [
    BulletSpawnComponent,
    ControllerComponent,
    ViewComponent,
  ];

  public update(entity: number): void {
    const { RAPIER } = this;

    const components = this.ecs.getComponents(entity);

    const bulletSpawnComponent = components.get(BulletSpawnComponent);
    const { gamepad } = components.get(ControllerComponent);
    const { view } = components.get(ViewComponent);

    if (!gamepad) {
      return;
    }

    const firePressed = gamepad.buttons[0].pressed;

    if (firePressed && bulletSpawnComponent.countdownToSpawn <= 0) {
      view.updateMatrixWorld();

      const bulletSpawnHint = getObjectByType(view, 'bullet_spawn');
      const spawnPoint = new Vector3();
      const direction = new Vector3();

      spawnPoint.setFromMatrixPosition(bulletSpawnHint.matrixWorld);
      direction
        .setFromMatrixColumn(bulletSpawnHint.matrixWorld, 2)
        .multiplyScalar(-1); // hack - fixes model rotation

      this.ecs.addEntity(bullet(RAPIER, spawnPoint, direction));

      bulletSpawnComponent.countdownToSpawn = bulletSpawnComponent.everySeconds;
      return;
    }

    bulletSpawnComponent.countdownToSpawn -= Time.deltaSeconds();
  }
}
