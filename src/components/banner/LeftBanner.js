import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from "./Media";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["Professional Coder.", "Full Stack Developer.", "UI Designer."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal pt-6">WELCOME TO MY PORTIFOLIO</h4>
        <h1 className="lg:text-6xl text-xl font-bold">
          Hi, I'm <span className="capitalize">H. Alexis</span>
        </h1>
        <h2 className="lg:text-4xl text-2xl font-bold">
          a <span className="text-secondary lg:text-4xl text-2xl">{text}</span>
          <Cursor cursorBlinking="false" cursorStyle="|" cursorColor="#ffff" />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          I use animation as a third dimension by which to simplify experiences
          and kuiding thro each and every interaction. I'm not adding motion
          just to spruce things up, but doing it in ways that.
        </p>
      </div>
      {/* Media */}
      <Media />
    </div>
  );
};

export default LeftBanner;
