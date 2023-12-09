import { DoubleSide, MeshBasicMaterial } from 'three';

export class MatMaterial extends MeshBasicMaterial {
  constructor() {
    super({ color: 'blue', transparent: true, opacity: 0.5, side: DoubleSide });
  }
}
