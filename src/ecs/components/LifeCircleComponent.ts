import { Component } from '../ecs';

export enum LifeCircle {
  New,
  Added,
  Destroy,
}

export class LifeCircleComponent extends Component {
  public state: LifeCircle = LifeCircle.New;
}
