import * as THREE from "three";
import PageTitle from "../components/ui/PageTitle";

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



  return (
   <>
   <PageTitle title="Projects" />
   <div className="grid grid-cols-5 bg-white">
     {projects.map((project, index) => {
        return (
          <div className="project-container bg-gray-700 overflow-hidden m-4" key={index}>
            <div className="project-image scale-105">
              <img src={project.image} alt={project.title} />
            </div>
          </div>
        );
      })
     }
   </div>
   </>
  );
}

export default Projects;
