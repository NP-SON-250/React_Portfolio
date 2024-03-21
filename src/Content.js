// import images
import Hero_person from "./assets/images/Hero/Alexis.png";

import figma from "./assets/images/Skills/figma.png";
import sketch from "./assets/images/Skills/sketch.png";
import ps from "./assets/images/Skills/ps.png";
import reactjs from "./assets/images/Skills/react.png";
import nodejs from "./assets/images/Skills/node.png";
import python from "./assets/images/Skills/python.png";

import services_logo1 from "./assets/images/Services/logo1.png";
import services_logo2 from "./assets/images/Services/logo2.png";
import services_logo3 from "./assets/images/Services/logo3.png";

import project1 from "./assets/images/projects/img1.png";
import project2 from "./assets/images/projects/blog1.png";
import project3 from "./assets/images/projects/img3.png";
import person_project from "./assets/images/projects/person.png";

import avatar1 from "./assets/images/Testimonials/hub.jpg";
import avatar2 from "./assets/images/Testimonials/Jose.jpg";
import avatar3 from "./assets/images/Testimonials/willy.jpg";
import avatar4 from "./assets/images/Testimonials/Vie.jpg";

import Hireme_person from "./assets/images/Hireme/Mine.png";
import Hireme_person2 from "./assets/images/Hireme/person.png";

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";

export const content = {
  nav: [
    {  
      name:"Home",
      link: "#home",
      icon: TbSmartHome,
    },
    {
      name:"Skills",
      link: "#skills",
      icon: BiUser,
    },
    {
      name:"Services",
      link: "#services",
      icon: RiServiceLine,
    },
    {
      name:"Projects",
      link: "#projects",
      icon: RiProjectorLine,
    },
    {
      name:"Contact",
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: "Web Developer",
    firstName: "Npson-",
    LastName: "Alexis",
    btnText: "View CV",
    image: Hero_person,
    hero_content: [
      {
        count: "3+",
        text: "Years of Experinse in Web development",
      },
      {
        count: "17+",
        text: "Projects Worked in my career",
      },
    ],
  },
  skills: {
    title: "Skills",
    subtitle: "MY TOP SKILLS",
    skills_content: [
      {
        name: "Figma",
        para: "Design website in figma",
        logo: figma,
      },
      {
        name: "Node js",
        para: "Develop APIs using Node js",
        logo: nodejs,
      },
      {
        name: "Adobe Photoshop",
        para: "Edit photos and videos in photoshop",
        logo: ps,
      },
      {
        name: "React js",
        para: "Develop websites in react",
        logo: reactjs,
      },
      {
        name: "Java",
        para: "Java programming",
        logo: sketch,
      },
      {
        name: "Python",
        para: "Python programming",
        logo: python,
      },
    ],
    icon: MdArrowForward,
  },
  services: {
    title: "Services",
    subtitle: "WHAT I OFFER",
    service_content: [
      {
        title: "Web Development",
        para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
        logo: services_logo1,
      },
      {
        title: "ui / ux DESIGNING",
        para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
        logo: services_logo2,
      },
      {
        title: "PhotoShop Editing",
        para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
        logo: services_logo3,
      },
    ],
  },
  Projects: {
    title: "Projects",
    subtitle: "WORKING PROJECTS",
    image: person_project,
    project_content: [
      {
        title: "Smart Business Website",
        image: project1,
      },
      {
        title: "Blog posts",
        image: project2,
      },
      {
        title: "Smart City",
        image: project3,
      },
      {
        title: "Screening Backend ",
        image: project3,
      },
    ],
  },
  Testimonials: {
    title: "Testimonials",
    subtitle: "MY CLIENT REVIEWS",
    testimonials_content: [
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar1,
        name: "JULES HUB",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar2,
        name: "JOSELINE",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar3,
        name: "WILLIAM",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar4,
        name: "VIATEUR",
      },
    ],
  },
  Hireme: {
    title: "Hire Me",
    subtitle: "FOR YOUR PROJECTS",
    image1: Hireme_person,
    image2: Hireme_person2,
    para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
    btnText: "Hire Me",
  },
  Contact: {
    title: "Contect Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "hakizimanaalexis123@gmail.com",
        icon: GrMail,
        link: "mailto:hakizimanaalexis123@gmail.com",
      },
      {
        text: "+250 7867 31449",
        icon: MdCall,
        link: "https://wa.me/250786731449",
      },
      {
        text: "npson.alexis",
        icon: BsInstagram,
        link: "https://www.instagram.com/npson.alexis/",
      },
    ],
  },
  Footer: {
    text: "All © Copy Right Reserved 2022",
  },
};
