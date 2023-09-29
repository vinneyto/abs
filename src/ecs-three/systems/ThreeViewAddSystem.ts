// @ts-ignore
import { Text } from 'troika-three-text';
import { Mesh, MeshBasicMaterial, Object3D, SphereGeometry } from 'three';
import { ThreeViewComponent } from '..';
import { Assets } from '../../Assets';
import { MeshComponent, Meshes, OnAdd } from '../../ecs/components';
import { System } from '../../ecs/ecs';
import { GameState } from '../../ecs/GameState';
import { BULLET_RADIUS } from '../../constants';

export class ThreeViewAddSystem extends System<GameState> {
  public query = [OnAdd, MeshComponent];

  public update(entity: number, state: GameState): void {
    const { ecs } = this;
    const { assets, scene } = state;
    const components = this.ecs.getComponents(entity);
    const { mesh, castShadow, receiveShadow } = components.get(MeshComponent);

    const view = createThreeView(assets, mesh);

    view.traverse(obj => {
      obj.castShadow = castShadow;
      obj.receiveShadow = receiveShadow;
    });

    scene.add(view);

    const threeViewComponent = ecs.addComponent(entity, ThreeViewComponent);
    threeViewComponent.view = view;

    console.log('add view', threeViewComponent.view);
  }
}

const bulletGeometry = new SphereGeometry(BULLET_RADIUS, 16, 16);
const bulletMaterial = new MeshBasicMaterial({ color: 0xff0000 });

function createThreeView(assets: Assets, mesh: Meshes) {
  switch (mesh) {
    case Meshes.RoadSegment:
      return assets.road.model.clone();
    case Meshes.Barrier:
      return assets.barrier.model.clone();
    case Meshes.Enemy:
      return assets.helicopter.model.clone();
    case Meshes.Gun:
      return assets.gun.model.clone();
    case Meshes.Bullet:
      return new Mesh(bulletGeometry, bulletMaterial);
    case Meshes.Text:
      return new Text() as Object3D;
    case Meshes.None:
      return new Object3D();
  }
}
