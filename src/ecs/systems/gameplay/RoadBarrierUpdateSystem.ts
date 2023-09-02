import { BARRIER_WIDTH } from '../../../Assets';
import {
  RoadSegmentBarrierComponent,
  TransformComponent,
} from '../../components';
import { System } from '../../ecs';
import { GameState } from '../../GameState';

export class RoadBarrierUpdateSystem extends System<GameState> {
  public componentsRequired = [RoadSegmentBarrierComponent, TransformComponent];

  public update(entity: number, state: GameState): void {
    const components = this.ecs.getComponents(entity);

    const { position } = components.get(TransformComponent);

    position.y = state.gameModel.road.barrierHeight;
    position.x = BARRIER_WIDTH / 2;
  }
}