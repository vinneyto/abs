import { Vector3 } from 'three';
import { Mat } from '../Mat';

describe('Testing Mat', () => {
  let mat: Mat;

  beforeEach(() => {
    mat = new Mat();
  });

  test('startDrag should enable dragging', () => {
    mat.startDrag(new Vector3());

    expect(mat.isDragging()).toBeTruthy();
  });
});
