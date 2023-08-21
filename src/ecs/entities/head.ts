import { Mesh, MeshPhysicalMaterial, SphereGeometry, Vector3 } from 'three';
import { RapierModule } from '../../types';
import { view } from './view';
import { component } from '../ecs';
import { HeadComponent } from '../components';

const HEAD_RADIUS = 0.15;

export function head(RAPIER: RapierModule) {
  return [
    ...view({
      position: new Vector3(0.0, 1.2, -2),
      view: new Mesh(
        new SphereGeometry(HEAD_RADIUS, 32, 32),
        new MeshPhysicalMaterial({ color: 'yellow' })
      ),
    }),
    component(HeadComponent).assign({ shape: new RAPIER.Ball(HEAD_RADIUS) }),
  ];
}
