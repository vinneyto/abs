import { Mesh, MeshPhysicalMaterial, SphereGeometry, Vector3 } from 'three';
import { RapierModule } from '../../types';
import { view } from './view';
import { component } from '../ecs';
import { HeadComponent } from '../components';

export function head(RAPIER: RapierModule, position: Vector3, radius: number) {
  return [
    ...view({
      position,
      view: new Mesh(
        new SphereGeometry(radius, 32, 32),
        new MeshPhysicalMaterial({ color: 'yellow' })
      ),
    }),
    component(HeadComponent).assign({ shape: new RAPIER.Ball(radius) }),
  ];
}
