import { AnimationAction, AnimationMixer } from 'three';
import { Facade } from '../Facade';
import { Actor } from './Actor';
import { FadeInOutAnimator } from '../FadeInOutAnimator';

export class SitupsTrainerActor extends Actor {
  private mixer: AnimationMixer;
  private situpsAction: AnimationAction;
  private fadeInOutAnimator: FadeInOutAnimator;

  constructor() {
    super();

    const situps = Facade.assets.situps;

    this.add(situps);

    const mixer = new AnimationMixer(situps);
    const fadeInOutAnimator = new FadeInOutAnimator(situps, 2, 0);

    this.scale.multiplyScalar(0.01);

    this.situpsAction = mixer.clipAction(situps.animations[0]);
    this.fadeInOutAnimator = fadeInOutAnimator;
    this.mixer = mixer;
  }

  update(delta: number) {
    this.mixer.update(delta);
    this.fadeInOutAnimator.update(delta);
  }

  play() {
    this.situpsAction.play();
  }

  stop() {
    this.situpsAction.stop();
  }

  fadeIn() {
    this.fadeInOutAnimator.fadeIn();
  }

  hide() {
    this.visible = false;
  }
}
