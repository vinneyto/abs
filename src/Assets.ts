import { Object3D } from 'three';
import { GLTF, GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import modelsUrl from './data/models.glb';

export const TYPE_GUN = 'gun';
export const TYPE_BULLET_SPAWN = 'bullet_spawn';

export interface Assets {
  gun: Object3D;
}

export async function loadAssets(): Promise<Assets> {
  const gltf = await new Promise<GLTF>(resolve =>
    new GLTFLoader().load(modelsUrl, resolve)
  );

  const gun = getObjectByType(gltf.scene, 'gun');

  // wtf some wierd transform !!!!!!!!!!!!
  gun.children[0].scale.y *= -1;
  gun.children[0].scale.multiplyScalar(0.5);
  gun.children[0].rotation.x = Math.PI * -1.25;
  getObjectByType(gun, 'bullet_spawn').visible = false;

  return { gun };
}

export function getObjectByType(scene: Object3D, type: string) {
  let object: Object3D | undefined;

  scene.traverse(child => {
    if (object === undefined && child.userData.type === type) {
      object = child;
    }
  });

  if (object === undefined) {
    throw new Error(`object ${type} is not found in assets`);
  }

  return object;
}
