import { SpriteMaterial } from 'three';
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

export class ThreeEnemyHealthBarAddSystem extends System<GameState> {
  public query = [
    OnAdd,
    EnemyHealthComponent,
    predicate(MeshComponent, ({ mesh }) => mesh === Meshes.Enemy),
  ];

  public update(entity: number, state: GameState): void {
    const threeHealthBarComponent = new ThreeEnemyHealthBarComponent();

    const backgroundMaterial = new SpriteMaterial({
      color: HEALTH_BAR_COLOR_BACK,
      depthWrite: false,
      depthTest: false,
    });
    const healthMaterial = new SpriteMaterial({
      color: HEALTH_BAR_COLOR_FRONT,
      depthWrite: false,
      depthTest: false,
    });

    const { backgroundBar, healthBar, container } = threeHealthBarComponent;

    backgroundBar.material = backgroundMaterial;
    backgroundBar.scale.set(HEALTH_BAR_WIDTH, HEALTH_BAR_HEIGHT, 0);
    backgroundBar.renderOrder = 1000;

    healthBar.material = healthMaterial;
    healthBar.scale.set(HEALTH_BAR_WIDTH, HEALTH_BAR_HEIGHT, 0);
    healthBar.renderOrder = 1001;

    container.add(backgroundBar, healthBar);

    state.scene.add(container);

    this.ecs.addComponent(entity, threeHealthBarComponent);
  }
}
