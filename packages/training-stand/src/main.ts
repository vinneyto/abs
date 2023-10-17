import {
  AmbientLight,
  BackSide,
  Color,
  DirectionalLight,
  DoubleSide,
  Matrix4,
  Mesh,
  MeshBasicMaterial,
  MeshStandardMaterial,
  Object3D,
  PerspectiveCamera,
  PlaneGeometry,
  Quaternion,
  Scene,
  SphereGeometry,
  Vector2,
  Vector3,
  WebGLRenderer,
} from 'three';
import './style.css';
import { VRButton } from 'three/examples/jsm/webxr/VRButton.js';
import { XRControllerModelFactory } from 'three/examples/jsm/webxr/XRControllerModelFactory.js';
import throttle from 'lodash/throttle';

const createRenderer = () => {
  const renderer = new WebGLRenderer();
  renderer.setPixelRatio(window.devicePixelRatio);

  document.getElementById('app')!.appendChild(renderer.domElement);
  document.getElementById('app')!.appendChild(VRButton.createButton(renderer));

  return renderer;
};

interface Transform {
  position: { x: number; y: number; z: number };
  quaternion: { x: number; y: number; z: number; w: number };
}

interface Head {
  pitch: Number;
  y: Number;
}

interface TrainingData {
  trainingSession: string;
  bottom: boolean;
  head: Head;
  leftHandCameraLocal: Transform;
  rightHandCameraLocal: Transform;
}

interface TrainingSession {
  _id: string;
  createdAt: string;
}

(async () => {
  let sessionCache: Promise<TrainingSession> | undefined;

  const getSession = async (): Promise<TrainingSession> => {
    if (sessionCache === undefined) {
      sessionCache = createSession();
    }
    return sessionCache;
  };

  const scene = new Scene();
  const camera = new PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000,
  );
  const renderer = createRenderer();
  renderer.xr.enabled = true;

  // Floor
  const floorDefaultColor = new Color(0x00ff00);
  const floorGeometry = new PlaneGeometry(10, 10);
  const floorMaterial = new MeshStandardMaterial({
    color: floorDefaultColor,
    side: DoubleSide,
  });
  const floor = new Mesh(floorGeometry, floorMaterial);
  floor.rotation.x = Math.PI / 2;
  scene.add(floor);

  const skyDefaultColor = new Color(0x87cefa);

  // Sky (as a large sphere)
  const skyGeometry = new SphereGeometry(50, 32, 32);
  const skyMaterial = new MeshBasicMaterial({
    color: skyDefaultColor,
    side: BackSide,
  });
  const sky = new Mesh(skyGeometry, skyMaterial);
  scene.add(sky);

  const bottoMarker = new Mesh(
    new SphereGeometry(5),
    new MeshBasicMaterial({ color: 'red' }),
  );
  bottoMarker.position.set(0, 10, -20);
  bottoMarker.visible = false;

  scene.add(bottoMarker);

  const topMarker = new Mesh(
    new SphereGeometry(5),
    new MeshBasicMaterial({ color: 'green' }),
  );
  topMarker.position.set(0, 10, -20);
  topMarker.visible = false;

  scene.add(topMarker);

  // sun
  const directionalLight = new DirectionalLight(0xffffff, 1);
  directionalLight.position.set(0, 1, 1).normalize();
  scene.add(directionalLight);

  // Создаем окружающий свет
  const ambientLight = new AmbientLight(0x404040, 1.5); // soft white light
  scene.add(ambientLight);

  // Controllers
  const controllerGrip1 = renderer.xr.getControllerGrip(0);
  scene.add(controllerGrip1);

  const controllerGrip2 = renderer.xr.getControllerGrip(1);
  scene.add(controllerGrip2);

  const controllerModelFactory = new XRControllerModelFactory();

  controllerGrip1.add(
    controllerModelFactory.createControllerModel(controllerGrip1),
  );
  controllerGrip2.add(
    controllerModelFactory.createControllerModel(controllerGrip2),
  );

  camera.position.y = 1.6; // Approximate height of the camera (eye level)

  const size = new Vector2();

  const getGripCameraLocalTransform = (
    grip: Object3D,
    cameraInverse: Matrix4,
  ) => {
    const cameraLocalMatrix = new Matrix4().multiplyMatrices(
      cameraInverse,
      grip.matrixWorld,
    );

    const position = new Vector3();
    const quaternion = new Quaternion();
    const scale = new Vector3();

    cameraLocalMatrix.decompose(position, quaternion, scale);

    return {
      position: { x: position.x, y: position.y, z: position.z },
      quaternion: {
        x: quaternion.x,
        y: quaternion.y,
        z: quaternion.z,
        w: quaternion.w,
      },
    };
  };

  const sendTrainingData = throttle(async (bottom: boolean) => {
    const camera = renderer.xr.getCamera();

    camera.updateMatrixWorld();
    controllerGrip1.updateMatrixWorld();
    controllerGrip2.updateMatrixWorld();

    const cameraInverse = camera.matrixWorld.clone().invert();

    const cameraLocalGrip1 = getGripCameraLocalTransform(
      controllerGrip1,
      cameraInverse,
    );
    const cameraLocalGrip2 = getGripCameraLocalTransform(
      controllerGrip2,
      cameraInverse,
    );

    const up = new Vector3(0, 1, 0);
    const direction = up.clone().applyQuaternion(camera.quaternion);

    const pitch = direction.dot(up);

    const session = await getSession();

    const response = await createTrainingData({
      trainingSession: session._id,
      bottom,
      head: { pitch, y: camera.position.y },
      leftHandCameraLocal: cameraLocalGrip2,
      rightHandCameraLocal: cameraLocalGrip1,
    });

    console.log(response.status);
  }, 200);

  const animate = function () {
    renderer.setAnimationLoop(() => {
      const session = renderer.xr.getSession();

      if (session) {
        topMarker.visible = false;
        bottoMarker.visible = false;

        for (const inputSource of session.inputSources) {
          if (inputSource.gamepad && inputSource.gamepad.buttons[0].pressed) {
            if (inputSource.handedness === 'left') {
              topMarker.visible = true;

              sendTrainingData(false);
            } else if (inputSource.handedness === 'right') {
              bottoMarker.visible = true;

              sendTrainingData(true);
            }
          }
        }
      }

      if (window.devicePixelRatio !== renderer.getPixelRatio()) {
        renderer.setPixelRatio(window.devicePixelRatio);
      }

      const width = renderer.domElement.offsetWidth;
      const height = renderer.domElement.offsetHeight;

      if (size.width !== width || size.height !== height) {
        renderer.setSize(width, height, false);
        size.set(width, height);

        console.log(size);
      }

      renderer.render(scene, camera);
    });
  };

  animate();
})();

async function createSession(): Promise<TrainingSession> {
  const response = await fetch('/api/training-session', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return response.json();
}

async function createTrainingData(data: TrainingData): Promise<Response> {
  return await fetch('/api/training-data', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
}
