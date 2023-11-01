import {
  DoubleSide,
  Mesh,
  MeshBasicMaterial,
  Object3D,
  PlaneGeometry,
  Vector3,
} from 'three';
import { Facade, GameInputEvent } from '../Facade';
import { Actor } from './Actor';

export class MatActor extends Actor {
  private initialPosition = new Vector3();
  private currentController?: Object3D;
  private planeMesh: Mesh;

  constructor() {
    super();

    Facade.input.on(GameInputEvent.SelectStart, this.onSelect);
    Facade.input.on(GameInputEvent.SelectEnd, this.onDeselect);

    this.planeMesh = new Mesh(
      new PlaneGeometry(1, 0.5),
      new MeshBasicMaterial({
        color: 'blue',
        transparent: true,
        opacity: 0.5,
        side: DoubleSide,
      }),
    );

    this.add(this.planeMesh);

    this.planeMesh.visible = false;
  }

  onSelect = (event: { target: Object3D }) => {
    if (this.currentController) {
      return;
    }

    this.currentController = event.target;
    this.initialPosition.copy(this.currentController.position);
    this.planeMesh.visible = true;
  };

  onDeselect = (event: { target: Object3D }) => {
    if (this.currentController === event.target) {
      this.currentController = undefined;
    }
  };

  update() {
    if (!this.currentController) {
      return;
    }

    const { planeMesh } = this;

    const currentPosition = this.currentController.position.clone();

    const u = currentPosition.clone().sub(this.initialPosition);
    const n = new Vector3(0, 1, 0);
    const v = new Vector3().crossVectors(u, n).normalize();
    n.crossVectors(u, v);

    const midPoint = new Vector3()
      .addVectors(currentPosition, this.initialPosition)
      .divideScalar(2);

    planeMesh.matrix.makeBasis(u, v, n);
    planeMesh.matrix.setPosition(midPoint.x, midPoint.y, midPoint.z);
    planeMesh.matrix.decompose(
      planeMesh.position,
      planeMesh.quaternion,
      planeMesh.scale,
    );

    const dist = currentPosition.distanceTo(this.initialPosition);
    (planeMesh.material as MeshBasicMaterial).opacity = smoothStep(dist) * 0.5;
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
