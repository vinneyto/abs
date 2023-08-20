import { Time } from '../../Time';
import { RoadSegmentComponent, TransformComponent } from '../components';
import { System } from '../ecs';
import { GameState } from '../model/GameState';

export class RoadMovementSystem extends System {
  public componentsRequired = [RoadSegmentComponent, TransformComponent];

  constructor(private readonly state: GameState) {
    super();
  }

  public update(entity: number): void {
    const { roadVelocity } = this.state;

    const components = this.ecs.getComponents(entity);

    const { position } = components.get(TransformComponent);

    const distDelta = Time.deltaSeconds() * roadVelocity;
    position.z += distDelta;
  }
}
