import { Assets } from '../../Assets';
import { bulletSpawn } from './bulletSpawn';
import { controller } from './controller';
import { view } from './view';

export function gun(assets: Assets, handIndex: number) {
  return [
    ...view({
      view: assets.gun.model.clone(),
    }),
    ...controller(handIndex),
    ...bulletSpawn(),
  ];
}
