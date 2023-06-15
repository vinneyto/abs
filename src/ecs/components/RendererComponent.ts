import { WebGLRenderer } from 'three';
import { Component } from '../ecs';

export class RendererComponent extends Component {
  public renderer!: WebGLRenderer;
}
