import { Vector3 } from 'three';
import { Time } from '../../Time';
import { BulletSpawnComponent } from '../components/BulletSpawnComponent';
import { System } from '../ecs';
import { destroyCountdown } from '../entities/destroyCountdown';
import { RapierModule } from '../../types';
import { ball } from '../entities/primitives/ball';
import { cuboid } from '../entities/primitives/cuboid';

export class BallSpawnSystem extends System {
  constructor(private readonly RAPIER: RapierModule) {
    super();
  }

  public componentsRequired = [BulletSpawnComponent];

  public update(entity: number): void {
    const { RAPIER } = this;

    const components = this.ecs.getComponents(entity);

    const bulletSpawnComponent = components.get(BulletSpawnComponent);

    if (bulletSpawnComponent.countdownToSpawn <= 0) {
      this.ecs.addEntity(
        Math.random() > 0.5
          ? ball(
              RAPIER,
              new Vector3(Math.random() * 0.3, 2, Math.random() * 0.3),
              0.2
            )
          : cuboid(
              RAPIER,
              new Vector3(Math.random() * 0.3, 2, Math.random() * 0.3),
              0.4,
              0.4,
              0.4
            ),
        destroyCountdown(4)
      );

      bulletSpawnComponent.countdownToSpawn = bulletSpawnComponent.everySeconds;
      return;
    }

    bulletSpawnComponent.countdownToSpawn -= Time.deltaSeconds();
  }
}
