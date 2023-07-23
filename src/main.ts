import {
  AmbientLight,
  AxesHelper,
  CameraHelper,
  Color,
  DirectionalLight,
  MathUtils,
  PerspectiveCamera,
  Scene,
  WebGLRenderer,
} from 'three';
import { VRButton } from 'three/addons/webxr/VRButton.js';
import { ECS } from './ecs/ecs';
import { CanvasResizeSystem } from './ecs/systems/CanvasResizeSystem';
import { canvasSize } from './ecs/entities/canvasSize';
import 'normalize.css';
import './style.css';
import { ViewAddSystem } from './ecs/systems/ViewAddSystem';
import { EntityDestroySystem as EntityDestroySystem } from './ecs/systems/EntityDestroySystem';
import { ViewTransformSystem } from './ecs/systems/ViewTransformSystem';
import { ViewRemoveSystem } from './ecs/systems/ViewRemoveSystem';
import { InitFinishSystem } from './ecs/systems/InitFinishSystem';
import { ColliderAddSystem } from './ecs/systems/ColliderAddSystem';
import { ColliderRemoveSystem } from './ecs/systems/ColliderRemoveSystem';
import { ColliderTransformSystem } from './ecs/systems/ColliderTransformSystem';
import { Time } from './Time';
import { DestroyCountdownSystem } from './ecs/systems/DestroyCountdownSystem';
import { PhysicsSystem } from './ecs/systems/PhysicsSystem';
import { RenderSystem } from './ecs/systems/RenderSystem';
import { update } from './ecs/entities/update';
import { Sky } from 'three/addons/objects/Sky.js';
import { loadAssets } from './Assets';
import { MAIN_SCENE } from './ecs/components/ViewComponent';
import { ViewVisibilitySystem } from './ecs/systems/ViewVisibilitySystem';
import { ControllerVisibilitySystem } from './ecs/systems/ControllerVisibilitySystem';
import { ControllerTransformSystem } from './ecs/systems/ControllerTransformSystem';
import { ControllerGamepadSystem } from './ecs/systems/ControllerGamepadSystem';
import { BulletSpawnSystem } from './ecs/systems/BulletSpawnSystem';
import { gun } from './ecs/entities/gun';
import { road } from './ecs/entities/road';
import { RoadManageSystem } from './ecs/systems/RoadManageSystem';
import { TurntableCameraSystem } from './ecs/systems/TurntableCameraSystem';

