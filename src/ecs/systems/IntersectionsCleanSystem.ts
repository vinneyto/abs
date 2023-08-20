import { UpdateComponent } from '../components';
import { System } from '../ecs';
import { GameState } from '../model/GameState';

export class IntersectionsCleanSystem extends System {
  public componentsRequired = [UpdateComponent];

  constructor(private readonly state: GameState) {
    super();
  }

  public update(): void {
    this.state.intersections.length = 0;
  }
}
