import * as THREE from 'three';

// 1 - Scene creation
const scene = new THREE.Scene();
scene.background = new THREE.Color("#f0f0f0");

// 2 - Cube creation and add to the scene
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshLambertMaterial({ color: "#468585", emissive: "#468585" });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// 3 - Light creation
const light = new THREE.DirectionalLight(0x9cba6, 10);
light.position.set(1, 1, 1)
scene.add(light);

// 4 - Camera creation
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// 5 - Renderer creation
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// 6 - Animation
function animate() {
  requestAnimationFrame(animate);
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  renderer.render(scene, camera);
}

// 7 - Start animation
animate()
