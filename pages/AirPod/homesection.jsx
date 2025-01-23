import React from "react";
import "../../Style.css";
const Homesection = ({ img, head, title, subtitle, bgColor }) => {
  return (
    <section
      style={{ backgroundImage: `url(${img})` }}
      className=" h-screen bg-no-repeat bg-center bg-cover bg-black rounded-3xl flex  shadow-custom px-10 my-10"
    >
      <div className="w-full flex  px-5 justify-end items-end pb-16">
        <div className="w-full flex flex-col gap-5">
          <h1 className="text-5xl font-bold text-white">{head}</h1>
          <h5 className="text-white text-lg font-medium">{title}</h5>
          <p className="text-sm text-white">{subtitle}</p>
        </div>
        <div className="w-full flex justify-end  gap-5">
          <div className="flex items-center gap-3">
            <button className=" text-sm cursor-pointer text-black bg-white rounded-3xl px-4 py-2">
              Learn more
            </button>
            <button className=" text-xs text-white bg-transparent ring-1 ring-white rounded-3xl px-3 py-2 hover:text-black hover:bg-white">
              buy
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Homesection;
