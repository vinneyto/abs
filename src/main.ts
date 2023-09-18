import {
  AmbientLight,
  AxesHelper,
  // CameraHelper,
  Color,
  DirectionalLight,
  MathUtils,
  PerspectiveCamera,
  Scene,
  WebGLRenderer,
} from 'three';
import { VRButton } from 'three/addons/webxr/VRButton.js';
import { ECS } from './ecs/ecs';
import {
  CanvasResizeSystem,
  ViewAddSystem,
  EntityDestroySystem,
  ViewTransformSystem,
  ViewRemoveSystem,
  InitFinishSystem,
  ColliderAddSystem,
  ColliderRemoveSystem,
  ColliderTransformSystem,
  DestroyCountdownSystem,
  PhysicsSystem,
  RenderSystem,
  ViewVisibilitySystem,
  ControllerVisibilitySystem,
  ControllerTransformSystem,
  ControllerGamepadSystem,
  BulletSpawnSystem,
  TurntableCameraSystem,
  ClosestBarrierPointerUpdateSystem,
  ClosestBarrierCountUpdateSystem,
  ClosestBarrierAttemptsUpdateSystem,
  TextUpdateSystem,
  RoadSegmentUpdateSystem,
  RoadBarrierUpdateSystem,
  GameModelUpdateSystem,
  EnemyPositionUpdateSystem,
  EnemyAnimationUpdateSystem,
} from './ecs/systems';
import {
  canvasSize,
  update,
  gun,
  closestBarrierCount,
  closestBarrierAttempts,
} from './ecs/entities';
import 'normalize.css';
import './style.css';
import { Time } from './Time';
import { Sky } from 'three/addons/objects/Sky.js';
import { loadAssets } from './Assets';
import { MAIN_SCENE } from './ecs/components';
import { GameState } from './ecs/GameState';
import { GameModel } from './model/GameModel';

import('@dimforge/rapier3d').then(async RAPIER => {
  const assets = await loadAssets();

  const renderer = createRenderer();
  renderer.shadowMap.enabled = true;
  // renderer.shadowMap.type = PCFSoftShadowMap;

  const ecs = new ECS<GameState>();
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
  sun.shadow.camera.left = -20;
  sun.shadow.camera.right = 20;
  sun.shadow.camera.top = 20;
  sun.shadow.camera.bottom = -20;
  sun.intensity = 1;
  scene.add(sun);

  const gameModel = new GameModel();

  // const helper = new CameraHelper(sun.shadow.camera);
  // scene.add(helper);

  const sky = new Sky();
  sky.scale.setScalar(10000);
  scene.add(sky);

  const skyUniforms = sky.material.uniforms;

  skyUniforms['turbidity'].value = 10;
  skyUniforms['rayleigh'].value = 0.1;
  skyUniforms['mieCoefficient'].value = 0.00007;
  skyUniforms['mieDirectionalG'].value = 0.8;

  const parameters = {
    elevation: 90,
    azimuth: 180,
  };

  const phi = MathUtils.degToRad(90 - parameters.elevation);
  const theta = MathUtils.degToRad(parameters.azimuth);

  sun.position.setFromSphericalCoords(50, phi, theta);

  skyUniforms['sunPosition'].value.copy(sun.position);

  // ambient light
  const ambientLight = new AmbientLight();
  ambientLight.intensity = 2;
  scene.add(ambientLight);

  const camera = new PerspectiveCamera(75, 1, 0.01, 100);
  camera.position.z = 2;
  camera.position.y = 1;

  // physics
  const gravity = { x: 0.0, y: -9.81, z: 0.0 };
  const world = new RAPIER.World(gravity);

  scene.background = new Color('gray');

  // input system
  {
    ecs.addSystem(new ControllerGamepadSystem(controllers));
    ecs.addSystem(new ControllerVisibilitySystem(controllers));
    ecs.addSystem(new ControllerTransformSystem(controllers));
  }

  // logic systems
  {
    ecs.addSystem(new GameModelUpdateSystem());
    ecs.addSystem(new RoadSegmentUpdateSystem());
    ecs.addSystem(new RoadBarrierUpdateSystem());
    ecs.addSystem(new EnemyPositionUpdateSystem());
    ecs.addSystem(new EnemyAnimationUpdateSystem());

    ecs.addSystem(new ClosestBarrierPointerUpdateSystem());
    ecs.addSystem(new ClosestBarrierCountUpdateSystem());
    ecs.addSystem(new ClosestBarrierAttemptsUpdateSystem());

    ecs.addSystem(new BulletSpawnSystem());
    ecs.addSystem(new DestroyCountdownSystem());
  }

  // engine system
  {
    ecs.addSystem(new TurntableCameraSystem());

    // initialize systems
    ecs.addSystem(new ViewAddSystem());
    ecs.addSystem(new ColliderAddSystem());
    ecs.addSystem(new InitFinishSystem());

    // world update systems
    ecs.addSystem(new PhysicsSystem());
    ecs.addSystem(new ColliderTransformSystem());
    ecs.addSystem(new ViewTransformSystem());
    ecs.addSystem(new ViewVisibilitySystem());
    ecs.addSystem(new TextUpdateSystem());

    // destroy systems
    ecs.addSystem(new ViewRemoveSystem());
    ecs.addSystem(new ColliderRemoveSystem(world));
    ecs.addSystem(new EntityDestroySystem());

    // render system
    ecs.addSystem(new CanvasResizeSystem());
    ecs.addSystem(new RenderSystem());
  }

  // entities

  ecs.addEntity(canvasSize());
  ecs.addEntity(update());
  ecs.addEntity(closestBarrierCount());
  ecs.addEntity(closestBarrierAttempts());

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

  // ecs.addEntity(cuboid(RAPIER, new Vector3(-0.5, 0.5, -3), 1, 1, 1));
  // ecs.addEntity(cuboid(RAPIER, new Vector3(0.5, 0.5, -3), 1, 1, 1));
  // ecs.addEntity(cuboid(RAPIER, new Vector3(0.0, 1.5, -3), 1, 1, 1));

  const gameState = new GameState(
    scene,
    camera,
    world,
    renderer,
    RAPIER,
    assets,
    gameModel
  );

  document.body.appendChild(VRButton.createButton(renderer));

  Time.init();

  renderer.setAnimationLoop(() => {
    ecs.update(gameState);

    Time.update();
  });
});

const createRenderer = () => {
  const renderer = new WebGLRenderer();
  renderer.setPixelRatio(window.devicePixelRatio);

  document.getElementById('app')!.appendChild(renderer.domElement);

  return renderer;
};
