import { component } from '../ecs';
import {
  ClosestBarrierCountComponent,
  ClosestBarrierPointerComponent,
} from '../components';
import { Vector2 } from 'three';
import { text } from './text';

export function closestBarrierLabel() {
  return [
    ...text(),
    component(ClosestBarrierPointerComponent).assign({
      pan: new Vector2(0, 1.5),
    }),
    component(ClosestBarrierCountComponent),
  ];
}
