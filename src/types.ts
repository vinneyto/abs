import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader.js';

export type RapierModule = typeof import('@dimforge/rapier3d');

export interface Assets {
  gun: GLTF;
  drone: GLTF;
}
