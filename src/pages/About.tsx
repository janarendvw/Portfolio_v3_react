/* eslint-disable no-empty-pattern */
import React, { useEffect } from "react";
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

  useEffect(() => {
    const scalingImage = document.getElementById("scale-image") as HTMLElement;
    const profilePic = document.getElementById("profile-pic") as HTMLElement;
    const flowDividers = document.getElementsByClassName(
      "flow-divider"
    ) as HTMLCollectionOf<HTMLElement>;
    const fillBar = document.getElementsByClassName(
      "fill-bar"
    ) as HTMLCollectionOf<HTMLElement>;
    window.addEventListener("scroll", () => {
      const scrollProgress =
        window.scrollY / (document.body.scrollHeight - window.innerHeight);

      fillBar[0].style.height = `${scrollProgress * 100}%`;
      fillBar[0].style.width = "100%";
      scalingImage.style.transform = `scale(1.25) translateY(${
        scrollProgress * -100
      }px)`;
      scalingImage.style.opacity = `${1 - scrollProgress}`;
      scalingImage.style.filter = `blur(${scrollProgress * 8}px) brightness(${
        1 + scrollProgress * 2
      })`;
      profilePic.style.filter = `blur(${scrollProgress * 8}px) brightness(${
        1 + scrollProgress * 2
      })`;
      profilePic.style.transform = `translateY(${
        scrollProgress * 100
      }px) scale(1.25)`;
      profilePic.style.opacity = `${1 - scrollProgress}`;

      for (let i = 0; i < flowDividers.length; i++) {
        flowDividers[i].style.width = `${scrollProgress * 100}%`;
      }
    });
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
      <div className="flex flex-col bg-radial-gradient mx-10 relative min-h-[95vh]">
        <PageTitle title="About" />
        <div className="striped w-60 h-20 absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2 flex items-center justify-center">
          <div className="bg-background px-2 text-center flex items-end font-Garamond italic">
            scroll down
          </div>
        </div>
      </div>
      <div className="py-24 my-24 flex flex-col justify-center bg-text/10">
        <section className="max-w-screen-xl m-auto flex flex-col w-full items-stretch gap-8">
          <h1 className="text-5xl my-12 text-center">
            These are my{" "}
            <span className="font-Garamond italic text-6xl text-accent">
              skills
            </span>
          </h1>
          <div className="bg-400 max-w-screen-2xl flex flex-col m-auto mb-4 w-full">
            <div className="flex gap-24">
              <div className="flex-1">
                <h3 className="font-bold text-2xl uppercase scramble">
                  Graphic
                </h3>
                <div className="h-px w-full mt-2 mb-8 flow-divider" />
                <ul className="my-4">
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
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-2xl uppercase">Web</h3>
                <div className="h-px w-full mt-2 mb-8 flow-divider" />
                <ul className="my-4">
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
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-2xl uppercase scramble">Misc</h3>
                <div className="h-px w-full mt-2 mb-8 flow-divider" />
                <ul className="my-4">
                  <li className="flex justify-between items-center">
                    Three.js{" "}
                    <span className="opacity-50 align-middle">/θri'js/</span>
                  </li>
                  <li className="flex justify-between items-center">
                    Figma{" "}
                    <span className="opacity-50 align-middle">/'fɪg.mə/</span>
                  </li>
                  <li className="flex justify-between items-center">
                    Photography
                    <span className="opacity-50 align-middle">
                      /fə'tɒɡ.rə.fi/
                    </span>{" "}
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-24 w-full justify-between max-w-screen-xl m-auto">
            <div className=" text-accent flex-1 group">
              <h3 className=" flex items-center justify-start gap-4 py-8">
                Graphic projects{" "}
                <span className="material-symbols-rounded group-hover:translate-x-5 duration-100 ease-in-out">
                  arrow_right_alt
                </span>
              </h3>
            </div>
            <div className=" text-accent flex-1 group">
              <h3 className=" flex items-center justify-start gap-4 py-8">
                Web projects{" "}
                <span className="material-symbols-rounded group-hover:translate-x-5 duration-100 ease-in-out">
                  arrow_right_alt
                </span>
              </h3>
            </div>
            <div className=" text-accent flex-1 group">
              <h3 className=" flex items-center justify-start gap-4 py-8">
                Misc projects{" "}
                <span className="material-symbols-rounded group-hover:translate-x-5 duration-100 ease-in-out">
                  arrow_right_alt
                </span>
              </h3>
            </div>
          </div>
        </section>
      </div>

      <section className="mx-12  flex flex-col items-center overflow-hidden p-24">
        <h1 className="text-5xl mb-24 text-center">
          This is my
          <span className="font-Garamond italic text-6xl text-accent">
            {" "}
            experience
          </span>
        </h1>
        <div className="grid experience-grid mb-40 px-12 2xl:grid-cols-4 grid-cols-2 place-content-center place-items-center relative max-w-screen-xl font-mono">
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
                    <p className="text-text/75 text-center font-light text-sm">
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
