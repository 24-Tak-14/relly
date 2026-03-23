// File: frontend/public/unity_game/game.js

// This script contains the Three.js code for the 3D football game canvas.
// It sets up the scene, camera, and renderer, and creates a basic 3D football field.
// It will also handle basic user interaction to rotate the camera.

let scene, camera, renderer;
let controls;
let field, football;
let isDragging = false;
let previousMousePosition = {
    x: 0,
    y: 0
};

// Initial setup of the 3D environment
function init() {
    // Scene: The container for all objects, cameras, and lights
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0d1117);

    // Camera: Defines the view of the scene
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 5, 20); // Position the camera to get a good view of the field
    camera.lookAt(0, 0, 0);

    // Renderer: Displays the scene
    const container = document.getElementById('game-container');
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    // Add lighting to the scene
    const ambientLight = new THREE.AmbientLight(0x404040, 2);
    scene.add(ambientLight);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 10, 7.5);
    scene.add(directionalLight);

    // Create the football field
    createField();
    
    // Create the football
    createFootball();

    // Add event listeners for mouse interaction (to rotate the camera)
    window.addEventListener('mousedown', onMouseDown, false);
    window.addEventListener('mouseup', onMouseUp, false);
    window.addEventListener('mousemove', onMouseMove, false);
    window.addEventListener('resize', onWindowResize, false);
}

// Function to create the football field
function createField() {
    // Field ground
    const fieldGeometry = new THREE.PlaneGeometry(50, 100);
    const fieldMaterial = new THREE.MeshLambertMaterial({ color: 0x228B22 }); // Forest Green
    field = new THREE.Mesh(fieldGeometry, fieldMaterial);
    field.rotation.x = -Math.PI / 2; // Rotate to lie flat on the ground
    scene.add(field);

    // Add yard lines
    const lineMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const lineGeometry = new THREE.PlaneGeometry(0.2, 50);

    for (let i = -50; i <= 50; i += 5) {
        const line = new THREE.Mesh(lineGeometry, lineMaterial);
        line.position.z = i;
        line.rotation.x = -Math.PI / 2;
        scene.add(line);
    }

    // Add a center line
    const centerLineGeometry = new THREE.PlaneGeometry(0.5, 50);
    const centerLine = new THREE.Mesh(centerLineGeometry, lineMaterial);
    centerLine.rotation.x = -Math.PI / 2;
    scene.add(centerLine);
}

// Function to create a 3D football
function createFootball() {
    const geometry = new THREE.DodecahedronGeometry(1.5, 0);
    const material = new THREE.MeshStandardMaterial({ color: 0x8B4513, flatShading: true });
    football = new THREE.Mesh(geometry, material);
    
    // Add laces
    const laceMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const laceGeometry = new THREE.PlaneGeometry(0.2, 0.75);
    
    const lace1 = new THREE.Mesh(laceGeometry, laceMaterial);
    lace1.position.set(0, 1.5, 0);
    football.add(lace1);

    const lace2 = new THREE.Mesh(laceGeometry, laceMaterial);
    lace2.rotation.z = Math.PI / 2;
    lace2.position.set(0, 1.5, 0.5);
    football.add(lace2);
    
    scene.add(football);
}

// Event handlers for camera rotation
function onMouseDown(e) {
    isDragging = true;
    previousMousePosition.x = e.clientX;
    previousMousePosition.y = e.clientY;
}

function onMouseUp(e) {
    isDragging = false;
}

function onMouseMove(e) {
    if (!isDragging) return;

    const deltaX = e.clientX - previousMousePosition.x;
    const deltaY = e.clientY - previousMousePosition.y;

    const sensitivity = 0.01;
    const rotationX = deltaX * sensitivity;
    const rotationY = deltaY * sensitivity;

    // Apply rotation to the camera around the field's center
    const pivot = new THREE.Object3D();
    pivot.add(camera);
    scene.add(pivot);

    pivot.rotation.y += rotationX;
    pivot.rotation.x += rotationY;
    
    previousMousePosition.x = e.clientX;
    previousMousePosition.y = e.clientY;
}

// Handle window resize events
function onWindowResize() {
    const container = document.getElementById('game-container');
    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(container.clientWidth, container.clientHeight);
}

// The main animation loop
function animate() {
    requestAnimationFrame(animate);
    // You can add animations here, for example rotating the football
    // football.rotation.y += 0.01;
    renderer.render(scene, camera);
}

window.onload = function() {
    init();
    animate();
};
