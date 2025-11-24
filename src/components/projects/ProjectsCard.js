import React from "react";
import { Link } from "react-router-dom";

const ProjectsCard = ({
  title,
  des,
  src,
  git,
  grobal,
  gitLink,
  grobalLink,
}) => {
  return (
    <div className="w-full p-2 h-auto rounded-lg shadow-shadowOne flex flex-col gap-2 bg-gradient-to-r from-hakPar to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 hover:gray-900 transition-colors duration-1000">
      <div className="w-full h-[60%] overflow-hidden rounded-lg">
        <img
          className="w-full h-44 object-cover group-hover:scale-110 duration-300 cursor-pointer"
          src={src}
          alt="src"
        />
      </div>
      <div className="w-full mt-2 flex flex-col  gap-2">
        <div>
          <div className="flex items-center justify-between">
            <h3 className="text-base uppercase text-secondary font-normal">
              {title}
            </h3>
            <div className="flex gap-2">
              <a href={gitLink} target="_blank" rel="noopener noreferrer">
                <span className="text-lg w-6 h-6 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-secondary duration-300 cursor-pointer">
                  {git}
                </span>
              </a>
              <a href={grobalLink} target="_blank" rel="noopener noreferrer">
                <span className="text-lg w-6 h-6 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-secondary duration-300 cursor-pointer">
                  {grobal}
                </span>
              </a>
            </div>
          </div>
          <p className="text-sm tracking-wide mt-3 hover:text-gray-100 duration-300">
            {des}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;
