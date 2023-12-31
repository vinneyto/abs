import { Object3D, XRGripSpace } from 'three';
import {
  Actor,
  BatteryActor,
  CollisionShapeActor,
  ControllerBodyActor,
  MatActor,
} from '.';
import { Context } from '../Context';
import { XRControllerModelFactory } from 'three/examples/jsm/webxr/XRControllerModelFactory.js';
import { MatEvent } from '../model';

const BATTERY_RADIUS = 0.2;
const BATTERY_HEIGHT = 0.7;

export class GameRootActor extends Actor {
  private mat: MatActor;
  private battery: BatteryActor;

  private controllerGrips: XRGripSpace[] = [];
  private controllerModels: Object3D[] = [];
  private controllerBodies: ControllerBodyActor[] = [];

  private intersectsBattery = false;

  // private trainer: SitupsTrainerActor;

  constructor(context: Context) {
    super(context);

    this.mat = new MatActor(context);
    this.add(this.mat);
    this.mat.model.on(MatEvent.StartDrag, this.onMatStartDrag);
    this.mat.model.on(MatEvent.Placed, this.onMatPlaced);

    this.battery = new BatteryActor(context, BATTERY_HEIGHT, BATTERY_RADIUS);
    this.battery.visible = false;
    this.add(this.battery);

    this.createControllers();
  }

  private createControllers() {
    const { xr } = this.context.renderer;

    const controllerModelFactory = new XRControllerModelFactory();

    for (let i = 0; i < 2; i++) {
      const controller = xr.getControllerGrip(i);
      const model = controllerModelFactory.createControllerModel(controller);
      const controllerBody = new ControllerBodyActor(this.context, controller);

      this.controllerGrips[i] = controller;
      this.controllerModels[i] = model;
      this.controllerBodies[i] = controllerBody;

      controller.add(model);
      this.add(controller);
      this.add(controllerBody);
    }
  }

  private onMatStartDrag = () => {
    this.battery.visible = false;
  };

  private onMatPlaced = () => {
    this.updateMatrixWorld();

    this.battery.visible = true;
    this.battery.placeOnMat(this.mat.model.getTransform());
  };

  private collisionHandler = (handle1: number, handle2: number) => {
    const body1 = this.context.world.getRigidBody(handle1);
    const body2 = this.context.world.getRigidBody(handle2);

    const actor1 = CollisionShapeActor.getActor(body1).getRigidBodyActor();
    const actor2 = CollisionShapeActor.getActor(body2).getRigidBodyActor();

    console.log(actor1, actor2);
  };

  private checkControllerIntersectsBattery() {
    let intersects = false;

    for (const ctrlBody of this.controllerBodies) {
      intersects =
        intersects || this.battery.checkIntersectsWithControllerBody(ctrlBody);
    }

    if (this.intersectsBattery !== intersects) {
      this.intersectsBattery = intersects;

      this.updateBattery();
    }
  }

  private updateBattery() {
    this.battery.setCharging(this.intersectsBattery);
  }

  update() {
    this.context.eventQueue.drainCollisionEvents(this.collisionHandler);

    this.checkControllerIntersectsBattery();
  }
}
