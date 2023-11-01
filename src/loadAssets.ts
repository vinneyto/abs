import { GLTF, GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import droneAssetUrl from './assets/drone.glb';
import sciFiGunUrl from './assets/scifi_gun.glb';
import { Assets } from './types';

export async function loadAssets(): Promise<Assets> {
  const gltf = await Promise.all([
    loadGLTF(droneAssetUrl),
    loadGLTF(sciFiGunUrl),
  ]);

  return {
    drone: gltf[0],
    gun: gltf[1],
  };
}

export async function loadGLTF(src: string) {
  return await new Promise<GLTF>(resolve =>
    new GLTFLoader().load(src, resolve),
  );
}
