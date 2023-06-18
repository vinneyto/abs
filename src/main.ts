import {
  AmbientLight,
  Color,
  DirectionalLight,
  Mesh,
  MeshPhysicalMaterial,
  PerspectiveCamera,
  PlaneGeometry,
  Scene,
  WebGLRenderer,
} from 'three';
import { VRButton } from 'three/addons/webxr/VRButton.js';
import { ECS, component } from './ecs/ecs';
import { CanvasResizeSystem } from './ecs/systems/CanvasResizeSystem';
import { SetRendererSystem } from './ecs/systems/SetRendererSystem';
import { canvasSize } from './ecs/entities/canvasSize';
import 'normalize.css';
import './style.css';
import { ViewAddSystem } from './ecs/systems/ViewAddSystem';
import { EntityDestroySystem as EntityDestroySystem } from './ecs/systems/EntityDestroySystem';
import { ViewTransformSystem } from './ecs/systems/ViewTransformSystem';
import { view } from './ecs/entities/view';
import { ViewRemoveSystem } from './ecs/systems/ViewRemoveSystem';
import { InitFinishSystem } from './ecs/systems/InitFinishSystem';
import { collider } from './ecs/entities/collider';
import { ColliderAddSystem } from './ecs/systems/ColliderAddSystem';
import { ColliderRemoveSystem } from './ecs/systems/ColliderRemoveSystem';
import { ColliderTransformSystem } from './ecs/systems/ColliderTransformSystem';
import { Time } from './Time';
import { DestroyCountdownSystem } from './ecs/systems/DestroyCountdownSystem';
import { BallSpawnSystem } from './ecs/systems/BallSpawnSystem';
import { BallSpawnComponent } from './ecs/components/BallSpawnComponent';
import { PhysicsSystem } from './ecs/systems/PhysicsSystem';
import { RenderSystem } from './ecs/systems/RenderSystem';
import { update } from './ecs/entities/update';

import('@dimforge/rapier3d').then(RAPIER => {
  const renderer = createRenderer();
  const ecs = new ECS();

  renderer.xr.enabled = true;

  const scene = new Scene();
  const sun = new DirectionalLight();
  sun.position.y = 20;
  sun.position.x = -10;
  scene.add(sun);

  const ambientLight = new AmbientLight();
  ambientLight.intensity = 0.1;
  scene.add(ambientLight);

  const camera = new PerspectiveCamera(75, 1, 0.01, 100);
  camera.position.z = 2;
  camera.position.y = 1;

  const gravity = { x: 0.0, y: -9.81, z: 0.0 };
  const world = new RAPIER.World(gravity);

  scene.background = new Color('gray');

  // service systems
  ecs.addSystem(new SetRendererSystem(renderer));
  ecs.addSystem(new CanvasResizeSystem());

  // logic systems
  ecs.addSystem(new BallSpawnSystem(RAPIER));
  ecs.addSystem(new DestroyCountdownSystem());

  // initialize systems
  ecs.addSystem(new ViewAddSystem(scene));
  ecs.addSystem(new ColliderAddSystem(world));
  ecs.addSystem(new InitFinishSystem());

  // world update systems
  ecs.addSystem(new PhysicsSystem(world));
  ecs.addSystem(new ColliderTransformSystem());
  ecs.addSystem(new ViewTransformSystem());

  // destroy systems
  ecs.addSystem(new ViewRemoveSystem(scene));
  ecs.addSystem(new ColliderRemoveSystem(world));
  ecs.addSystem(new EntityDestroySystem());

  // render system
  ecs.addSystem(new RenderSystem(renderer, scene, camera));

  ecs.addEntity(canvasSize());
  ecs.addEntity(update());

  ecs.addEntity([component(BallSpawnComponent)]);

  ecs.addEntity(
    view({
      view: new Mesh(
        new PlaneGeometry(6, 6).rotateX(-Math.PI / 2),
        new MeshPhysicalMaterial({ color: 'green' })
      ),
    }),
    collider(
      RAPIER.RigidBodyDesc.fixed(),
      RAPIER.ColliderDesc.cuboid(3, 0.1, 3)
    )
  );

  document.body.appendChild(VRButton.createButton(renderer));

  Time.init();

  renderer.setAnimationLoop(() => {
    ecs.update();

    Time.update();
  });
});

const createRenderer = () => {
  const renderer = new WebGLRenderer();
  renderer.setPixelRatio(window.devicePixelRatio);

  document.getElementById('app')!.appendChild(renderer.domElement);

  return renderer;
};
