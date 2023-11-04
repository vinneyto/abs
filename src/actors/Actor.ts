import { Object3D, Object3DEventMap } from 'three';
import { Context } from '../Context';

export class Actor<
  TEventMap extends Object3DEventMap = Object3DEventMap,
> extends Object3D<TEventMap> {
  constructor(protected readonly context: Context) {
    super();
  }

  // @ts-ignore
  update(delta: number) {}
  postUpdate() {}
}
