import { bulletSpawn } from './bulletSpawn';
import { controller } from './controller';
import { base } from './base';
import { Meshes } from '../components';

export function gun(handIndex: number) {
  return [
    ...base({
      mesh: Meshes.Gun,
    }),
    ...controller(handIndex),
    ...bulletSpawn(),
  ];
}
