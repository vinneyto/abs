import { PlaneGeometry } from 'three';

export class MatGeometry extends PlaneGeometry {
  constructor() {
    super(0.5, 1);
    this.rotateX(Math.PI / 2);
  }
}
