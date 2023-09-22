import { Object3D, Quaternion, Vector3 } from 'three';
import {
  LifeCircleComponent,
  PositionComponent,
  RotationComponent,
  ViewComponent,
  VisibilityComponent,
} from '../components';
import { component } from '@abs/core';

export interface ViewDescriptor {
  position?: Vector3;
  quaternion?: Quaternion;
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
    component(PositionComponent).assign({ position: dsc.position }),
    component(RotationComponent).assign({ quaternion: dsc.quaternion }),
    component(ViewComponent).assign({
      view: dsc.view,
      addTo: dsc.addTo,
      castShadow: dsc.castShadow,
      receiveShadow: dsc.receiveShadow,
    }),
  ];
}
