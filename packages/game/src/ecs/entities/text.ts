// @ts-ignore
import { Text } from 'troika-three-text';
import { view } from './view';
import { component } from '@abs/core';
import { TextComponent } from '../components';

export function text(text = '') {
  return [
    ...view({
      view: new Text(),
    }),
    component(TextComponent).assign({ text }),
  ];
}
