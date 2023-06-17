import { World } from '@dimforge/rapier3d';
import { ColliderComponent } from '../components/ColliderComponent';
import {
  LifeCircle,
  LifeCircleComponent,
} from '../components/LifeCircleComponent';
import { System } from '../ecs';
import { PositionComponent } from '../components/PositionComponent';
import { RotationComponent } from '../components/RotationComponent';

export class ColliderAddSystem extends System {
  constructor(private readonly world: World) {
    super();
  }

  public componentsRequired = [
    LifeCircleComponent,
    ColliderComponent,
    PositionComponent,
    RotationComponent,
  ];

  public update(entity: number): void {
    const components = this.ecs.getComponents(entity);

    const lifeCircleComponent = components.get(LifeCircleComponent);
    const colliderComponent = components.get(ColliderComponent);
    const { position } = components.get(PositionComponent);
    const { quaternion } = components.get(RotationComponent);

    if (lifeCircleComponent.state !== LifeCircle.New) {
      return;
    }

    if (
      colliderComponent.colliderDesc === undefined ||
      colliderComponent.rigidBodyDesc === undefined
    ) {
      throw new Error('unable to instantiate undefined collider or rigid body');
    }

    colliderComponent.rigidBodyDesc.setTranslation(
      position.x,
      position.y,
      position.z
    );
    colliderComponent.rigidBodyDesc.setRotation(quaternion);

    const rigidBody = this.world.createRigidBody(
      colliderComponent.rigidBodyDesc
    );

    const collider = this.world.createCollider(
      colliderComponent.colliderDesc,
      rigidBody
    );

    colliderComponent.rigidBody = rigidBody;
    colliderComponent.collider = collider;

    console.log('add collider', collider);
  }
}
