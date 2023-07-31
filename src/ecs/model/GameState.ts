import { RoadModel } from './RoadModel';

export class GameState {
  public readonly road;

  constructor() {
    this.road = new RoadModel();
  }
}
