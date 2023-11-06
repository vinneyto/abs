import {
  AxesHelper,
  DoubleSide,
  Mesh,
  MeshBasicMaterial,
  Object3D,
  Object3DEventMap,
  PlaneGeometry,
} from 'three';
import { Context } from '../Context';
import { Actor } from './Actor';
import { ControllerSelectEvent } from '../types';
import { Mat } from '../model';

const matPlaneGeometry = new PlaneGeometry(0.5, 1).rotateX(Math.PI / 2);
const matPlaneMaterial = new MeshBasicMaterial({
  color: 'blue',
  transparent: true,
  opacity: 0.5,
  side: DoubleSide,
});

export interface MatEvent {
  target: MatActor;
}

export interface MatEventMap extends Object3DEventMap {
  startDrag: MatEvent;
  placed: MatEvent;
}

export class MatActor extends Actor<MatEventMap> {
  public readonly model = new Mat();

  private currentController?: Object3D;
  private planeMesh: Mesh;

  constructor(context: Context) {
    super(context);

    this.planeMesh = new Mesh(matPlaneGeometry, matPlaneMaterial);

    this.planeMesh.add(new AxesHelper(1));
    this.add(this.planeMesh);

    this.addControllersListeners();
  }

  private addControllersListeners() {
    for (let i = 0; i < 2; i++) {
      const ctrl = this.context.renderer.xr.getController(i);

      ctrl.addEventListener('selectstart', this.onSelect);
      ctrl.addEventListener('selectend', this.onDeselect);
    }
  }

  private removeControllersListeners() {
    for (let i = 0; i < 2; i++) {
      const ctrl = this.context.renderer.xr.getController(i);

      ctrl.removeEventListener('selectstart', this.onSelect);
      ctrl.removeEventListener('selectend', this.onDeselect);
    }
  }

  onSelect = (event: ControllerSelectEvent) => {
    if (this.currentController) {
      return;
    }

    this.currentController = event.target;

    this.model.startDrag(this.currentController.position);
  };

  onDeselect = (event: ControllerSelectEvent) => {
    if (this.currentController === event.target) {
      this.currentController = undefined;
    }

    this.model.stopDrag();
  };

  update() {
    const { planeMesh } = this;
    const { position, quaternion, scale } = planeMesh;

    if (this.currentController) {
      this.model.setControllerPosition(this.currentController.position);
    }

    this.model.update();
    this.model.getTransform().decompose(position, quaternion, scale);

    planeMesh.visible = this.model.isVisible();
    (planeMesh.material as MeshBasicMaterial).opacity = this.model.getOpacity();
  }

  getPlaneMesh() {
    return this.planeMesh;
  }

  dispose() {
    this.removeControllersListeners();
  }
}
