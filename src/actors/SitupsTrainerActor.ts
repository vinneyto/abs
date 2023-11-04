import { AnimationAction, AnimationMixer } from 'three';
import { Context } from '../Context';
import { Actor } from './Actor';
import { FadeInOutAnimator } from '../FadeInOutAnimator';
import { setOpacity } from '../helpers';

export class SitupsTrainerActor extends Actor {
  private mixer: AnimationMixer;
  private situpsAction: AnimationAction;
  private fadeInOutAnimator: FadeInOutAnimator;
  private opacity = 1;

  constructor(context: Context) {
    super(context);

    const situps = context.assets.situps;

    this.add(situps);

    const mixer = new AnimationMixer(situps);
    const fadeInOutAnimator = new FadeInOutAnimator(1, 0);

    this.scale.multiplyScalar(0.01);

    this.situpsAction = mixer.clipAction(situps.animations[0]);
    this.fadeInOutAnimator = fadeInOutAnimator;
    this.mixer = mixer;
  }

  update(delta: number) {
    this.mixer.update(delta);
    this.fadeInOutAnimator.update(delta);

    const opacity = Math.min(
      this.fadeInOutAnimator.getCurrentOpacity(),
      this.opacity,
    );

    setOpacity(this, opacity);
  }

  play() {
    this.situpsAction.play();
  }

  stop() {
    this.situpsAction.stop();
  }

  fadeIn() {
    this.visible = true;
    this.fadeInOutAnimator.fadeIn();
  }

  hide() {
    this.visible = false;
  }

  getOpacity() {
    return this.opacity;
  }

  setOpacity() {
    return this.opacity;
  }
}
