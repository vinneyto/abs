import { World } from '@dimforge/rapier3d';
import { UpdateComponent } from '../../components';
import { System } from '../../ecs';

export class PhysicsSystem extends System {
  constructor(private readonly world: World) {
    super();
  }

  public componentsRequired = [UpdateComponent];

  public update(): void {
    this.world.step();
  }
}
