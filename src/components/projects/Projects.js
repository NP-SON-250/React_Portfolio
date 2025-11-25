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
          des=" This Provisoir Training Website has transformed the way my
                    clients prepare for their exams. The platform is fast,
                    user-friendly, and packed with well-structured training
                    materials that make learning easier and more effective. It
                    has become an essential tool for anyone aiming to gain their
                    driving license with confidence."
          src={projectOne}
          git={<BsGithub />}
          grobal={<FaGlobe />}
          grobalLink={"https://ubuhangacongozi.rw/"}
          gitLink={"https://github.com/NP-SON-250/ubuhananga-frontend"}
        />
        <ProjectsCard
          title="Hak 4k Group Ltd"
          des=" Hak 4k Company Profile showcases the brand’s identity,
                    services, and values through a clean, modern, and visually
                    engaging design. The platform provides a clear presentation
                    of the company’s mission and offerings, helping potential
                    clients understand its strengths and capabilities."
          src={projectTwo}
          git={<BsGithub />}
          grobal={<FaGlobe />}
          grobalLink={"http://hak4kgroupltd.vercel.app/"}
          gitLink={"https://github.com/NP-SON-250/Hak4kgroupltd"}
        />
        <ProjectsCard
          title="E-commerce Website"
          des="An e-commerce web application built with modern technologies, offering product
listing, filtering, shopping cart functionality, user authentication, and order
processing."
          src={projectThree}
          git={<BsGithub />}
          grobal={<FaGlobe />}
          grobalLink={"https://smart-business-frontend.vercel.app/"}
          gitLink={"https://github.com/NP-SON-250/SmartBusinessFrontend"}
        />
      </div>
    </section>
  );
};

export default Projects;