import('@dimforge/rapier3d').then(async RAPIER => {
  const assets = await loadAssets();

  const renderer = createRenderer();
  renderer.shadowMap.enabled = true;
  // renderer.shadowMap.type = PCFSoftShadowMap;

  const ecs = new ECS();
  const scene = new Scene();
  scene.name = MAIN_SCENE;

  renderer.xr.enabled = true;

  // adds controllers
  const controller0 = renderer.xr.getControllerGrip(0);
  const controller1 = renderer.xr.getControllerGrip(1);
  const controllers = [controller0, controller1];

  // adds sun and sky
  const axes = new AxesHelper();
  axes.position.y = 1.0;
  scene.add(axes);

  const sun = new DirectionalLight();
  sun.castShadow = true;
  sun.shadow.mapSize.width = 512; // default
  sun.shadow.mapSize.height = 512; // default
  sun.shadow.camera.near = 0.5; // default
  sun.shadow.camera.far = 500; // default
  sun.shadow.camera.left = -10;
  sun.shadow.camera.right = 10;
  sun.shadow.camera.top = 10;
  sun.shadow.camera.bottom = -10;
  scene.add(sun);

  const helper = new CameraHelper(sun.shadow.camera);
  scene.add(helper);

  const sky = new Sky();
  sky.scale.setScalar(10000);
  scene.add(sky);

  const skyUniforms = sky.material.uniforms;

  skyUniforms['turbidity'].value = 10;
  skyUniforms['rayleigh'].value = 0.1;
  skyUniforms['mieCoefficient'].value = 0.00007;
  skyUniforms['mieDirectionalG'].value = 0.8;

  const parameters = {
    elevation: 25,
    azimuth: 180,
  };

  const phi = MathUtils.degToRad(90 - parameters.elevation);
  const theta = MathUtils.degToRad(parameters.azimuth);

  sun.position.setFromSphericalCoords(50, phi, theta);

  skyUniforms['sunPosition'].value.copy(sun.position);

  // ambient light
  const ambientLight = new AmbientLight();
  ambientLight.intensity = 0.1;
  scene.add(ambientLight);

  const camera = new PerspectiveCamera(75, 1, 0.01, 100);
  camera.position.z = 2;
  camera.position.y = 1;

  // physics
  const gravity = { x: 0.0, y: -9.81, z: 0.0 };
  const world = new RAPIER.World(gravity);

  scene.background = new Color('gray');

  // input system
  ecs.addSystem(new ControllerGamepadSystem(controllers));
  ecs.addSystem(new ControllerVisibilitySystem(controllers));
  ecs.addSystem(new ControllerTransformSystem(controllers));

  // logic systems
  ecs.addSystem(new BulletSpawnSystem(RAPIER, assets.gun.bulletSpawnTransform));
  ecs.addSystem(new DestroyCountdownSystem());
  ecs.addSystem(new RoadManageSystem(assets.road.model, assets.barrier.model));
  ecs.addSystem(new TurntableCameraSystem(renderer, camera));

  // initialize systems
  ecs.addSystem(new ViewAddSystem(scene));
  ecs.addSystem(new ColliderAddSystem(world));
  ecs.addSystem(new InitFinishSystem());

  // world update systems
  ecs.addSystem(new PhysicsSystem(world));
  ecs.addSystem(new ColliderTransformSystem());
  ecs.addSystem(new ViewTransformSystem());
  ecs.addSystem(new ViewVisibilitySystem());

  // destroy systems
  ecs.addSystem(new ViewRemoveSystem());
  ecs.addSystem(new ColliderRemoveSystem(world));
  ecs.addSystem(new EntityDestroySystem());

  // render system
  ecs.addSystem(new CanvasResizeSystem(renderer));
  ecs.addSystem(new RenderSystem(renderer, scene, camera));

  // entities

  ecs.addEntity(canvasSize());
  ecs.addEntity(update());

  // ground
  // ecs.addEntity(
  //   view({
  //     position: new Vector3(0, -0.1, 0),
  //     view: new Mesh(
  //       new BoxGeometry(10, 0.2, 10),
  //       new MeshPhysicalMaterial({ color: 'green' })
  //     ),
  //   }),
  //   collider(
  //     RAPIER.RigidBodyDesc.fixed(),
  //     RAPIER.ColliderDesc.cuboid(5, 0.1, 5)
  //   )
  // );

  // guns - left and right
  ecs.addEntity(gun(assets, 1));
  ecs.addEntity(gun(assets, 0));

  ecs.addEntity(road());

  // ecs.addEntity(cuboid(RAPIER, new Vector3(-0.5, 0.5, -3), 1, 1, 1));
  // ecs.addEntity(cuboid(RAPIER, new Vector3(0.5, 0.5, -3), 1, 1, 1));
  // ecs.addEntity(cuboid(RAPIER, new Vector3(0.0, 1.5, -3), 1, 1, 1));

  document.body.appendChild(VRButton.createButton(renderer));

  Time.init();

  renderer.setAnimationLoop(() => {
    ecs.update();

    // if (gamepad0 && gamepad0.buttons.some(b => b.pressed)) {
    //   console.log('pressed', JSON.stringify(gamepad0.buttons));
    // }

    Time.update();
  });
});

const createRenderer = () => {
  const renderer = new WebGLRenderer();
  renderer.setPixelRatio(window.devicePixelRatio);

  document.getElementById('app')!.appendChild(renderer.domElement);

  return renderer;
};
