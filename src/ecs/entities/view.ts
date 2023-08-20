import { Object3D, Quaternion, Vector3 } from 'three';
import {
  LifeCircleComponent,
  TransformComponent,
  ViewComponent,
  VisibilityComponent,
} from '../components';
import { component } from '../ecs';

export interface ViewDescriptor {
  position?: Vector3;
  quaternion?: Quaternion;
  scale?: Vector3;
  view?: Object3D;
  addTo?: string;
  visible?: boolean;
  castShadow?: boolean;
  receiveShadow?: boolean;
}

export function view(dsc: ViewDescriptor) {
  return [
    component(LifeCircleComponent),
    component(VisibilityComponent).assign({ visible: dsc.visible }),
    component(TransformComponent).assign({
      position: dsc.position,
      quaternion: dsc.quaternion,
      scale: dsc.scale,
    }),
    component(ViewComponent).assign({
      view: dsc.view,
      addTo: dsc.addTo,
      castShadow: dsc.castShadow,
      receiveShadow: dsc.receiveShadow,
    }),
  ];
}
