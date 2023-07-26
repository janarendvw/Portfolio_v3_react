/* eslint-disable no-empty-pattern */
import { useEffect } from "react";
import PageTitle from "../components/ui/PageTitle";
import writeOut from "../scripts/writeOut";
import Cube from "../components/three/Cube";
import parallax from "../scripts/parallax";
import ContactModal from "../components/ui/ContactModal";

function About() {
  useEffect(() => {
    writeOut();
    parallax();
  }, []);

  const experience = [
    {
      company: "University of Eindhoven",
      role: "Computer Science",
      startDate: "July 2018",
      endDate: "March 2019",
      points: 35,
    },
    {
      company: "University of Utrecht",
      role: "ICT",
      startDate: "july 2019",
      endDate: "march 2020",
      points: 35,
    },
    {
      company: "University of Applied Sciences Utrecht",
      role: "Open-ICT",
      startDate: "July 2022",
      endDate: "Present",
      points: 60,
    },
    {
      company: "Lajos.nl",
      role: "React / PHP Developer",
      startDate: "June 2022",
      endDate: "Present",
      points: 175,
    },
  ];

  return (
    <>
      <Cube />
      <ContactModal />
      <div className="flex flex-col  mx-10 relative min-h-[100vh] pointer-events-none">
        <PageTitle title="ABOUT" />
        <div className="w-60 h-20 absolute left-1/2 bottom-0 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-none">
          <div className="material-symbols-rounded text-6xl text-secondary">
            arrow_downward
          </div>
        </div>
      </div>
      <div className="py-8 flex flex-col justify-center bg-accent px-8">
        <section className="max-w-screen-full m-auto flex flex-col w-full items-stretch gap-8">
          
          <div className="bg-400 max-w-xl flex flex-col m-auto mb-4 w-full text-center font-mono">
            Nice to meet you! My name is Jan, I'm a 23 year old developer from
            the Netherlands. I'm currently studying Open-ICT at the University
            of Applied Sciences Utrecht. I have a passion for data engeering, 3d
            graphics and web development.
            <br />
          </div>
        </section>
      </div>
      <div className="py-24 flex flex-col justify-center bg-background">
        <section className="max-w-screen-xl m-auto flex flex-col w-full items-stretch gap-8">
          <h1 className="text-5xl my-12 text-center">
            These are my{" "}
            <span className="font-Garamond italic text-6xl bg-gradient-to-tr from-contrast to-secondary bg-center bg-clip-text text-transparent">
              skills
            </span>
          </h1>
          <div className="bg-400 max-w-screen-2xl flex flex-col m-auto mb-4 w-full">
            <div className="flex-col md:flex-row flex gap-24 px-12">
              <div className="flex-1">
                <h3 className="font-bold text-2xl uppercase scramble">
                  Graphic
                </h3>
                <div className="h-px w-full mt-2 mb-8 flow-divider bg-secondary/30" />
                <ul className="my-4 bg-secondary/">
                  <li className="flex justify-between items-center">
                    Blender{" "}
                    <span className="opacity-50 align-middle">/'blen.dər/</span>
                  </li>
                  <li className="flex justify-between items-center">
                    Illustrator{" "}
                    <span className="opacity-50 align-middle">
                      {" "}
                      /'ɪl.ə.streɪ.tər/
                    </span>
                  </li>
                  <li className="flex justify-between items-center">
                    Photoshop{" "}
                    <span className="opacity-50 align-middle">
                      /'fəʊ.təʊ.ʃɒp/
                    </span>
                  </li>
                </ul>
                <div className=" text-accent flex-1 group">
                  <h3 className="bg-secondary/10 flex items-center justify-between gap-4 mt-12 py-2 px-3 text-secondary cursor-pointer">
                    Graphic projects{" "}
                    <span className="material-symbols-rounded group-hover:translate-x-5 duration-100 ease-in-out">
                      arrow_circle_right
                    </span>
                  </h3>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-2xl uppercase">Web</h3>
                <div className="h-px w-full mt-2 mb-8 flow-divider bg-secondary/30" />
                <ul className="my-4 bg-secondary/">
                  <li className="flex justify-between items-center">
                    Vue <span className="opacity-50 align-middle">/vy/</span>
                  </li>
                  <li className="flex justify-between items-center">
                    React{" "}
                    <span className="opacity-50 align-middle">/ri'ækt/</span>
                  </li>
                  <li className="flex justify-between items-center">
                    Svelte{" "}
                    <span className="opacity-50 align-middle">/svɛlt/</span>
                  </li>
                </ul>
                <div className=" text-accent flex-1 group">
                  <h3 className="bg-secondary/10 flex items-center justify-between gap-4 mt-12 py-2 px-3 text-secondary cursor-pointer">
                    Web projects{" "}
                    <span className="material-symbols-rounded group-hover:translate-x-5 duration-100 ease-in-out">
                      arrow_circle_right
                    </span>
                  </h3>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-2xl uppercase scramble">Misc</h3>
                <div className="h-px w-full mt-2 mb-8 flow-divider bg-secondary/30" />
                <ul className="my-4 bg-secondary/">
                  <li className="flex justify-between items-center">
                    Three.js{" "}
                    <span className="opacity-50 align-middle">/θri'js/</span>
                  </li>
                  <li className="flex justify-between items-center">
                    Figma{" "}
                    <span className="opacity-50 align-middle">/'fɪg.mə/</span>
                  </li>
                  <li className="flex justify-between items-center">
                    GLSL
                    <span className="opacity-50 align-middle">
                      /'dʒiː.el.es'el/
                    </span>{" "}
                  </li>
                </ul>
                <div className=" text-accent flex-1 group">
                  <h3 className="bg-secondary/10 flex items-center justify-between gap-4 mt-12 py-2 px-3 text-secondary cursor-pointer">
                    Misc projects{" "}
                    <span className="material-symbols-rounded group-hover:translate-x-5 duration-100 ease-in-out">
                      arrow_circle_right
                    </span>
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-24 w-full justify-between max-w-screen-xl m-auto"></div>
        </section>
      </div>

      <section className="flex flex-col items-center overflow-hidden p-24 bg-black text-text">
        <h1 className="text-5xl mb-24 text-center">
          This is my
          <span className="font-Garamond italic text-6xl text-accent">
            {" "}
            experience
          </span>
        </h1>
        <div className="grid experience-grid mb-40 mt-10 2xl:grid-cols-4 grid-cols-1 md:grid-cols-2 place-content-center place-items-center relative max-w-screen-xl font-mono">
          {experience.map((element, index) => {
            return (
              <div key={index} className="w-full h-full experience-grid-item">
                <div
                  className={`experience-grid-item-inner group grid grid-cols-1 grid-rows-3`}
                >
                  <div className="experience-grid-item-content row-start-1 row-span-2 flex items-center justify-end p-4 flex-col gap-4">
                    <h3
                      className={`uppercase flex items-center justify-between text-center`}
                    >
                      {element.role}
                    </h3>
                    <p className="opacity-70 text-center font-light text-sm">
                      {element.company}
                    </p>
                    <div className="flex gap-2 text-sm relative items-center bg-gradient-to-l border-accent/80 from-accent/30 to-transparent px-4  text-accent">
                      <p>{element.startDate}</p>
                      <span className="material-symbols-rounded">
                        arrow_right
                      </span>
                      <p>{element.endDate}</p>
                      {element.endDate === "Present" && (
                        <div className="w-0.5 h-full absolute right-0 translate-x-1/2  bg-accent animate-pulse"></div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default About;
