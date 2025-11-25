import React from "react";
import {
  FaGithub,
  FaWhatsapp,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import { contactImg } from "../../assets/index";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-hakPar to-hakGray p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-48 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Alexis Hakizimana</h3>
        <p className="text-lg font-normal text-gray-400">FullStack Developer</p>
        <p className="text-base text-gray-400 tracking-wide">
          FullStack Developer with expertise in designing, developing, and
          deploying scalable web applications, combining efficient frontend
          interfaces with secure and optimized backend solutions.
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="">+250 786 731 449</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email:{" "}
          <span className="">hakizimanaalexis123@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4 text-secondary">
          Find me in
        </h2>
        <div className="flex justify-around gap-4">
          <a
            href="https://github.com/NP-SON-250/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="bannerIcon">
              <FaGithub />
            </span>
          </a>{" "}
          <a
            href="https://www.linkedin.com/in/alexis-hakizimana-11469639a/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="bannerIcon">
              <FaLinkedinIn />
            </span>
          </a>
          <a
            href="https://www.instagram.com/npson.alexis/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="bannerIcon">
              <FaInstagram />
            </span>
          </a>
          <a
            href="http://wa.me/250786731449"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="bannerIcon">
              <FaWhatsapp />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactLeft;
