import { component } from '@abs/core';
import {
  ClosestBarrierCountComponent,
  ClosestBarrierPointerComponent,
} from '../components';
import { Vector2 } from 'three';
import { text } from './text';

export function closestBarrierCount() {
  return [
    ...text(),
    component(ClosestBarrierPointerComponent).assign({
      pan: new Vector2(0, 1.5),
    }),
    component(ClosestBarrierCountComponent),
  ];
}
