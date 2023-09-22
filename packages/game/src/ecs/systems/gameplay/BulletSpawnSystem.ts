import { Matrix4, Vector3 } from 'three';
import { Time } from '../../../Time';
import {
  BulletSpawnComponent,
  ControllerComponent,
  PositionComponent,
  RotationComponent,
} from '../../components';
import { System } from '@abs/core';
import { bullet } from '../../entities';
import { GameState } from '../../GameState';

export class BulletSpawnSystem extends System<GameState> {
  public componentsRequired = [
    BulletSpawnComponent,
    ControllerComponent,
    PositionComponent,
    RotationComponent,
  ];

  public update(entity: number, state: GameState): void {
    const { RAPIER, assets } = state;

    const components = this.ecs.getComponents(entity);

    const bulletSpawnComponent = components.get(BulletSpawnComponent);
    const { gamepad } = components.get(ControllerComponent);
    const { position } = components.get(PositionComponent);
    const { quaternion } = components.get(RotationComponent);

    if (!gamepad) {
      return;
    }

    const firePressed = gamepad.buttons[0].pressed;

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
