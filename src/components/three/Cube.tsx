/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useEffect } from "react";
import * as THREE from "three";
//@ts-ignore
import fragmentShader from "../../shaders/fragmentShader.frag";
//@ts-ignore
import vertexShader from "../../shaders/vertexShader.vert";
import gsap from "gsap";

type Parameters = {
  count: number;
  size: number;
  radius: number;
  branches: number;
  spin: number;
  randomness: number;
  randomnessPower: number;
  insideColor: string;
  outsideColor: string;
  camStartZ: number;
  camStartY: number;
};

function Cube() {
  useEffect(() => {
    THREE.ColorManagement.enabled = false;

    // Canvas
    const canvas = document.querySelector("canvas.webgl");

    // Scene
    const scene = new THREE.Scene();

    /**
     * Galaxy
     */
    const parameters: Parameters = {
      count: 200000,
      size: 0.005,
      radius: 7,
      branches: 3,
      spin: 1,
      randomness: 1,
      randomnessPower: 4,
      insideColor: "hsl(10, 100%, 60%)",
      outsideColor: "hsl(200, 100%, 50%)",
      camStartZ: 4,
      camStartY: 0,
    };

    let geometry: THREE.BufferGeometry | null = null;
    let material: any | null = null;
    let points: THREE.Points | null = null;

    const generateGalaxy = () => {
      if (points !== null) {
        scene.remove(points);

        geometry?.dispose();
        material?.dispose();
      }

      /**
       * Geometry
       */
      geometry = new THREE.BufferGeometry();

      const positions = new Float32Array(parameters.count * 3);
      const colors = new Float32Array(parameters.count * 3);
      const scales = new Float32Array(parameters.count * 1);
      const randomness = new Float32Array(parameters.count * 3);

      const insideColor = new THREE.Color(parameters.insideColor);
      const outsideColor = new THREE.Color(parameters.outsideColor);

      for (let i = 0; i < parameters.count; i++) {
        const i3 = i * 3;

        // Position
        const radius = Math.random() * parameters.radius;

        // const spinAngle = radius * parameters.spin;

        const branchAngle =
          ((i % parameters.branches) / parameters.branches) * Math.PI * 2;

        positions[i3] = Math.cos(branchAngle) * radius;
        positions[i3 + 1] = 0;
        positions[i3 + 2] = Math.sin(branchAngle) * radius;

        const randomX =
          Math.pow(Math.random(), parameters.randomnessPower) *
          (Math.random() < 0.5 ? 1 : -1) *
          parameters.randomness *
          radius;
        const randomY =
          Math.pow(Math.random(), parameters.randomnessPower) *
          (Math.random() < 0.5 ? 1 : -1) *
          parameters.randomness *
          radius;
        const randomZ =
          Math.pow(Math.random(), parameters.randomnessPower) *
          (Math.random() < 0.5 ? 1 : -1) *
          parameters.randomness *
          radius;

        positions[i3] = randomX;
        positions[i3 + 1] = Math.sin(randomY);
        positions[i3 + 2] = randomZ;

        // Color
        const mixedColor = insideColor.clone();
        mixedColor.lerp(outsideColor, radius / parameters.radius);

        colors[i3] = mixedColor.r;
        colors[i3 + 1] = mixedColor.g;
        colors[i3 + 2] = mixedColor.b;

        // Scale
        scales[i] = Math.random();
      }

      geometry.setAttribute(
        "position",
        new THREE.BufferAttribute(positions, 3)
      );
      geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
      geometry.setAttribute("aScale", new THREE.BufferAttribute(scales, 1));
      geometry.setAttribute(
        "aRandomness",
        new THREE.BufferAttribute(randomness, 3)
      );

      /**
       * Material
       */
      material = new THREE.ShaderMaterial({
        depthWrite: false,
        blending: THREE.AdditiveBlending,
        vertexColors: true,
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        vertexShader: vertexShader,
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        fragmentShader: fragmentShader,
        uniforms: {
          uSize: { value: 4 * renderer.getPixelRatio() },
          uTime: { value: 0 },
        },
      });

      /**
       * Points
       */
      points = new THREE.Points(geometry, material);
      scene.add(points);
    };

    /**
     * Sizes
     */

    if (canvas === null) {
      return;
    }
    const sizes = {
      width: canvas.clientWidth,
      height: canvas.clientHeight,
    };

    

    window.addEventListener("resize", () => {
      // Update sizes
      sizes.width = window.innerWidth;
      sizes.height = window.innerHeight;

      // Update camera
      camera.aspect = sizes.width / sizes.height;
      camera.updateProjectionMatrix();

      // Update renderer
      renderer.setSize(sizes.width, sizes.height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    });

    /**
     * Camera
     */
    // Base camera
    const camera = new THREE.PerspectiveCamera(
      75,
      sizes.width / sizes.height,
      0.1,
      100
    );

    camera.position.z = parameters.camStartZ;
    camera.position.y = parameters.camStartY;
    scene.add(camera);

    /**
     * Renderer
     */
    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
    });
    renderer.outputColorSpace = THREE.LinearSRGBColorSpace;
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    /**
     * Animate
     */

    generateGalaxy();

    let mouseX = 0;
    let mouseY = 0;

    const mouseMove = (event:MouseEvent) => {
      mouseX = event.clientX / sizes.width - 0.5;
      mouseY = event.clientY / sizes.height - 0.5;

      gsap.to(points.rotation, { 
        duration: 3,
        x: mouseX * 2,
        y: -mouseY * 2,
        ease: "power2.out",
      });


    };

    const scroll = (event:WheelEvent) => {
      gsap.to(camera.position, {
        duration: 3,
        z: camera.position.z + event.deltaY * 0.01,
      });
    };

    window.addEventListener("wheel", scroll);
    window.addEventListener("mousemove", mouseMove);



    const clock = new THREE.Clock();

    const tick = () => {
      const elapsedTime = clock.getElapsedTime();


      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      material.uniforms.uTime.value = elapsedTime;
      // Render
      renderer.render(scene, camera);

      // Call tick again on the next frame
      window.requestAnimationFrame(tick);

      if (points === null) {
        return;
      }
    };

    tick();

    return () => {
      if (points !== null) {
      scene.remove(points);
      geometry?.dispose();
      material.dispose();

      }
      window.removeEventListener("mousemove", mouseMove);
      window.removeEventListener("wheel", scroll);
    };
  }, []);

  return <canvas className="fixed w-screen h-screen -z-50 webgl"></canvas>;
}

export default Cube;
