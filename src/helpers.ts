import { Mesh, Object3D, Quaternion, Vector3 } from 'three';
import { Actor } from './actors/Actor';
import { Rotation, Vector } from '@dimforge/rapier3d';

export function postUpdateTree(root: Object3D) {
  if (root instanceof Actor) {
    root.postUpdate();
  }
  for (const child of root.children) {
    postUpdateTree(child);
  }
}

export function updateTree(root: Object3D, delta: number) {
  if (root instanceof Actor) {
    root.update(delta);
  }
  for (const child of root.children) {
    updateTree(child, delta);
  }
}

export function setOpacity(root: Object3D, opacity: number) {
  if (root instanceof Mesh && root.material) {
    root.material.transparent = true;
    root.material.opacity = opacity;
  }

  for (const child of root.children) {
    setOpacity(child, opacity);
  }
}

const vector = new Vector3();

export function transToVec(translation: Vector) {
  vector.x = translation.x;
  vector.y = translation.y;
  vector.z = translation.z;
  return vector;
}

const quat = new Quaternion();

export function rotToQuat(rotation: Rotation) {
  quat.x = rotation.x;
  quat.y = rotation.y;
  quat.z = rotation.z;
  quat.w = rotation.w;
  return quat;
}
