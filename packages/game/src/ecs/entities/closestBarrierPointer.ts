import { ConeGeometry, Mesh, MeshBasicMaterial } from 'three';
import { view } from './view';
import { component } from '../ecs';
import { ClosestBarrierPointerComponent } from '../components';

export function closestBarrierPointer() {
  return [
    ...view({
      view: new Mesh(
        new ConeGeometry(0.3, 1).rotateX(Math.PI),
        new MeshBasicMaterial({ color: 'green' })
      ),
    }),
    component(ClosestBarrierPointerComponent),
  ];
}
