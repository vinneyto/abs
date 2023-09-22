import { UpdateComponent } from '../../components';
import { System } from '@abs/core';
import { GameState } from '../../GameState';

export class IntersectionsCleanSystem extends System<GameState> {
  public componentsRequired = [UpdateComponent];

  constructor(private readonly state: GameState) {
    super();
  }

  public update(): void {
    this.state.intersections.length = 0;
  }
}
