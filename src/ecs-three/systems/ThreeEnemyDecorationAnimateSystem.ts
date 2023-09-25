import { ThreeEnemyDecorationComponent } from '../components';
import { Time } from '../../Time';
import { GameState } from '../../ecs/GameState';
import { System } from '../../ecs/ecs';

export class ThreeEnemyDecorationAnimateSystem extends System<GameState> {
  public query = [ThreeEnemyDecorationComponent];

  public update(entity: number): void {
    const components = this.ecs.getComponents(entity);

    const { mainRotor, tailRotor } = components.get(
      ThreeEnemyDecorationComponent,
    );

    if (!mainRotor || !tailRotor) {
      return;
    }

    mainRotor.rotation.y += Time.deltaSeconds() * 10;
    tailRotor.visible = false; // cose of model
  }
}
