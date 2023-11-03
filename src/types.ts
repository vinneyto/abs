import { Group } from 'three';
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader.js';

export type RapierModule = typeof import('@dimforge/rapier3d');

export interface Assets {
  gun: GLTF;
  drone: GLTF;
  situps: Group;
}

export interface ControllerSelectEvent {
  data: XRInputSource;
  target: Group;
}

export interface ControllerMoveEvent {
  target: Group;
}
