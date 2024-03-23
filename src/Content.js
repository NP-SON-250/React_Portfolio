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

import project1 from "./assets/images/Projects/img1.png";
import project2 from "./assets/images/Projects/blog1.png";
import project3 from "./assets/images/Projects/img3.png";
import person_project from "./assets/images/Projects/person.png";

import avatar1 from "./assets/images/Testimonials/hub.jpg";
import avatar2 from "./assets/images/Testimonials/Jose.jpg";
import avatar3 from "./assets/images/Testimonials/willy.jpg";
import avatar4 from "./assets/images/Testimonials/Vie.jpg";

import Hireme_person from "./assets/images/Hireme/Mine.png";
import Hireme_person2 from "./assets/images/Hireme/person.png";

// import icons from react-icons
import { GrMail, GrGithub, GrLinkedin } from "react-icons/gr";
import { MdArrowForward } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import { TbSmartHome } from "react-icons/tb";
import { BsWhatsapp } from "react-icons/bs";
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
        description: " Mastery of Figma Tools and Features: At the core of my Figma proficiency lies a deep understanding of its tools and features. From the basic shape tools to more advanced features like auto-layout and constraints, I have a comprehensive grasp of the entire toolkit. I leverage these tools adeptly to craft intricate designs with precision and efficiency.",
        description1: " UI/UX Design Expertise: UI/UX design is not just about creating visually appealing interfaces; it's about enhancing user experience and usability. In Figma, I excel in creating intuitive user interfaces that prioritize usability and accessibility. My designs are not only aesthetically pleasing but also functional, ensuring a seamless user journey.",
        description2: " Prototyping and Animation: Figma's prototyping capabilities enable designers to bring their designs to life with interactive prototypes. I utilize Figma's prototyping features to create immersive experiences, showcasing the flow and interactions within the design. Additionally, I incorporate animations to add a layer of dynamism, effectively communicating the user experience to stakeholders.",
      },
      {
        name: "Node js",
        para: "Develop APIs using Node js",
        logo: nodejs,
        description: "Server-side Development: Node.js excels as a server-side runtime, offering a lightweight and efficient environment for building web servers, APIs, and microservices. Leveraging frameworks like Express.js, I architect RESTful APIs and web applications with ease, structuring routes, middleware, and controllers to maintain a clean and organized codebase. My proficiency extends to database integration, where I seamlessly connect to various databases like MongoDB, MySQL, or PostgreSQL, using ORMs like Mongoose or Sequelize to interact with data.",
        description1: "Real-time Communication: Node.js empowers real-time communication through frameworks like Socket.IO, enabling bidirectional communication between clients and servers. I harness the power of WebSockets to build interactive chat applications, multiplayer games, or live dashboards, delivering seamless real-time experiences to users. With a keen understanding of event-driven programming, I orchestrate real-time events efficiently, ensuring low latency and high performance.",
        description2: "RESTful API Development: Building RESTful APIs is a cornerstone of modern web development, and Node.js offers a robust ecosystem for creating RESTful services. I design RESTful APIs adhering to best practices, following standards like HTTP methods, status codes, and resource naming conventions. Leveraging tools like Swagger or OpenAPI, I document APIs comprehensively, facilitating communication and collaboration with stakeholders. With a focus on security, I implement authentication and authorization mechanisms like JWT tokens or OAuth, ensuring secure access to resources.",
      },
      {
        name: "Adobe Photoshop",
        para: "Edit photos and videos in photoshop",
        logo: ps,
        description: "Graphic Design and Digital Illustration: Adobe Photoshop serves as my digital canvas, enabling me to unleash creativity and express ideas through graphic design and digital illustration. Whether it's designing logos, posters, or digital artwork, I harness Photoshop's versatile tools to conceptualize and execute designs with ingenuity and flair. I combine typography, shapes, and color theory to craft visually striking compositions that communicate messages effectively and evoke emotional responses.",
        description1: "Photo Editing and Retouching: As a proficient photo editor, I utilize Photoshop's advanced retouching tools to enhance images and bring out their full potential. From adjusting exposure and color balance to removing blemishes and imperfections, I employ techniques like dodge and burn, clone stamp, and healing brush to achieve professional-grade results. Whether it's restoring old photographs or refining portraits, I strive for perfection in every pixel, ensuring that the final output surpasses expectations.",
        description2: "Digital Manipulation and Compositing: Photoshop's prowess in digital manipulation and compositing empowers me to create surreal and fantastical imagery that transcends reality. I seamlessly blend multiple images, textures, and effects to construct elaborate scenes and visual narratives. With an eye for detail and a knack for storytelling, I weave elements together harmoniously, crafting compositions that spark imagination and ignite curiosity.",
      },
      {
        name: "React js",
        para: "Develop websites in react",
        logo: reactjs,
        description: "Component-based Development: React.js revolutionizes frontend development with its component-based architecture, enabling modular, reusable, and composable UI elements. I excel in crafting atomic components that encapsulate functionality and presentation logic, promoting code reusability and maintainability. Whether it's simple buttons and forms or intricate data visualizations and interactive widgets, I architect components with granularity and flexibility, fostering a cohesive and extensible codebase.",
        description1: "State Management and Flux Architecture: Effective state management lies at the heart of building robust and scalable React applications. I harness Flux architecture patterns, such as Redux or MobX, to centralize and manage application state in a predictable and immutable manner. With Redux, I design normalized state trees, define actions and reducers, and employ middleware for asynchronous operations, ensuring a single source of truth and facilitating predictable data flow throughout the application.",
        description2: "Integration with Backend Services: React.js seamlessly integrates with backend services and APIs, enabling full-stack development with ease. I proficiently orchestrate asynchronous data fetching and manipulation using tools like Axios, Fetch API, or GraphQL. With a keen understanding of RESTful principles and GraphQL schemas, I architect data fetching strategies that optimize performance and minimize latency, ensuring responsive and data-driven user experiences.",
      },
      {
        name: "Java",
        para: "Java programming",
        logo: sketch,
        description: "",
        description1: "",
        description2: "",
      },
      {
        name: "Python",
        para: "Python programming",
        logo: python,
        description: "",
        description1: "",
        description2: "",
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
        icon: GrMail,
        link: "mailto:hakizimanaalexis123@gmail.com",
      },
      {
        icon: BsWhatsapp,
        link: "https://wa.me/250786731449",
      },
      {
        icon: BsInstagram,
        link: "https://www.instagram.com/npson.alexis/",
      },
      {
        icon: GrGithub,
        link: "https://github.com/NP-SON-250/",
      },
      {
        icon: GrLinkedin,
        link: "https://www.linkedin.com/in/hakizimana-alexis-716b04284/",
      },
    ],
  },
  Footer: {
    text: "All © Copy Right Reserved 2022",
  },
};
