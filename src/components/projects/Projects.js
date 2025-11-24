import React from "react";
import Title from "../layouts/Title";
import { projectOne, projectTwo, projectThree } from "../../assets/index";
import ProjectsCard from "./ProjectsCard";
import { BsGithub } from "react-icons/bs";
import { FaGlobe } from "react-icons/fa";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-10 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PROJECTS AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 xl:gap-10">
        <ProjectsCard
          title="UBUHANGA CONGOZI"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectOne}
          git={<BsGithub />}
          grobal={<FaGlobe />}
          grobalLink={"https://ubuhangacongozi.rw/"}
          gitLink={"https://github.com/NP-SON-250/ubuhananga-frontend"}
        />
        <ProjectsCard
          title="Hak 4k Group Ltd"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectTwo}
          git={<BsGithub />}
          grobal={<FaGlobe />}
          grobalLink={"http://hak4kgroupltd.vercel.app/"}
          gitLink={"https://github.com/NP-SON-250/Hak4kgroupltd"}
        />
        <ProjectsCard
          title="Chatting App"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectThree}
          git={<BsGithub />}
          grobal={<FaGlobe />}
        />
        <ProjectsCard
          title="SOCIAL MEDIA CLONE"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectThree}
          git={<BsGithub />}
          grobal={<FaGlobe/>}
        />
        <ProjectsCard
          title="E-commerce Website"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectOne}
          git={<BsGithub />}
          grobal={<FaGlobe/>}
        />
        <ProjectsCard
          title="Chatting App"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectTwo}
          git={<BsGithub />}
          grobal={<FaGlobe/>}
        />
      </div>
    </section>
  );
};

export default Projects;
