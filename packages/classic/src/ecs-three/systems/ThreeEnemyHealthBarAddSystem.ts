import { Color } from 'three';
import { GameState } from '../../ecs/GameState';
import {
  EnemyHealthComponent,
  MeshComponent,
  Meshes,
  OnAdd,
} from '../../ecs/components';
import { System, predicate } from '../../ecs/ecs';
import { ThreeEnemyHealthBarComponent } from '../components';
import {
  HEALTH_BAR_COLOR_BACK,
  HEALTH_BAR_COLOR_FRONT,
  HEALTH_BAR_HEIGHT,
  HEALTH_BAR_WIDTH,
} from '../constants';
import { ProgressBarMaterial } from '../materials';

const progressBarMaterial = new ProgressBarMaterial(
  new Color(HEALTH_BAR_COLOR_BACK),
  new Color(HEALTH_BAR_COLOR_FRONT),
);

export class ThreeEnemyHealthBarAddSystem extends System<GameState> {
  public query = [
    OnAdd,
    EnemyHealthComponent,
    predicate(MeshComponent, ({ mesh }) => mesh === Meshes.Enemy),
  ];

  public update(entity: number, state: GameState): void {
    const { healthBar } = this.ecs.addComponent(
      entity,
      ThreeEnemyHealthBarComponent,
    );

    healthBar.material = progressBarMaterial;
    healthBar.scale.set(HEALTH_BAR_WIDTH, HEALTH_BAR_HEIGHT, 0);

    state.scene.add(healthBar);
  }
}
