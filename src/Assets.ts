import { Matrix4, Object3D } from 'three';
import { GLTF, GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import modelsUrl from './data/models.glb';

export const TYPE_GUN = 'gun';
export const TYPE_BULLET_SPAWN = 'bullet_spawn';

interface Gun {
  model: Object3D;
  bulletSpawnTransform: Matrix4;
}

interface Road {
  model: Object3D;
}

export interface Assets {
  gun: Gun;
  road: Road;
}

export async function loadAssets(): Promise<Assets> {
  const gltf = await new Promise<GLTF>(resolve =>
    new GLTFLoader().load(modelsUrl, resolve)
  );

  const gun = extractGun(gltf);
  const road = extractRoad(gltf);

  return { gun, road };
}

function extractGun(gltf: GLTF) {
  const gun = getObjectByType(gltf.scene, 'gun');

  // wtf some wierd transform !!!!!!!!!!!!
  gun.scale.y *= -1;
  gun.scale.multiplyScalar(0.5);
  gun.rotation.x = Math.PI * -1.25;
  gun.updateMatrixWorld();
  const bulletSpawn = getObjectByType(gun, 'bullet_spawn');
  bulletSpawn.visible = false;
  const bulletSpawnTransform = bulletSpawn.matrixWorld.clone();

  return { model: wrapTransform(gun), bulletSpawnTransform };
}

function extractRoad(gltf: GLTF) {
  const road = getObjectByType(gltf.scene, 'road');

  // wtf some wierd transform !!!!!!!!!!!!
  road.position.set(0, 0, 0);
  road.rotation.z = Math.PI / 2;

  return { model: wrapTransform(road) };
}

function wrapTransform(obj: Object3D) {
  const wrapper = new Object3D();
  wrapper.add(obj);
  return wrapper;
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
