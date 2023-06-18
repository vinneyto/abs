import { Vector3 } from 'three';
import { Time } from '../../Time';
import { BallSpawnComponent } from '../components/BallSpawnComponent';
import { System } from '../ecs';
import { destroyCountdown } from '../entities/destroyCountdown';
import { RapierModule } from '../../types';
import { ball } from '../entities/primitives/ball';
import { cuboid } from '../entities/primitives/cuboid';

export class BallSpawnSystem extends System {
  constructor(private readonly RAPIER: RapierModule) {
    super();
  }

  public componentsRequired = [BallSpawnComponent];

  public update(entity: number): void {
    const { RAPIER } = this;

    const components = this.ecs.getComponents(entity);

    const ballSpawnComponent = components.get(BallSpawnComponent);

    if (ballSpawnComponent.countdownToSpawn <= 0) {
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

      ballSpawnComponent.countdownToSpawn = ballSpawnComponent.everySeconds;
      return;
    }

    ballSpawnComponent.countdownToSpawn -= Time.deltaSeconds();
  }
}
