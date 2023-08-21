import { view } from './view';
import { component } from '../ecs';
import {
  ClosestBarrierCountComponent,
  ClosestBarrierPointerComponent,
} from '../components';
// @ts-ignore
import { Text } from 'troika-three-text';
import { Vector2 } from 'three';

export function closestBarrierLabel() {
  const text = new Text();
  text.text = '0';
  text.fontSize = 0.9;
  text.position.z = -2;
  text.color = 0xff0000;
  text.sync();

  return [
    ...view({
      view: text,
    }),
    component(ClosestBarrierPointerComponent).assign({
      pan: new Vector2(-1.5, 3.7),
    }),
    component(ClosestBarrierCountComponent),
  ];
}
