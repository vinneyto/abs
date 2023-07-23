import { Object3D, Quaternion, Vector3 } from 'three';
import { LifeCircleComponent } from '../components/LifeCircleComponent';
import { TransformComponent } from '../components/TransformComponent';
import { ViewComponent } from '../components/ViewComponent';
import { component } from '../ecs';
import { VisibilityComponent } from '../components/VisibilityComponent';

export interface ViewDerscriptor {
  position?: Vector3;
  quaternion?: Quaternion;
  scale?: Vector3;
  view?: Object3D;
  addTo?: string;
  visible?: boolean;
  castShadow?: boolean;
  receiveShadow?: boolean;
}

export function view(dsc: ViewDerscriptor) {
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
