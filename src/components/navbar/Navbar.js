import React, { useState } from "react";
import { Link } from "react-scroll";
import { FiMenu } from "react-icons/fi";
import { FaGithub, FaWhatsapp, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { logo } from "../../assets/index";
import { navLinksdata } from "../../constants";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="w-full fixed top-0 right-0 left-0 z-50 bg-white text-hakBlue mx-auto flex justify-between lg:px-12 px-4 py-1 items-center font-titleFont border-b-[1px] border-b-gray-600">
      <div>
        <img src={logo} alt="logo" className="h-8" />
      </div>
      <div>
        <ul className="hidden mdl:inline-flex items-center gap-6 lg:gap-10 py-2">
          {navLinksdata.map(({ _id, title, link }) => (
            <li
              className="text-base font-normal text-hakBlue tracking-wide cursor-pointer hover:text-secondary duration-300"
              key={_id}
            >
              <Link
                activeClass="active"
                to={link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
        <span
          onClick={() => setShowMenu(!showMenu)}
          className="text-xl mdl:hidden w-10 h-10 inline-flex items-center justify-center rounded-full text-black cursor-pointer"
        >
          <FiMenu />
        </span>
        {showMenu && (
          <div className="w-full h-[94vh] overflow-scroll absolute top-12 left-0 bg-white p-4 scrollbar-hide">
            <div className="flex flex-col gap-8 py-2 relative ">
              <ul className="flex flex-col gap-4">
                {navLinksdata.map((item) => (
                  <li
                    key={item._id}
                    className="text-base font-normal text-hakBlue tracking-wide cursor-pointer hover:text-secondary duration-300"
                  >
                    <Link
                      onClick={() => setShowMenu(false)}
                      activeClass="active"
                      to={item.link}
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
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
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
