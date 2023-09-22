import { BARRIER_WIDTH } from '../../../Assets';
import {
  PositionComponent,
  RoadSegmentBarrierComponent,
} from '../../components';
import { System } from '@abs/core';
import { GameState } from '../../GameState';

export class RoadBarrierUpdateSystem extends System<GameState> {
  public componentsRequired = [RoadSegmentBarrierComponent, PositionComponent];

  public update(entity: number, state: GameState): void {
    const components = this.ecs.getComponents(entity);

    const { position } = components.get(PositionComponent);

    position.y = state.gameModel.getRoad().barrierHeight;
    position.x = BARRIER_WIDTH / 2;
  }
}
