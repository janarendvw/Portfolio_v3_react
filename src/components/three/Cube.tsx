import { useEffect } from "react";
import * as THREE from "three";
import gsap from "gsap";

type Props = {};

function Cube({}: Props) {
  useEffect(() => {
    const cubeContainer = document.querySelector(".webgl") as HTMLCanvasElement;
    if (!cubeContainer) return;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({
      canvas: cubeContainer,
      alpha: true,
      antialias: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    const points = [];
    for (let i = 0; i < 60; i++) {
      const x = THREE.MathUtils.randFloatSpread(10);
      const y = THREE.MathUtils.randFloatSpread(10);
      const z = THREE.MathUtils.randFloatSpread(20);
      points.push(new THREE.Vector3(x, y, z));
    }
    const spline = new THREE.CatmullRomCurve3(points);
    const subdivisions = 12;
    const samples = spline.getPoints(points.length * subdivisions);
    const geometrySpline = new THREE.BufferGeometry().setFromPoints(samples);
    const line = new THREE.Line(
      geometrySpline,
      new THREE.LineDashedMaterial({
        color: 0xffffff,
        dashSize: 0.06,
        gapSize: 0.1,
        opacity: 0.3,
        transparent: true,
        polygonOffset: true,
      })
    );
    line.computeLineDistances();

    // objects.push( line );
    scene.add(line);

    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    const material = new THREE.PointsMaterial({ color: 0xffffff, size: 0.05 });
    const pointCloud = new THREE.Points(geometry, material);
    // const line = new THREE.Line(geometry, lineMaterial);
    scene.add(pointCloud);
    // scene.add(line);
    camera.position.z = 13;
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1));
    renderer.render(scene, camera);
    let scrolled = 0;
    const handleScroll = () => {
      scrolled = window.scrollY;

      gsap.to(camera.position, {
        z: 13 - scrolled * 0.01,
        ease: "molasses",
        duration: 1,
        onUpdate: () => {
          renderer.render(scene, camera);
        },
        onComplete: () => {
          // Animation is complete, stop rendering
          cancelAnimationFrame(animationId);
        },
      });

      camera.position.z = 13 - scrolled * 0.01;

      const renderLoop = () => {
        renderer.render(scene, camera);
        animationId = requestAnimationFrame(renderLoop);
      };

      // Start the render loop
      let animationId = requestAnimationFrame(renderLoop);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <canvas className="absolute left-1/2 top-1/2 -translate-y-[55%] -translate-x-[50%] -z-50 webgl"></canvas>
  );
}

export default Cube;
