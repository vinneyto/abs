import { Component } from '../ecs';

export class BallSpawnComponent extends Component {
  public everySeconds = 0.5;
  public countdownToSpawn = 0;
}
