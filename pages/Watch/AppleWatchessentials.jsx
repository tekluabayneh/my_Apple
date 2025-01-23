import React from "react";
import { second } from "./img";
import banner1 from "../../assets/WatchesImage/banner1.jpg";
import banner2 from "../../assets/WatchesImage/banner2.jpg";
const AppleWatchessentials = () => {
  return (
    <section>
      <div className="px-5 my-20">
        <div className="w-full flex justify-between px-12">
          <h1 className="text-4xl font-bold">Apple Watch essentials.</h1>
          <span className="underline text-blue-500">
            All Apple Watch accessories
          </span>
        </div>
        <div className="w-full flex flex-col gap-6 my-10 md:flex-row">
          <div className="h-[40rem] rounded-3xl shadow-custom flex-1 flex flex-col gap-5  bg-bottom bg-contain bg-gray-100 overflow-hidden">
            <h1 className="text-center text-2xl font-bold px-5 pt-8">
              Show your true colors.
            </h1>
            <span className="text-center text-blue-500">
              Shop Apple Watch bands
            </span>
            <img className="w-full h-full" src={banner2} alt="" />
          </div>
          <div className="h-[40rem] rounded-3xl shadow-custom flex-1 flex flex-col gap-5  bg-bottom bg-contain bg-gray-100 overflow-hidden">
            <h1 className="text-center text-2xl font-bold px-5 pt-8">
              Magic runs in the family.
            </h1>
            <span className="text-gray-400 px-20 text-center">
              Explore all AirPods models and find the best ones for you.
            </span>
            <span className="underline text-center text-blue-500">
              Learn more
            </span>

            <img className="w-full h-full" src={banner1} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppleWatchessentials;
