import { RoadSegmentIdComponent, PositionComponent } from '../../components';
import { System } from '../../ecs';
import { GameState } from '../../GameState';

export class RoadSegmentUpdateSystem extends System<GameState> {
  public componentsRequired = [RoadSegmentIdComponent, PositionComponent];

  public update(entity: number, state: GameState): void {
    const components = this.ecs.getComponents(entity);

    const { id: segmentId } = components.get(RoadSegmentIdComponent);
    const { position } = components.get(PositionComponent);

    const segment = state.gameModel.getRoad().getSegmentById(segmentId);

    if (!segment) {
      return;
    }

    position.z = segment.position;
  }
}
