import { component } from '@abs/core';
import {
  ClosestBarrierAttemptsComponent,
  ClosestBarrierPointerComponent,
} from '../components';
import { Vector2 } from 'three';
import { text } from './text';
import { BARRIER_WIDTH } from '../../Assets';

export function closestBarrierAttempts() {
  return [
    ...text(),
    component(ClosestBarrierPointerComponent).assign({
      pan: new Vector2(BARRIER_WIDTH / 2 - 0.3, 1.5),
    }),
    component(ClosestBarrierAttemptsComponent),
  ];
}
