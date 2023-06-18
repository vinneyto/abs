import { Mesh, MeshPhysicalMaterial, SphereGeometry, Vector3 } from 'three';
import { Time } from '../../Time';
import { BallSpawnComponent } from '../components/BallSpawnComponent';
import { System } from '../ecs';
import { view } from '../entities/view';
import { collider } from '../entities/collider';
import { destroyCountdown } from '../entities/destroyCountdown';
import { RapierModule } from '../../types';

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
        view({
          position: new Vector3(Math.random() * 0.2, 2, Math.random() * 0.2),
          view: new Mesh(
            new SphereGeometry(0.2, 32, 32),
            new MeshPhysicalMaterial({ color: 'red' })
          ),
        }),
        collider(RAPIER.RigidBodyDesc.dynamic(), RAPIER.ColliderDesc.ball(0.2)),
        destroyCountdown(4)
      );

      ballSpawnComponent.countdownToSpawn = ballSpawnComponent.everySeconds;
      return;
    }

    ballSpawnComponent.countdownToSpawn -= Time.deltaSeconds();
  }
}
