import {
  CatmullRomCurve3,
  Euler,
  Matrix4,
  Quaternion,
  Sphere,
  Vector3,
} from 'three';
import { GameState } from '../../GameState';
import { EnemyMotionComponent, TransformComponent } from '../../components';
import { System } from '../../ecs';
import { Time } from '../../../Time';

const up = new Vector3(0, 1, 0);
const quat90x = new Quaternion().setFromEuler(new Euler(-Math.PI / 2, 0, 0));
const rotationMatrix = new Matrix4();

export class EnemyMotionSystem extends System<GameState> {
  componentsRequired = [EnemyMotionComponent, TransformComponent];

  public update(entity: number, state: GameState): void {
    const components = this.ecs.getComponents(entity);

    const motion = components.get(EnemyMotionComponent);
    const { position, quaternion } = components.get(TransformComponent);

    motion.t += motion.speed * Time.deltaSeconds();

    if (motion.t > 1) {
      motion.t = 0;
      motion.curve = generateNewCurve(position, motion.arial);
    }

    motion.curve.getPoint(motion.t, position);

    rotationMatrix.lookAt(state.gameModel.getHeadPosition(), position, up);
    quaternion.setFromRotationMatrix(rotationMatrix).multiply(quat90x);
  }
}

function generateNewCurve(position: Vector3, arial: Sphere) {
  const points: Vector3[] = [];

  points.push(position.clone());
  for (let i = 0; i < 3; i++) {
    points.push(getRandomPointInSphere(arial));
  }
  points.push(position.clone());

  return new CatmullRomCurve3(points);
}

function getRandomPointInSphere(arial: Sphere): Vector3 {
  const theta = 2 * Math.PI * Math.random();
  const phi = Math.acos(2 * Math.random() - 1);
  const r = arial.radius * Math.cbrt(Math.random());

  const x = r * Math.sin(phi) * Math.cos(theta);
  const y = r * Math.sin(phi) * Math.sin(theta);
  const z = r * Math.cos(phi);

  return new Vector3(x, y, z).add(arial.center);
}
