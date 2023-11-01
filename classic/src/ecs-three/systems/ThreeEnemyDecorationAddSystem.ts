import {
  ThreeEnemyDecorationComponent,
  ThreeViewComponent,
} from '../components';
import { getRotors } from '../../Assets';
import { GameState } from '../../ecs/GameState';
import { MeshComponent, Meshes, OnAdd } from '../../ecs/components';
import { System, predicate } from '../../ecs/ecs';

export class ThreeEnemyDecorationAddSystem extends System<GameState> {
  public query = [
    OnAdd,
    ThreeViewComponent,
    predicate(MeshComponent, ({ mesh }) => mesh === Meshes.Enemy),
  ];

  public update(entity: number): void {
    const { ecs } = this;

    const components = this.ecs.getComponents(entity);

    const { view } = components.get(ThreeViewComponent);

    const rotors = getRotors(view);

    ecs.addComponent(entity, ThreeEnemyDecorationComponent, {
      mainRotor: rotors.mainRotor,
      tailRotor: rotors.tailRotor,
    });
  }
}
