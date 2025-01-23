import React from "react";
import "../../Style.css";
const VisionOS = () => {
  return (
    <section className="w-full h-auto flex items-center justify-center flex-col   my-20 gap-10 md:gap-32 pb-12">
      <div className="w-full flex-flex-col gap-2 flex-1 text-center py-5">
        <span>visionOS</span>
        <h1 className="text-6xl font-bold px-12">
          An operating system <br />
          designed for spatial.
        </h1>
      </div>

      <div className="w-full flex gap5 justify-between items-start flex-1">
        <h1 className="flex-1 px-5 text-2xl font-medium hidden md:block">
          Navigate spatial experiences. Naturally.
        </h1>
        <div className="flex-1 px-5 flex flex-col gap-4 items-start">
          <p className="leading-7 text-gray-400">
            Built on the foundation of macOS, iOS, and iPadOS, visionOS enables
            powerful spatial experiences. Control Apple Vision Pro with your
            eyes, hands, and voice — interactions feel intuitive and magical.
            Simply look at an element, tap your fingers together to select, and
            use the virtual keyboard or dictation to type. And visionOS 2
            delivers even more ways to enhance work, entertainment, and
            connecting with friends and family using Apple Vision Pro.
          </p>
          <span className="text-blue-500 underline cursor-pointer">
            Learn more about visionOS 2
          </span>
          <button className="px-4 py-2 ring-2 text-white ring-orange-500 bg-orange-500 rounded-3xl cursor-pointer hover:bg-orange-600 text-sm">
            learn more about visionOS
          </button>
        </div>
      </div>
    </section>
  );
};

export default VisionOS;
