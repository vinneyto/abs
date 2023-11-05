import {
  CylinderGeometry,
  Mesh,
  MeshBasicMaterial,
  Object3DEventMap,
} from 'three';
import { CollisionShapeActor, ControllerBodyActor, RigidBodyActor } from '.';
import { Context } from '../Context';

export class BatteryActor<
  TEventMap extends Object3DEventMap = Object3DEventMap,
> extends RigidBodyActor<TEventMap> {
  constructor(
    context: Context,
    private readonly height: number,
    private readonly radius: number,
  ) {
    const { RAPIER } = context;

    const shape = new CollisionShapeActor(
      context,
      RAPIER.RigidBodyDesc.fixed(),
      RAPIER.ColliderDesc.cylinder(height * 0.5, radius),
    );

    const mesh = new Mesh(
      new CylinderGeometry(radius, radius, height),
      new MeshBasicMaterial({ color: 'green', wireframe: true }),
    );

    super(context, shape, mesh);
  }

  update() {
    this.getCollisionShape().getRigidBody().setEnabled(this.visible);
  }

  checkIntersectsWithControllerBody(ctrlBody: ControllerBodyActor) {
    const ctrlBodyCollider = ctrlBody.getCollisionShape().getCollider();
    const batteryCollider = this.getCollisionShape().getCollider();

    return (
      ctrlBody.visible &&
      ctrlBodyCollider.shape.intersectsShape(
        ctrlBody.position,
        ctrlBody.quaternion,
        batteryCollider.shape,
        this.position,
        this.quaternion,
      )
    );
  }

  setCharging(charging: boolean) {
    (this.debugMesh.material as MeshBasicMaterial).color.setColorName(
      charging ? 'yellow' : 'green',
    );
  }

  getHeight() {
    return this.height;
  }

  getRadius() {
    return this.radius;
  }
}
