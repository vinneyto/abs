import { ControllerComponent } from '../components';
import { component } from '@abs/core';

export function controller(index: number) {
  return [component(ControllerComponent).assign({ index })];
}
