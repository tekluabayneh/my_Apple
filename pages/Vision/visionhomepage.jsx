import React from "react";
import "../../Style.css";
import { IoChevronForward } from "react-icons/io5";
import banner from "../../assets/visionImages/banner1.jpg";
import { IoLogoApple } from "react-icons/io5";
const Visionhomepage = () => {
  return (
    <section className="w-full h-screen bg-no-repeat relative bg-white bg-center bg-fill  flex flex-col items-center justify-center md:justify-end ">
      <div
        style={{ backgroundImage: `url(${banner})` }}
        className="w-full h-full hidden md:block bg-center bg-contain bg-no-repeat  absolute top-0 left-0"
      ></div>
      <div className="w-full flex flex-col items-center py-11 gap-2 z-10 pb-10">
        <h1 className="text-6xl font-medium flex w-full items-center justify-center">
          <IoLogoApple size={53} color="black" />
          Vision Pro
        </h1>

        <h1 className="text-orange-600 hover:underline cursor-pointer font-medium text-xl flex gap-1 items-center">
          <span> Book a demo </span>
          <IoChevronForward style={{ fontSize: "24px", color: "lightcoral" }} />
        </h1>
        <h1 className="text-orange-600 hover:underline cursor-pointer font-medium text-xl flex gap-1 items-center">
          <span>Learn more about visionOS 2 </span>
          <IoChevronForward style={{ fontSize: "24px", color: "lightcoral" }} />
        </h1>
      </div>
    </section>
  );
};

export default Visionhomepage;
