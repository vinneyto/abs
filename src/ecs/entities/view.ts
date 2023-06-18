import { Object3D, Quaternion, Vector3 } from 'three';
import { LifeCircleComponent } from '../components/LifeCircleComponent';
import { PositionComponent } from '../components/PositionComponent';
import { RotationComponent } from '../components/RotationComponent';
import { ViewComponent } from '../components/ViewComponent';
import { component } from '../ecs';

export interface ViewDerscriptor {
  position?: Vector3;
  quaternion?: Quaternion;
  view?: Object3D;
}

export function view(dsc: ViewDerscriptor) {
  return [
    component(LifeCircleComponent),
    component(PositionComponent).assign({ position: dsc.position }),
    component(RotationComponent).assign({ quaternion: dsc.quaternion }),
    component(ViewComponent).assign({ view: dsc.view }),
  ];
}
