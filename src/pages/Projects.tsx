import { useEffect } from "react";
import PageTitle from "../components/ui/PageTitle";
import * as THREE from "three";

function Projects() {
  const projects = [
    {
      title: "Project 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget ultricies ultrices, nunc nunc aliquam nun",
      image: "/projects/balloon_3.png",
    },
    {
      title: "Project 2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget ultricies ultrices, nunc nunc aliquam nun",
      image: "/projects/confined_psd.png",
    },
    {
      title: "Project 3",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget ultricies ultrices, nunc nunc aliquam nun",
      image: "/projects/glass_panes_1.png",
    },
    {
      title: "Project 4",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget ultricies ultrices, nunc nunc aliquam nun",
      image: "/projects/glass_swirl.png",
    },
    {
      title: "Project 5",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget ultricies ultrices, nunc nunc aliquam nun",
      image: "/projects/glass.png",
    },
    {
      title: "Project 5",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget ultricies ultrices, nunc nunc aliquam nun",
      image: "/projects/green cloth.png",
    },
    {
      title: "Project 6",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget ultricies ultrices, nunc nunc aliquam nun",
      image: "/projects/gum.png",
    },
    {
      title: "Project 7",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget ultricies ultrices, nunc nunc aliquam nun",
      image: "/projects/OFF_ON.png",
    },
    {
      title: "Project 8",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget ultricies ultrices, nunc nunc aliquam nun",
      image: "/projects/shadow_panes_2.png",
    },
    {
      title: "Project 8",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget ultricies ultrices, nunc nunc aliquam nun",
      image: "/projects/shadow_panes_3.png",
    },
    {
      title: "Project 8",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget ultricies ultrices, nunc nunc aliquam nun",
      image: "/projects/tech_weave_3.png",
    },
    {
      title: "Project 8",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget ultricies ultrices, nunc nunc aliquam nun",
      image: "/projects/wrapped_objects_1.png",
    },
  ];

  useEffect(() => {
    const canvas = document.querySelector(
      "canvas.projects"
    ) as HTMLCanvasElement;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    camera.position.setZ(20);

    const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
    const material = new THREE.MeshPhysicalMaterial({
      color: 0x555555,
      wireframe: true,
    });
    const torus = new THREE.Mesh(geometry, material);
    torus.position.set(20, 10, -10);

    const material2 = new THREE.MeshPhysicalMaterial({
      color: 0x555555,
      wireframe: true,
    });
    const cubeGeometry = new THREE.BoxGeometry(8, 8, 8);
    const cube = new THREE.Mesh(cubeGeometry, material2);
    cube.position.set(-25, 5, -10);

    const material3 = new THREE.MeshPhysicalMaterial({
      color: 0x555555,
      wireframe: true,
    });
    const cone = new THREE.ConeGeometry(5, 20, 32);
    const coneMesh = new THREE.Mesh(cone, material3);
    coneMesh.position.set(0, -10, -10);

    scene.add(coneMesh);
    scene.add(cube);
    scene.add(torus);

    const raycaster = new THREE.Raycaster();

    const pointLight = new THREE.PointLight(0xffffff);
    pointLight.intensity = 1.0;

    const hemisphereLight = new THREE.HemisphereLight(0xff0000, 0x0000ff, 2.0);

    scene.add(hemisphereLight);

    // pointLight.position.set(0, 0, 0);

    scene.add(pointLight);

    renderer.render(scene, camera);

    const mouse = new THREE.Vector2();

    const mouseLocation = (event: MouseEvent) => {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener("mousemove", mouseLocation);

    const animate = () => {
      requestAnimationFrame(animate);

      raycaster.setFromCamera(mouse, camera);

      const intersects = raycaster.intersectObjects(scene.children);

      scene.children.forEach((child:THREE.Mesh) => {
        if (child.type === "Mesh") {
          child.material.wireframe = false;
        }
      });

     intersects.forEach((intersect:THREE.Intersection) => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        intersect.object.material.wireframe = true;
      });

      torus.rotation.x += 0.001;
      torus.rotation.y += 0.001;
      torus.rotation.z += 0.001;

      coneMesh.rotation.x += 0.001;
      coneMesh.rotation.y += 0.001;
      coneMesh.rotation.z += 0.001;

      cube.rotation.x += 0.001;
      cube.rotation.y += 0.001;
      cube.rotation.z += 0.001;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      scene.remove(torus);
      scene.remove(cube);
      scene.remove(coneMesh);
      scene.remove(pointLight);
      scene.remove(hemisphereLight);
      geometry.dispose();
      material.dispose();
      renderer.dispose();

      window.removeEventListener("mousemove", mouseLocation);
    };
  }, []);

  return (
    <>
      <div className="w-screen h-screen flex justify-center items-center">
        <PageTitle title="Projects" />
      </div>
      <div className="grid grid-cols-5">
        {/* {projects.map((project, index) => {
        return (
          <div className="project-container bg-gray-700 overflow-hidden m-4" key={index}>
            <div className="project-image scale-105">
              <img src={project.image} alt={project.title} />
            </div>
          </div>
        );
      })
     } */}
      </div>
      <canvas className="projects fixed w-screen h-screen top-0 left-0 -z-10"></canvas>
    </>
  );
}

export default Projects;
