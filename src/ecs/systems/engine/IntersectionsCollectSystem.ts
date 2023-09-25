import { World } from '@dimforge/rapier3d';
import { System } from '../../ecs';
import { GameState } from '../../GameState';
import { ColliderComponent } from '../../components';

export class IntersectionsCollectSystem extends System<GameState> {
  public query = [ColliderComponent];

  constructor(
    private readonly world: World,
    private readonly state: GameState,
  ) {
    super();
  }

  public update(entity: number): void {
    const components = this.ecs.getComponents(entity);

    const { collider } = components.get(ColliderComponent);

    if (!collider) {
      throw new Error('collider is undefined');
    }

    if (!collider.isSensor()) {
      return;
    }

    this.world.intersectionsWith(collider, other => {
      this.state.intersections.push({ collider1: collider, collider2: other });
    });

    if (this.state.intersections.length) {
      console.log('!!!!!!!!!');
    }
  }
}
