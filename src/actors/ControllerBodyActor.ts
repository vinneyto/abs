import { Mesh, MeshBasicMaterial, Object3D, SphereGeometry } from 'three';
import { Context } from '../Context';
import { RigidBodyActor } from './RigidBodyActor';
import { CollisionShapeActor } from '.';

export class ControllerBodyActor extends RigidBodyActor {
  private controller: Object3D;

  constructor(context: Context, controller: Object3D, radius = 0.05) {
    const { RAPIER } = context;

    const shape = new CollisionShapeActor(
      context,
      RAPIER.RigidBodyDesc.fixed(),
      RAPIER.ColliderDesc.ball(radius),
    );

    const debugMesh = new Mesh(
      new SphereGeometry(radius),
      new MeshBasicMaterial({ wireframe: true, color: 'red' }),
    );

    super(context, shape, debugMesh);

    this.controller = controller;
    this.visible = false;
  }

  update() {
    this.visible = this.controller.visible;

    const body = this.getCollisionShape().getRigidBody();

    body.setEnabled(this.visible);
    body.setTranslation(this.controller.position, true);
    body.setRotation(this.controller.quaternion, true);
  }
}
