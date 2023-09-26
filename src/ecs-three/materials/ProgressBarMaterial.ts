import { Shader, SpriteMaterial, IUniform, Color } from 'three';

export class ProgressBarMaterial extends SpriteMaterial {
  private uniforms: Record<string, IUniform> = {};

  constructor(backColor: Color, progressColor: Color) {
    super({ depthWrite: false, depthTest: false });

    this.uniforms = {
      backColor: { value: backColor },
      progressColor: { value: progressColor },
      progress: { value: 1 },
    };
  }

  onBeforeCompile(shader: Shader): void {
    Object.assign(shader.uniforms, this.uniforms);

    const [header, main] = splitShader(shader.fragmentShader);

    shader.vertexShader = ['#define USE_UV', shader.vertexShader].join('\n');

    shader.fragmentShader = [
      '#define USE_UV',
      header,
      'uniform vec3 backColor;',
      'uniform vec3 progressColor;',
      'uniform float progress;',
      'void main() {',
      main,
      'gl_FragColor.xyz = mix(progressColor, backColor, step(progress, vUv.x));',
      '}',
    ].join('\n');
  }

  setProgress(value: number) {
    this.uniforms.progress.value = Math.max(0, Math.min(value, 1));
  }
}

function splitShader(shaderSource: string): [string, string] {
  const mainFunctionStart = shaderSource.indexOf('void main()');
  if (mainFunctionStart === -1) {
    throw new Error('No main function found in the shader source.');
  }

  const header = shaderSource.substring(0, mainFunctionStart);
  const mainBodyStart = shaderSource.indexOf('{', mainFunctionStart) + 1; // +1 to exclude the opening brace
  const mainBodyEnd = shaderSource.lastIndexOf('}');

  if (mainBodyStart === -1 || mainBodyEnd === -1) {
    throw new Error('Could not determine the main function body.');
  }

  const mainBody = shaderSource.substring(mainBodyStart, mainBodyEnd); // exclude the closing brace

  return [header, mainBody.trim()]; // trim to remove extra whitespaces
}
