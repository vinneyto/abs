import { BARRIER_WIDTH } from '../../../constants';
import {
  RoadSegmentBarrierComponent,
  TransformComponent,
} from '../../components';
import { System } from '../../ecs';
import { GameState } from '../../GameState';

export class RoadBarrierUpdateSystem extends System<GameState> {
  public query = [RoadSegmentBarrierComponent, TransformComponent];

  public update(entity: number, state: GameState): void {
    const components = this.ecs.getComponents(entity);

    const { position } = components.get(TransformComponent);

    position.y = state.gameModel.getRoad().barrierHeight;
    position.x = BARRIER_WIDTH / 2;
  }
}
