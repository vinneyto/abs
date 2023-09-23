import { Matrix4, Vector3 } from 'three';
import { Time } from '../../Time';
import {
  BulletSpawnComponent,
  ControllerComponent,
  PositionComponent,
  RotationComponent,
} from '../components';
import { State, System } from '@abs/core';

export class BulletSpawnSystem extends System<State> {
  public componentsRequired = [
    BulletSpawnComponent,
    ControllerComponent,
    PositionComponent,
    RotationComponent,
  ];

  public update(entity: number, state: State): void {
    const { RAPIER, assets } = state;

    const components = this.ecs.getComponents(entity);

    const bulletSpawnComponent = components.get(BulletSpawnComponent);
    const { trigger } = components.get(ControllerComponent);
    const { position } = components.get(PositionComponent);
    const { quaternion } = components.get(RotationComponent);

    const firePressed = trigger > 0;

    if (firePressed && bulletSpawnComponent.countdownToSpawn <= 0) {
      const bulletSpawnMatrix = new Matrix4()
        .compose(position, quaternion, new Vector3(1, 1, 1))
        .multiply(assets.gun.bulletSpawnTransform);

      const spawnPoint = new Vector3();
      const direction = new Vector3();

      spawnPoint.setFromMatrixPosition(bulletSpawnMatrix);
      direction.setFromMatrixColumn(bulletSpawnMatrix, 2).multiplyScalar(-1); // hack - fixes model rotation

      this.ecs.addEntity(bullet(RAPIER, spawnPoint, direction));

      bulletSpawnComponent.countdownToSpawn = bulletSpawnComponent.everySeconds;
      return;
    }

    bulletSpawnComponent.countdownToSpawn -= Time.deltaSeconds();
  }
}
