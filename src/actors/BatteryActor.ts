import {
  CylinderGeometry,
  Euler,
  Matrix4,
  Mesh,
  MeshBasicMaterial,
  Object3DEventMap,
  Quaternion,
  Vector3,
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

  placeOnMat(planeMatrixWorld: Matrix4) {
    const position = new Vector3();
    const quaternion = new Quaternion();
    const scale = new Vector3();

    // find local transform for battery

    planeMatrixWorld.decompose(position, quaternion, scale);

    const planeLength = scale.z;
    const batteryRadius = this.getRadius();

    const batteryTranslation = new Matrix4().makeTranslation(
      0,
      batteryRadius + 0.1,
      -planeLength * 0.5 + batteryRadius + 0.1,
    );

    const batteryRotation = new Matrix4().makeRotationFromEuler(
      new Euler(0, 0, Math.PI / 2),
    );

    // apply mat matrix without scale

    scale.set(1, 1, 1);

    const unscaledPlaneMatrixWorld = new Matrix4().compose(
      position,
      quaternion,
      scale,
    );

    // compose matrices

    const batteryMatrix = new Matrix4()
      .multiply(unscaledPlaneMatrixWorld)
      .multiply(batteryTranslation)
      .multiply(batteryRotation);

    batteryMatrix.decompose(position, quaternion, scale);

    const batteryBody = this.getCollisionShape().getRigidBody();

    batteryBody.setTranslation(position, false);
    batteryBody.setRotation(quaternion, false);
  }

  getHeight() {
    return this.height;
  }

  getRadius() {
    return this.radius;
  }
}
