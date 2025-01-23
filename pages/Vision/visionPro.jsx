import React from "react";
import "../../Style.css";
import { IoLogoApple } from "react-icons/io5";
import banner2 from "../../assets/visionImages/banner2.jpg";
const VisionPro = () => {
  return (
    <section className="relative w-full h-[170vh] flex flex-col items-center gap-1">
      <div className="w-full flex flex-col gap-5 flex-1 bg-white items-center justify-center">
        <p className="text-2xl px-32 font-medium text-center">
          Apple Vision Pro seamlessly blends digital content with your physical
          space.
        </p>
        <p className="text-2xl px-32 font-medium text-center">
          So you can work, watch, relive memories, and connect in ways never
          before possible.
        </p>
        <p className="text-2xl px-32 font-medium text-center">
          The era of spatial computing is here.
        </p>
        <div className="w-40 text-center">
          <button className="px-4 py-2 rounded-3xl ring-2 ring-orange-500 text-orange-500 text-sm hover:text-white hover:bg-orange-500 cursor-pointer transition-all">
            Watch The Film
          </button>
        </div>
      </div>
      <div className="w-full flex flex-col gap-5 flex-1 bg-white items-center justify-center ">
        <h1 className="text-6xl font-medium flex w-full items-center justify-center">
          <IoLogoApple size={53} color="black" />
          Vision Pro
        </h1>
        <div className="w-5/6 hidden md:block">
          <img src={banner2} alt="" />
        </div>
        <button className="px-4 py-2 rounded-3xl ring-2 ring-black text-black text-sm hover:text-white hover:bg-black cursor-pointer transition-all">
          Take a closer Look
        </button>
      </div>
    </section>
  );
};

export default VisionPro;
