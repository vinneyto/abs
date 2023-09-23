import {
  ThreeEnemyDecorationComponent,
  ThreeViewComponent,
} from '../components';
import { getRotors } from '../../Assets';
import { GameState } from '../../ecs/GameState';
import {
  LifeCircle,
  LifeCircleComponent,
  MeshComponent,
  Meshes,
} from '../../ecs/components';
import { System } from '../../ecs/ecs';

export class ThreeEnemyDecorationAddSystem extends System<GameState> {
  public componentsRequired = [
    LifeCircleComponent,
    MeshComponent,
    ThreeViewComponent,
  ];

  public update(entity: number): void {
    const components = this.ecs.getComponents(entity);

    const lifeCircleComponent = components.get(LifeCircleComponent);
    const meshComponent = components.get(MeshComponent);
    const { view } = components.get(ThreeViewComponent);

    if (
      lifeCircleComponent.state !== LifeCircle.New ||
      meshComponent.mesh !== Meshes.Enemy
    ) {
      return;
    }

    const rotors = getRotors(view);

    const decorationComponent = new ThreeEnemyDecorationComponent();

    decorationComponent.mainRotor = rotors.mainRotor;
    decorationComponent.tailRotor = rotors.tailRotor;

    this.ecs.addComponent(entity, decorationComponent);
  }
}
