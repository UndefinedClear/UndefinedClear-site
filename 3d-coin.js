function createCoin() {
    const container = document.getElementById('coin-container');
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    const geometry = new THREE.CylinderGeometry(2, 2, 0.2, 64);
    const material = new THREE.MeshStandardMaterial({ 
        color: 0x00a2ff,  // Changed to neon blue
        metalness: 0.8,
        roughness: 0.3
    });
    const coin = new THREE.Mesh(geometry, material);
    scene.add(coin);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0x00a2ff, 1, 100);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    camera.position.z = 5;

    function animate() {
        requestAnimationFrame(animate);
        coin.rotation.y += 0.01;
        renderer.render(scene, camera);
    }
    animate();
}

window.addEventListener('load', createCoin);