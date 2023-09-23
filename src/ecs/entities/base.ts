import { Quaternion, Vector3 } from 'three';
import {
  LifeCircleComponent,
  TransformComponent,
  MeshComponent,
  Meshes,
  VisibilityComponent,
} from '../components';
import { component } from '../ecs';

export interface ViewDescriptor {
  position?: Vector3;
  quaternion?: Quaternion;
  scale?: Vector3;
  mesh?: Meshes;
  visible?: boolean;
  castShadow?: boolean;
  receiveShadow?: boolean;
}

export function base(dsc: ViewDescriptor) {
  return [
    component(LifeCircleComponent),
    component(VisibilityComponent).assign({ visible: dsc.visible }),
    component(TransformComponent).assign({
      position: dsc.position,
      quaternion: dsc.quaternion,
      scale: dsc.scale,
    }),
    component(MeshComponent).assign({
      mesh: dsc.mesh,
      castShadow: dsc.castShadow,
      receiveShadow: dsc.receiveShadow,
    }),
  ];
}
