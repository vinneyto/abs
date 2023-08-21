import { Time } from '../../../Time';
import { RoadSegmentComponent, TransformComponent } from '../../components';
import { System } from '../../ecs';
import { GameState } from '../../model/GameState';
import { getRoadComponent } from '../../selectors';

export class RoadMovementSystem extends System<GameState> {
  public componentsRequired = [RoadSegmentComponent, TransformComponent];

  public update(entity: number, state: GameState): void {
    const { ecs } = this;
    const components = this.ecs.getComponents(entity);

    const { position } = components.get(TransformComponent);
    const { velocity } = getRoadComponent(ecs, state);

    const distDelta = Time.deltaSeconds() * velocity;
    position.z += distDelta;
  }
}
