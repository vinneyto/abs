import EventEmitter from 'eventemitter3';
import { Matrix4, Vector3 } from 'three';

export enum MatEvent {
  StartDrag = 'startDrag',
  Placed = 'placed',
}

export class Mat extends EventEmitter {
  private transform = new Matrix4();
  private initialPosition = new Vector3();
  private controllerPosition = new Vector3();
  private visible = false;
  private dragging = false;
  private opacity = 1;

  startDrag(position: Vector3) {
    if (this.visible) {
      throw new Error('mat has already dragged');
    }

    this.initialPosition.copy(position);
    this.dragging = true;

    this.emit(MatEvent.StartDrag);
  }

  stopDrag() {
    this.dragging = false;

    this.emit(MatEvent.Placed);
  }

  setControllerPosition(position: Vector3) {
    this.controllerPosition.copy(position);
  }

  update() {
    if (!this.dragging) {
      return false;
    }

    this.visible = true;

    const currentPosition = this.controllerPosition.clone();

    const dir = currentPosition.clone().sub(this.initialPosition);

    if (dir.length() < 0.00001) {
      this.visible = false;
      return;
    }

    const zi = dir;
    const yi = new Vector3(0, 1, 0);
    const xi = new Vector3().crossVectors(yi, zi).normalize();
    yi.crossVectors(zi, xi).normalize();

    const midPoint = new Vector3()
      .addVectors(currentPosition, this.initialPosition)
      .divideScalar(2);

    this.transform.makeBasis(xi, yi, zi);
    this.transform.setPosition(midPoint.x, midPoint.y, midPoint.z);

    const dist = currentPosition.distanceTo(this.initialPosition);

    this.opacity = smoothStep(dist) * 0.5;

    return true;
  }

  getTransform() {
    return this.transform;
  }

  getOpacity() {
    return this.opacity;
  }

  isVisible() {
    return this.visible;
  }

  isDragging() {
    return this.dragging;
  }

  getInitialPosition() {
    return this.initialPosition;
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
