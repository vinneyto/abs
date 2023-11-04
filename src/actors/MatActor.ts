import {
  AxesHelper,
  DoubleSide,
  Mesh,
  MeshBasicMaterial,
  Object3D,
  Object3DEventMap,
  PlaneGeometry,
  Vector3,
} from 'three';
import { Context } from '../Context';
import { Actor } from './Actor';
import { ControllerSelectEvent } from '../types';

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
  private initialPosition = new Vector3();
  private currentController?: Object3D;
  private planeMesh: Mesh;

  constructor(context: Context) {
    super(context);

    this.planeMesh = new Mesh(matPlaneGeometry, matPlaneMaterial);

    this.planeMesh.add(new AxesHelper(1));
    this.planeMesh.visible = false;
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
    this.initialPosition.copy(this.currentController.position);
    this.planeMesh.visible = true;

    this.dispatchEvent({ type: 'startDrag', target: this });
  };

  onDeselect = (event: ControllerSelectEvent) => {
    if (this.currentController === event.target) {
      this.currentController = undefined;
    }

    this.dispatchEvent({ type: 'placed', target: this });
  };

  update() {
    if (!this.currentController) {
      return;
    }

    const { planeMesh } = this;

    const currentPosition = this.currentController.position.clone();

    const zi = currentPosition.clone().sub(this.initialPosition);
    const yi = new Vector3(0, 1, 0);
    const xi = new Vector3().crossVectors(yi, zi).normalize();
    yi.crossVectors(zi, xi).normalize();

    const midPoint = new Vector3()
      .addVectors(currentPosition, this.initialPosition)
      .divideScalar(2);

    planeMesh.matrix.makeBasis(xi, yi, zi);
    planeMesh.matrix.setPosition(midPoint.x, midPoint.y, midPoint.z);
    planeMesh.matrix.decompose(
      planeMesh.position,
      planeMesh.quaternion,
      planeMesh.scale,
    );

    const dist = currentPosition.distanceTo(this.initialPosition);
    (planeMesh.material as MeshBasicMaterial).opacity = smoothStep(dist) * 0.5;
  }

  getPlaneMesh() {
    return this.planeMesh;
  }

  dispose() {
    this.removeControllersListeners();
  }
}

function smoothStep(x: number) {
  if (x < 0.2) {
    return 0;
  } else if (x >= 0.2 && x <= 0.4) {
    return (x - 0.2) * (1 / (0.4 - 0.2));
  } else {
    return 1;
  }
}
