import { Object3D, Quaternion, Vector3 } from 'three';
import {
  LifeCircleComponent,
  PositionComponent,
  RotationComponent,
  ViewComponent,
  ViewType,
  VisibilityComponent,
} from '../components';
import { component } from '@abs/core';

export interface ViewDescriptor {
  position?: Vector3;
  quaternion?: Quaternion;
  viewType?: ViewType;
  visible?: boolean;
  castShadow?: boolean;
  receiveShadow?: boolean;
}

export function base(dsc: ViewDescriptor) {
  return [
    component(LifeCircleComponent),
    component(VisibilityComponent).assign({ visible: dsc.visible }),
    component(PositionComponent).assign({ position: dsc.position }),
    component(RotationComponent).assign({ quaternion: dsc.quaternion }),
    component(ViewComponent).assign({
      type: dsc.viewType,
      castShadow: dsc.castShadow,
      receiveShadow: dsc.receiveShadow,
    }),
  ];
}
