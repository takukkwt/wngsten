let scene, camera, renderer, car, obstacles = [], score = 0;
const obstacleSpeed = 0.05;
const carSpeed = 0.1;

init();
animate();

function init() {
    // Scene setup
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x87ceeb); // Sky blue background

    // Camera setup
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 2, 5);

    // Renderer setup
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // Car setup
    const carGeometry = new THREE.BoxGeometry(1, 1, 2);
    const carMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
    car = new THREE.Mesh(carGeometry, carMaterial);
    car.position.z = -5;
    scene.add(car);

    // Light setup
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(0, 10, 10);
    scene.add(directionalLight);

    // Obstacle setup
    createObstacle();

    // Event listeners
    window.addEventListener('resize', onWindowResize, false);
    document.addEventListener('keydown', onDocumentKeyDown, false);

    // Score display
    document.getElementById('score').innerHTML = `Score: ${score}`;
}

function createObstacle() {
    const obstacleGeometry = new THREE.BoxGeometry(1, 1, 1);
    const obstacleMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const obstacle = new THREE.Mesh(obstacleGeometry, obstacleMaterial);
    obstacle.position.set(Math.random() * 4 - 2, 0.5, Math.random() * -10 - 5);
    obstacles.push(obstacle);
    scene.add(obstacle);
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

function onDocumentKeyDown(event) {
    switch (event.keyCode) {
        case 37: // left arrow
            car.position.x -= carSpeed;
            break;
        case 39: // right arrow
            car.position.x += carSpeed;
            break;
    }
}

function animate() {
    requestAnimationFrame(animate);

    // Move obstacles
    obstacles.forEach(obstacle => {
        obstacle.position.z += obstacleSpeed;

        // Check for collision
        if (obstacle.position.distanceTo(car.position) < 1) {
            alert('Game Over!');
            document.location.reload();
        }

        // Recycle obstacles
        if (obstacle.position.z > 5) {
            obstacle.position.set(Math.random() * 4 - 2, 0.5, Math.random() * -10 - 5);
            score++;
            document.getElementById('score').innerHTML = `Score: ${score}`;
        }
    });

    renderer.render(scene, camera);
}
