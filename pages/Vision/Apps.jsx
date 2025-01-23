import React from "react";
import "../../Style.css";
const Apps = () => {
  return (
    <section className="w-full h-auto flex items-center justify-center flex-col bg-gray-50  my-20 gap-10 md:gap-32 pb-12">
      <div className="w-full flex-flex-col gap-2 flex-1 text-center py-5">
        <span>Apps</span>
        <h1 className="text-6xl font-bold px-12">
          Do what you love. Reimagine how <br />
          you do it.
        </h1>
      </div>

      <div className="w-full flex gap5 justify-between items-start flex-1">
        <h1 className="flex-1 px-5 text-2xl font-medium hidden md:block">
          A world of apps. A world of discovery.
        </h1>
        <div className="flex-1 px-5 flex flex-col gap-4 items-start">
          <p className="leading-7 text-gray-400">
            Apple Vision Pro expands the experience of your go‑to apps and opens
            up new possibilities in entertainment, productivity, gaming, and
            more. Browse the web in Safari, create a to‑do list in Notes, chat
            in Messages, and seamlessly move between them with a glance. And
            explore the App Store to discover an ever-expanding collection of
            awe-inspiring spatial apps designed for Apple Vision Pro.
          </p>
          <span className="text-blue-500 underline cursor-pointer">
            Visit the App Store
          </span>
          <button className="px-4 py-2 ring-2 text-white ring-orange-500 bg-orange-500 rounded-3xl cursor-pointer hover:bg-orange-600 text-sm">
            learn more about Apps
          </button>
        </div>
      </div>
    </section>
  );
};

export default Apps;
