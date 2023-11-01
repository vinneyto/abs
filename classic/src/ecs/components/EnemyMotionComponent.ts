import { CatmullRomCurve3, Vector3, Matrix4, Sphere } from 'three';
import { Component } from '../ecs';

export class EnemyMotionComponent extends Component {
  public curve!: CatmullRomCurve3;
  public t: number = 999;
  public speed: number = 0.1;
  public points: Vector3[] = [];
  public rotationMatrix = new Matrix4();
  public arial = new Sphere(new Vector3(0, 5, -10), 3);
}
