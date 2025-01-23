import React from "react";
import "../../Style.css";
const Connection = () => {
  return (
    <section className="w-full h-auto flex items-center justify-center flex-col  my-20 gap-10 md:gap-32 pb-12">
      <div className="w-full flex-flex-col gap-2 flex-1 text-center py-5">
        <span>Connection</span>
        <h1 className="text-6xl font-bold">
          Share quality time. <br /> And space.
        </h1>
      </div>

      <div className="w-full flex gap5 justify-between items-start flex-1">
        <h1 className="flex-1 px-5 text-2xl font-medium hidden md:block">
          A more engaging way to get together.
        </h1>
        <div className="flex-1 px-5 flex flex-col gap-4 items-start">
          <p className="leading-7 text-gray-400">
            Apple Vision Pro makes it easy to collaborate and connect wherever
            you are. You can see FaceTime participants in life-size video tiles,
            or you can choose to use your spatial Persona and feel like you are
            sharing the same space with others. And use SharePlay to watch,
            listen, and play together with your favorite people.
          </p>
          <button className="px-4 py-2 ring-2 text-white ring-orange-500 bg-orange-500 rounded-3xl cursor-pointer hover:bg-orange-600 text-sm">
            learn more about Connection
          </button>
        </div>
      </div>
    </section>
  );
};

export default Connection;
