import { RoadSegmentIdComponent, TransformComponent } from '../../components';
import { System } from '../../ecs';
import { GameState } from '../../GameState';

export class RoadSegmentUpdateSystem extends System<GameState> {
  public query = [RoadSegmentIdComponent, TransformComponent];

  public update(entity: number, state: GameState): void {
    const components = this.ecs.getComponents(entity);

    const { id: segmentId } = components.get(RoadSegmentIdComponent);
    const { position } = components.get(TransformComponent);

    const segment = state.gameModel.getRoad().getSegmentById(segmentId);

    if (!segment) {
      return;
    }

    position.z = segment.position;
  }
}
