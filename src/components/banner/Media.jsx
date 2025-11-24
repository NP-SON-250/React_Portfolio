import React from "react";
import {
  FaTwitter,
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
      <div>
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
          <a href="http://wa.me/250786731449" target="_blank" rel="noopener noreferrer">
            <span className="bannerIcon">
              <FaWhatsapp />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Media;
