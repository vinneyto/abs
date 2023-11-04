import { Object3D, Vector3, XRGripSpace } from 'three';
import { Actor, MatActor, MatEvent, PortageActor } from '.';
import { Context } from '../Context';
import { XRControllerModelFactory } from 'three/examples/jsm/webxr/XRControllerModelFactory.js';

export class GameRootActor extends Actor {
  private mat: MatActor;
  private portages: PortageActor[] = [];

  private controllerGrips: XRGripSpace[] = [];
  private controllerModels: Object3D[] = [];

  // private trainer: SitupsTrainerActor;

  constructor(context: Context) {
    super(context);

    this.mat = new MatActor(context);
    this.add(this.mat);
    this.mat.addEventListener('placed', this.onMatPlaced);

    this.createControllers();
  }

  private createControllers() {
    const { xr } = this.context.renderer;

    const controllerModelFactory = new XRControllerModelFactory();

    for (let i = 0; i < 2; i++) {
      const controller = xr.getControllerGrip(i);
      const model = controllerModelFactory.createControllerModel(controller);

      this.controllerGrips[i] = controller;
      this.controllerModels[i] = model;

      controller.add(model);
      this.add(controller);
    }
  }

  onMatPlaced = (event: MatEvent) => {
    const leftPortage = new PortageActor(this.context);
    const rightPortage = new PortageActor(this.context);

    this.updateMatrixWorld();

    const { matrixWorld } = event.target.getPlaneMesh();

    leftPortage.position.copy(
      new Vector3(-0.3, 0.5, 0).applyMatrix4(matrixWorld),
    );

    rightPortage.position.copy(
      new Vector3(0.3, 0.5, 0).applyMatrix4(matrixWorld),
    );

    this.add(leftPortage);
    this.add(rightPortage);

    this.portages = [leftPortage, rightPortage];
  };
}
