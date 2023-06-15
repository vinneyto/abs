import { WebGLRenderer } from 'three';
import { ECS } from './ecs/ecs';
import { CanvasResizeSystem } from './ecs/systems/CanvasResizeSystem';
import { SetRendererSystem } from './ecs/systems/SetRendererSystem';
import { canvasSize } from './ecs/entities/canvasSize';
import 'normalize.css';
import './style.css';

import('@dimforge/rapier3d').then(_RAPIER => {
  const renderer = createRenderer();
  const ecs = new ECS();

  ecs.addSystem(new SetRendererSystem(renderer));
  ecs.addSystem(new CanvasResizeSystem());

  ecs.addEntity(canvasSize());

  const update = () => {
    ecs.update();

    requestAnimationFrame(update);
  };

  requestAnimationFrame(update);
});

const createRenderer = () => {
  const renderer = new WebGLRenderer();
  renderer.setPixelRatio(window.devicePixelRatio);

  document.getElementById('app')!.appendChild(renderer.domElement);

  return renderer;
};
