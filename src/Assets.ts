import { BufferGeometry, Matrix4, Mesh, Object3D } from 'three';
import { GLTF, GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import modelsUrl from './data/models.glb';

export const TYPE_GUN = 'gun';
export const TYPE_BULLET_SPAWN = 'bullet_spawn';

export const BARRIER_HEIGHT = 1.25;
export const BARRIER_WIDTH = 10;
export const ENEMY_RADIUS = 0.5;
export const HEAD_RADIUS = 0.1;

interface Trimesh {
  vertices: Float32Array;
  indices: Uint32Array;
}

interface Model {
  model: Object3D;
}

interface Barrier extends Model {
  trimesh: Trimesh;
}

interface Gun extends Model {
  bulletSpawnTransform: Matrix4;
}

export interface Assets {
  gun: Gun;
  road: Model;
  barrier: Barrier;
}

export async function loadAssets(): Promise<Assets> {
  const gltf = await new Promise<GLTF>(resolve =>
    new GLTFLoader().load(modelsUrl, resolve)
  );

  const gun = extractGun(gltf);
  const road = extractRoad(gltf);
  const barrier = extractBarrier(gltf);

  return { gun, road, barrier };
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

function extractBarrier(gltf: GLTF) {
  const barrier = getObjectByType(gltf.scene, 'barrier');
  barrier.position.y = -BARRIER_HEIGHT;
  const model = bakeTransform(barrier);
  const trimesh = getFirstTrimesh(model);

  return { model, trimesh };
}

/**
 * cause i'm too lazy to watch blender tutorials
 *
 * @param root
 * @returns
 */
function bakeTransform(root: Object3D) {
  root.updateMatrixWorld();

  const objects: Object3D[] = [];

  root.traverse(obj => {
    if (
      obj instanceof Mesh &&
      obj.geometry instanceof BufferGeometry &&
      obj.visible
    ) {
      obj.geometry.applyMatrix4(root.matrixWorld);
      obj.position.set(0, 0, 0);
      obj.quaternion.identity();
      obj.scale.set(1, 1, 1);

      objects.push(obj);
    }
  });

  const wrap = new Object3D();

  for (const obj of objects) {
    wrap.add(obj);
  }

  return wrap;
}

function getFirstTrimesh(obj: Object3D) {
  const first = obj.children[0] as Mesh;

  const vertices = first.geometry.attributes.position.array as Float32Array;
  const indices = new Uint32Array(first.geometry.index?.array || []);

  return { vertices, indices };
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
