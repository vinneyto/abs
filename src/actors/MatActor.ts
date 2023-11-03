import {
  AxesHelper,
  DoubleSide,
  Mesh,
  MeshBasicMaterial,
  Object3D,
  PlaneGeometry,
  Vector3,
} from 'three';
import { Facade, GameInputEvent } from '../Facade';
import { Actor } from './Actor';
import { SitupsTrainerActor } from '.';
import { ControllerSelectEvent } from '../types';

export class MatActor extends Actor {
  private initialPosition = new Vector3();
  private currentController?: Object3D;
  private planeMesh: Mesh;
  private situpsTrainer: SitupsTrainerActor;

  constructor() {
    super();

    Facade.input.on(GameInputEvent.SelectStart, this.onSelect);
    Facade.input.on(GameInputEvent.SelectEnd, this.onDeselect);

    this.planeMesh = new Mesh(
      new PlaneGeometry(0.5, 1).rotateX(Math.PI / 2),
      new MeshBasicMaterial({
        color: 'blue',
        transparent: true,
        opacity: 0.5,
        side: DoubleSide,
      }),
    );

    this.planeMesh.add(new AxesHelper(1));

    this.add(this.planeMesh);

    this.planeMesh.visible = false;

    this.situpsTrainer = new SitupsTrainerActor();

    this.add(this.situpsTrainer);
  }

  onSelect = (event: ControllerSelectEvent) => {
    if (this.currentController) {
      return;
    }

    this.currentController = event.target;
    this.initialPosition.copy(this.currentController.position);
    this.planeMesh.visible = true;
    this.situpsTrainer.hide();
  };

  onDeselect = (event: ControllerSelectEvent) => {
    if (this.currentController === event.target) {
      this.currentController = undefined;
    }

    this.situpsTrainer.visible = true;
    this.situpsTrainer.position.copy(this.planeMesh.position);
    this.situpsTrainer.quaternion.copy(this.planeMesh.quaternion);
    this.situpsTrainer.fadeIn();
    this.situpsTrainer.play();
  };

  update() {
    if (!this.currentController) {
      return;
    }

    const { planeMesh } = this;

    const currentPosition = this.currentController.position.clone();

    const v = currentPosition.clone().sub(this.initialPosition);
    const n = new Vector3(0, 1, 0);
    const u = new Vector3().crossVectors(n, v).normalize();
    n.crossVectors(v, u);

    const midPoint = new Vector3()
      .addVectors(currentPosition, this.initialPosition)
      .divideScalar(2);

    planeMesh.matrix.makeBasis(u, n, v);
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
