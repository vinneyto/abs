import { Time } from '../../Time';
import { RoadSegmentComponent } from '../components/RoadSegmentComponent';
import { TransformComponent } from '../components/TransformComponent';
import { System } from '../ecs';
import { GameState } from '../model/GameState';

export class RoadSegmentMovementSystem extends System {
  public componentsRequired = [RoadSegmentComponent, TransformComponent];

  constructor(private readonly state: GameState) {
    super();
  }

  public update(entity: number): void {
    const components = this.ecs.getComponents(entity);

    const { position } = components.get(TransformComponent);

    const distDelta = Time.deltaSeconds() * this.state.road.velocity;
    position.z += distDelta;
  }
}
