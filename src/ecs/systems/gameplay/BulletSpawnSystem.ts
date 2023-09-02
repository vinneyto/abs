import { Matrix4, Vector3 } from 'three';
import { Time } from '../../../Time';
import {
  BulletSpawnComponent,
  ControllerComponent,
  TransformComponent,
} from '../../components';
import { System } from '../../ecs';
import { bullet } from '../../entities';
import { GameState } from '../../GameState';

export class BulletSpawnSystem extends System<GameState> {
  public componentsRequired = [
    BulletSpawnComponent,
    ControllerComponent,
    TransformComponent,
  ];

  public update(entity: number, state: GameState): void {
    const { RAPIER, assets } = state;

    const components = this.ecs.getComponents(entity);

    const bulletSpawnComponent = components.get(BulletSpawnComponent);
    const { gamepad } = components.get(ControllerComponent);
    const { position, quaternion, scale } = components.get(TransformComponent);

    if (!gamepad) {
      return;
    }

    const firePressed = gamepad.buttons[0].pressed;

    if (firePressed && bulletSpawnComponent.countdownToSpawn <= 0) {
      const bulletSpawnMatrix = new Matrix4()
        .compose(position, quaternion, scale)
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
