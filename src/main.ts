import './style.css';
import {
  Color,
  HemisphereLight,
  PerspectiveCamera,
  Scene,
  WebGLRenderer,
} from 'three';
import { Context } from './Context';
import { loadAssets } from './loadAssets';
import { postUpdateTree, updateTree } from './helpers';
import { Time } from './Time';
import { ARButton } from './ARButton';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { XREstimatedLight } from 'three/examples/jsm/webxr/XREstimatedLight.js';
import { GameRootActor } from './actors';

import('@dimforge/rapier3d').then(async RAPIER => {
  const assets = await loadAssets();
  const gravity = { x: 0.0, y: -9.81, z: 0.0 };
  const world = new RAPIER.World(gravity);
  const renderer = createRenderer();
  const scene = new Scene();
  const camera = new PerspectiveCamera(75, 1, 0.01, 100);

  document.body.appendChild(
    ARButton.createButton(renderer, {
      optionalFeatures: ['light-estimation'],
    }),
  );

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.25;
  controls.screenSpacePanning = false;

  camera.position.set(0, 5, 10);
  camera.position.y = 1.6;
  controls.update();

  // facade

  const context = new Context(world, assets, RAPIER, renderer);

  // background

  scene.background = new Color(0x333333);

  renderer.xr.addEventListener('sessionstart', () => {
    scene.background = null;
  });

  renderer.xr.addEventListener('sessionend', () => {
    scene.background = new Color(0x333333);
  });

  // xr light

  const defaultLight = new HemisphereLight(0xffffff, 0xbbbbff, 1);
  defaultLight.position.set(0.5, 1, 0.25);
  scene.add(defaultLight);

  const xrLight = new XREstimatedLight(renderer);

  xrLight.addEventListener('estimationstart', () => {
    scene.add(xrLight);
    scene.remove(defaultLight);

    if (xrLight.environment) {
      scene.environment = xrLight.environment;
    }
  });

  xrLight.addEventListener('estimationend', () => {
    scene.add(defaultLight);
    scene.remove(xrLight);

    scene.environment = null;
  });

  // actors

  scene.add(new GameRootActor(context));

  const gun = assets.gun.scene.clone();
  gun.scale.set(0.1, 0.1, 0.1);
  gun.rotateY(Math.PI / 2);

  // leftController.add(gun.clone());
  // rightController.add(gun.clone());

  // event loop

  Time.init();

  // resize

  window.addEventListener('resize', onWindowResize);

  function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);
  }

  onWindowResize();

  renderer.setAnimationLoop(() => {
    Time.update();

    const delta = Time.deltaSeconds();

    world.step();

    updateTree(scene, delta);
    postUpdateTree(scene);

    renderer.render(scene, camera);
  });
});

const createRenderer = () => {
  const renderer = new WebGLRenderer({ antialias: true, alpha: true });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.xr.enabled = true;

  document.getElementById('app')!.appendChild(renderer.domElement);

  return renderer;
};
