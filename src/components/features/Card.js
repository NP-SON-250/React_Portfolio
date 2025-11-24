import React from "react";
import { HiArrowRight } from "react-icons/hi";

const Card = ({ item: { title, des, icon } }) => {
  return (
    <div className="w-full p-4 h-80 rounded-lg shadow-shadowOne flex items-center group hover:bg-gradient-to-b hover:from-hakBlue hover:to-hakDark transition-colors duration-100 group">
      <div className="h-72 overflow-y-hidden">
        <div className="flex h-full flex-col gap-10 translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
          <div className="w-10 h-8 flex flex-col justify-between">
            {icon ? (
              <span className="text-5xl text-secondary">{icon}</span>
            ) : (
              <>
                <span className="w-full h-[2px] rounded-lg bg-secondary inline-flex"></span>
                <span className="w-full h-[2px] rounded-lg bg-secondary inline-flex"></span>
                <span className="w-full h-[2px] rounded-lg bg-secondary inline-flex"></span>
                <span className="w-full h-[2px] rounded-lg bg-secondary inline-flex"></span>
              </>
            )}
          </div>
          <div className="flex flex-col gap-6">
            <h2 className="text-xl md:text-2xl font-titleFont font-bold text-gray-300">
              {title}
            </h2>
            <p className="base">{des}</p>
            <span className="text-2xl text-secondary">
              <HiArrowRight />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
