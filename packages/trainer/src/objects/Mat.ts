import { DoubleSide, Mesh, MeshBasicMaterial, PlaneGeometry } from 'three';

export class MatMesh extends Mesh {
  constructor() {
    super(
      new PlaneGeometry(0.5, 1).rotateX(Math.PI / 2),
      new MeshBasicMaterial({
        color: 'blue',
        transparent: true,
        opacity: 0.5,
        side: DoubleSide,
      }),
    );
  }
}
