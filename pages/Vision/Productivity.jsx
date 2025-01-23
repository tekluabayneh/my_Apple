import React from "react";
import "../../Style.css";
const Productivity = () => {
  return (
    <section className="w-full h-auto flex items-center justify-center flex-col  my-20 gap-10 md:gap-32 pb-12">
      <div className="w-full flex-flex-col gap-2 flex-1 text-center py-5">
        <span>Productivity</span>
        <h1 className="text-6xl font-bold">
          A workspace with <br /> infinite space.
        </h1>
      </div>

      <div className="w-full flex gap5 justify-between items-start flex-1">
        <h1 className="flex-1 px-5 text-2xl font-medium hidden md:block">
          Discover new ways to work.
        </h1>
        <div className="flex-1 px-5 flex flex-col gap-4 items-start">
          <p className="leading-7 text-gray-400">
            Apple Vision Pro gives you limitless space to get things done.
            Organize everything you need anywhere around you, in any way you
            like. Seamlessly bring in your Mac workflows using Mac Virtual
            Display. Connect a Magic Keyboard, a Magic Trackpad, and other
            Bluetooth accessories to expand how you navigate. And with SharePlay
            in FaceTime, you can collaborate with colleagues using apps together
            in real time.
          </p>
          <button className="px-4 py-2 ring-2 text-white ring-orange-500 bg-orange-500 rounded-3xl cursor-pointer hover:bg-orange-600 text-sm">
            Learn more about productivity
          </button>
        </div>
      </div>
    </section>
  );
};

export default Productivity;
