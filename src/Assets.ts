import { BufferGeometry, Matrix4, Mesh, Object3D } from 'three';
import { GLTF, GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import modelsUrl from './data/models.glb';
import { BARRIER_HEIGHT } from './constants';

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

interface Helicopter extends Model {
  trimesh: Trimesh;
}

export interface Assets {
  gun: Gun;
  road: Model;
  barrier: Barrier;
  helicopter: Helicopter;
}

export async function loadAssets(): Promise<Assets> {
  const gltf = await loadGLTF(modelsUrl);

  const gun = extractGun(gltf);
  const road = extractRoad(gltf);
  const barrier = extractBarrier(gltf);
  const helicopter = extractHelicopter(gltf);

  return { gun, road, barrier, helicopter };
}

function extractHelicopter(gltf: GLTF): Helicopter {
  const helicopter = getObjectByName(gltf.scene, 'helicopter');

  // helicopter.children[0].scale.y = -1;
  const root = helicopter.children[0];

  const model = wrapTransform(root);

  const helicopterBody = getObjectByName(root, 'helicopter_body') as Mesh;

  const vertices = helicopterBody.geometry.attributes.position
    .array as Float32Array;

  const indices = new Uint32Array(helicopterBody.geometry.getIndex()?.array!);

  return { model, trimesh: { vertices, indices } };
}

export function getRotors(model: Object3D) {
  const rotors: { mainRotor?: Object3D; tailRotor?: Object3D } = {};

  model.traverse(obj => {
    if (obj.name === 'MainRotor_2') {
      rotors.mainRotor = obj;
    }
    if (obj.name === 'TailRotor_1') {
      rotors.tailRotor = obj;
    }
  });

  return rotors;
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

export function getObjectByName(scene: Object3D, name: string) {
  let object: Object3D | undefined;

  scene.traverse(child => {
    if (object === undefined && child.name === name) {
      object = child;
    }
  });

  if (object === undefined) {
    throw new Error(`object ${name} is not found in assets`);
  }

  return object;
}

export async function loadGLTF(src: string) {
  return await new Promise<GLTF>(resolve =>
    new GLTFLoader().load(src, resolve),
  );
}
