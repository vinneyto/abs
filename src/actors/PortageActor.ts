import {
  Mesh,
  MeshStandardMaterial,
  Object3D,
  Sphere,
  SphereGeometry,
  Vector3,
} from 'three';
import { Actor } from '.';
import { ControllerSelectEvent } from '../types';
import { Context } from '../Context';

export class PortageActor extends Actor {
  private mesh: Mesh;
  private material: MeshStandardMaterial;
  private sphere: Sphere;
  private currentController?: Object3D;
  private initialControllerPosition = new Vector3();
  private initialPortagePosition = new Vector3();
  private controllerDelta = new Vector3();

  constructor(context: Context) {
    super(context);

    this.material = new MeshStandardMaterial({
      color: 'white',
      transparent: true,
      opacity: 0.5,
    });

    this.sphere = new Sphere(new Vector3(), 0.1);

    this.mesh = new Mesh(new SphereGeometry(this.sphere.radius), this.material);

    this.add(this.mesh);

    this.addControllersListeners();
  }

  private addControllersListeners() {
    for (let i = 0; i < 2; i++) {
      const ctrl = this.context.renderer.xr.getController(i);

      ctrl.addEventListener('selectstart', this.onSelect);
      ctrl.addEventListener('selectend', this.onDeselect);
    }
  }

  private removeControllersListeners() {
    for (let i = 0; i < 2; i++) {
      const ctrl = this.context.renderer.xr.getController(i);

      ctrl.removeEventListener('selectstart', this.onSelect);
      ctrl.removeEventListener('selectend', this.onDeselect);
    }
  }

  onSelect = (event: ControllerSelectEvent) => {
    if (this.currentController) {
      return;
    }

    if (this.sphere.containsPoint(event.target.position)) {
      this.currentController = event.target;
      this.initialControllerPosition.copy(this.currentController.position);
      this.initialPortagePosition.copy(this.position);
    }
  };

  onDeselect = (event: ControllerSelectEvent) => {
    if (this.currentController === event.target) {
      this.currentController = undefined;
    }
  };

  update() {
    this.sphere.center.copy(this.position);
    this.material.color.setColorName('white');

    for (let i = 0; i < 2; i++) {
      const ctrl = this.context.renderer.xr.getController(i);

      if (this.sphere.containsPoint(ctrl.position)) {
        this.material.color.setColorName('yellow');
      }

      if (this.currentController === ctrl) {
        this.controllerDelta.subVectors(
          this.currentController.position,
          this.initialControllerPosition,
        );

        this.position.addVectors(
          this.initialPortagePosition,
          this.controllerDelta,
        );
      }
    }
  }

  dispose() {
    this.removeControllersListeners();
  }
}
