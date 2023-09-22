import { Quaternion } from 'three';
import { Component } from '@abs/core';

export class RotationComponent extends Component {
  quaternion = new Quaternion();
}
