import { GLTF, GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader.js';
import droneAssetUrl from './assets/drone.glb';
import sciFiGunUrl from './assets/scifi_gun.glb';
import situpsUrl from './assets/situps.fbx';
import { Assets } from './types';
import { Group } from 'three';

export async function loadAssets(): Promise<Assets> {
  const data = await Promise.all([
    loadGLTF(droneAssetUrl),
    loadGLTF(sciFiGunUrl),
    loadFBX(situpsUrl),
  ]);

  return {
    drone: data[0],
    gun: data[1],
    situps: data[2],
  };
}

export async function loadGLTF(src: string) {
  return await new Promise<GLTF>(resolve =>
    new GLTFLoader().load(src, resolve),
  );
}

export async function loadFBX(src: string) {
  return await new Promise<Group>(resolve =>
    new FBXLoader().load(src, resolve),
  );
}
