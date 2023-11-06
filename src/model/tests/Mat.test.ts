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

  test('is not visible by default', () => {
    expect(mat.isVisible()).toBeFalsy();
  });

  test('is visible after drag for a huge distance', () => {
    expect(mat.isVisible()).toBeFalsy();

    mat.startDrag(new Vector3());
    mat.setControllerPosition(new Vector3(0, 0, 1));
    mat.update();

    expect(mat.isVisible()).toBeTruthy();
  });

  test('is invisible after drag and not moving', () => {
    mat.startDrag(new Vector3());
    mat.setControllerPosition(new Vector3(0, 0, 0));
    mat.update();

    expect(mat.isVisible()).toBeFalsy();
  });
});
