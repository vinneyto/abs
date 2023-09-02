import { LifeCircle, LifeCircleComponent } from '../../components';
import { System } from '../../ecs';
import { GameState } from '../../GameState';

export class InitFinishSystem extends System<GameState> {
  public componentsRequired = [LifeCircleComponent];

  public update(entity: number): void {
    const components = this.ecs.getComponents(entity);

    const lifeCircleComponent = components.get(LifeCircleComponent);

    if (lifeCircleComponent.state === LifeCircle.New) {
      lifeCircleComponent.state = LifeCircle.Added;
    }
  }
}
