export class FadeInOutAnimator {
  private animationDuration: number;
  private currentOpacity: number;
  private isFadingIn: boolean;
  private isFadingOut: boolean;
  private elapsed: number;

  constructor(animationDuration: number, currentOpacity = 1) {
    this.animationDuration = animationDuration;
    this.currentOpacity = currentOpacity;
    this.isFadingIn = false;
    this.isFadingOut = false;
    this.elapsed = 0;
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
      this.elapsed += delta;
      const fraction = this.elapsed / this.animationDuration;
      this.currentOpacity = Math.min(1, fraction);

      if (this.currentOpacity === 1) {
        this.isFadingIn = false;
      }
    } else if (this.isFadingOut) {
      this.elapsed += delta;
      const fraction = this.elapsed / this.animationDuration;
      this.currentOpacity = Math.max(0, 1 - fraction);

      if (this.currentOpacity === 0) {
        this.isFadingOut = false;
      }
    }
  }

  getCurrentOpacity() {
    return this.currentOpacity;
  }
}
