import { base } from './base';
import { component } from '../ecs';
import { TextComponent, Meshes } from '../components';

export function text(text = '') {
  return [
    ...base({
      mesh: Meshes.Text,
    }),
    component(TextComponent).assign({ text }),
  ];
}
