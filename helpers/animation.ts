import * as THREE from "three"

export const initializeIcosahedron = (): void => {
  console.log("initializing animation...")
  const scene = new THREE.Scene();
  const canvas = document.getElementById("globecanvas") as HTMLCanvasElement

  let width = 850
  let height = 850

  const camera = new THREE.PerspectiveCamera(55, width / height, 0.1, 1000);

  const renderer = new THREE.WebGLRenderer({
    alpha: true,
    antialias: true,
    canvas
  });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setClearColor(0x000000, 0); //default
  renderer.setSize(width, height);
  document.body.appendChild(renderer.domElement);

  const light = new THREE.PointLight(0xcccccc, 1, 100);
  light.position.set(-5, 5, 5);
  scene.add(light);

  const geo = new THREE.IcosahedronGeometry(2.1, 2);

  const material = new THREE.MeshBasicMaterial({
    color: 0xaaaaaa,
    wireframe: true,
    // wireframeLinewidth: 3
  });

  const wireframe = new THREE.Mesh(geo, material);
  wireframe.rotation.x = 0.2;

  scene.add(wireframe);

  camera.position.z = 5;

  function animate() {
    requestAnimationFrame(animate);

    wireframe.rotation.y += 0.002;
    wireframe.rotation.z += 0.002;

    renderer.render(scene, camera);
  }
  animate();
  console.log("done!")
}
