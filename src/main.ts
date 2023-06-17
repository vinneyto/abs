import {
  Color,
  DoubleSide,
  Mesh,
  MeshBasicMaterial,
  PerspectiveCamera,
  PlaneGeometry,
  Scene,
  SphereGeometry,
  Vector3,
  WebGLRenderer,
} from 'three';
import { VRButton } from 'three/addons/webxr/VRButton.js';
import { ECS } from './ecs/ecs';
import { CanvasResizeSystem } from './ecs/systems/CanvasResizeSystem';
import { SetRendererSystem } from './ecs/systems/SetRendererSystem';
import { canvasSize } from './ecs/entities/canvasSize';
import 'normalize.css';
import './style.css';
import { ViewLifeCircleSystem } from './ecs/systems/ViewLifeCircleSystem';
import { EntityDestroySystem as EntityDestroySystem } from './ecs/systems/EntityDestroySystem';
import { ViewTransformSystem } from './ecs/systems/ViewTransformSystem';
import { view } from './ecs/entities/view';

import('@dimforge/rapier3d').then(_RAPIER => {
  const renderer = createRenderer();
  const ecs = new ECS();

  renderer.xr.enabled = true;

  const scene = new Scene();
  const camera = new PerspectiveCamera(75, 1, 0.01, 100);
  camera.position.z = 2;
  camera.position.y = 1;

  scene.background = new Color('gray');

  ecs.addSystem(new SetRendererSystem(renderer));
  ecs.addSystem(new CanvasResizeSystem());
  ecs.addSystem(new ViewLifeCircleSystem(scene));
  ecs.addSystem(new ViewTransformSystem());
  ecs.addSystem(new EntityDestroySystem());

  ecs.addEntity(canvasSize());

  ecs.addEntity(
    view({
      position: new Vector3(0, 1, 0),
      view: new Mesh(
        new SphereGeometry(0.2, 32, 32),
        new MeshBasicMaterial({ color: 'red' })
      ),
    })
  );

  ecs.addEntity(
    view({
      view: new Mesh(
        new PlaneGeometry(2, 2).rotateX(-Math.PI / 2),
        new MeshBasicMaterial({ color: 'green' })
      ),
    })
  );

  document.body.appendChild(VRButton.createButton(renderer));

  renderer.setAnimationLoop(() => {
    ecs.update();

    camera.aspect = renderer.domElement.width / renderer.domElement.height;
    camera.updateProjectionMatrix();

    renderer.render(scene, camera);
  });
});

const createRenderer = () => {
  const renderer = new WebGLRenderer();
  renderer.setPixelRatio(window.devicePixelRatio);

  document.getElementById('app')!.appendChild(renderer.domElement);

  return renderer;
};
