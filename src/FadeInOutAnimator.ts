import { Mesh, Object3D } from 'three';

export class FadeInOutAnimator {
  private model: Object3D;
  private animationDuration: number;
  private currentOpacity: number;
  private isFadingIn: boolean;
  private isFadingOut: boolean;
  private elapsed: number;

  constructor(model: Object3D, animationDuration: number, currentOpacity = 1) {
    this.model = model;
    this.animationDuration = animationDuration;
    this.currentOpacity = currentOpacity;
    this.isFadingIn = false;
    this.isFadingOut = false;
    this.elapsed = 0;

    this.setModelOpacity(this.currentOpacity);
    this.model.visible = currentOpacity !== 0;
  }

  setModelOpacity(opacity: number) {
    this.model.traverse(object => {
      if (object instanceof Mesh && object.material) {
        object.material.transparent = true;
        object.material.opacity = opacity;
      }
    });
  }

  fadeIn() {
    this.isFadingIn = true;
    this.isFadingOut = false;
    this.elapsed = 0;
  }

  fadeOut() {
    this.isFadingIn = false;
    this.isFadingOut = true;
    this.elapsed = 0;
  }

  update(delta: number) {
    if (this.isFadingIn) {
      this.model.visible = true;
      this.elapsed += delta;
      const fraction = this.elapsed / this.animationDuration;
      this.currentOpacity = Math.min(1, fraction);

      this.setModelOpacity(this.currentOpacity);

      if (this.currentOpacity === 1) {
        this.isFadingIn = false;
      }
    } else if (this.isFadingOut) {
      this.elapsed += delta;
      const fraction = this.elapsed / this.animationDuration;
      this.currentOpacity = Math.max(0, 1 - fraction);

      this.setModelOpacity(this.currentOpacity);

      if (this.currentOpacity === 0) {
        this.isFadingOut = false;
        this.model.visible = false;
      }
    }
  }
}
