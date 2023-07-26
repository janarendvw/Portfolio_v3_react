import { useEffect } from 'react'
import * as THREE from 'three'
type Props = {}

function StarField({}: Props) {

    useEffect(() => {
    const starfieldContainer = document.getElementById('starfield-container') as HTMLElement;
    if (!starfieldContainer) return;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, starfieldContainer.clientWidth / starfieldContainer.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true});
    renderer.setSize(starfieldContainer.clientWidth, starfieldContainer.clientHeight);
    starfieldContainer.appendChild(renderer.domElement);
    const points = [];
    for (let i = 0; i < 1000; i++) {
        const x = THREE.MathUtils.randFloatSpread(1000);
        const y = THREE.MathUtils.randFloatSpread(1000);
        const z = THREE.MathUtils.randFloatSpread(1000);
        points.push(x, y, z);
    }
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(points, 3));
    const material = new THREE.PointsMaterial({ color: 0xffffff });
    const points1 = new THREE.Points(geometry, material);
    scene.add(points1);



    camera.position.z = 0;
    camera.position.x = 0;

    const animate = function () {
        requestAnimationFrame(animate);
        points1.rotation.x += 0.001;
        renderer.render(scene, camera);
    };
    animate();

    return () => {
        starfieldContainer.removeChild(renderer.domElement);
    }

    }, []);
}

export default StarField