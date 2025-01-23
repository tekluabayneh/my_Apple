import React from "react";
import "../../Style.css"
const Entertainment = () => {
  return (
    <section className="w-full h-auto flex items-center justify-center flex-col bg-gray-50 my-20 gap-10 md:gap-32 pb-12">
      <div className="w-full flex-flex-col gap-2 flex-1 text-center py-5">
        <span>Entertainment</span>
        <h1 className="text-6xl font-bold">
          The ultimate theater. <br /> Wherever you are.
        </h1>
      </div>

      <div className="w-full flex gap5 justify-between items-start flex-1">
        <h1 className="flex-1 px-5 text-2xl font-medium hidden md:block">
          A new dimension for entertainment.
        </h1>
        <div className="flex-1 px-5 flex flex-col gap-4 items-start">
          <p className="leading-7 text-gray-400">
            Apple Vision Pro can transform any room into your own personal
            theater. Expand your movies, shows, and games to your perfect size
            and experience them in Spatial Audio. Apple Immersive Video puts you
            in the center of the action with mind‑blowing immersion. And with
            more pixels than a 4K TV for each eye, you can enjoy stunning
            content wherever you are — on a long flight or the couch at home.
          </p>
          <button className="px-4 py-2 ring-2 text-white ring-orange-500 bg-orange-500 rounded-3xl cursor-pointer hover:bg-orange-600 text-sm">
            Learn more about entertainment
          </button>
        </div>
      </div>
    </section>
  );
};

export default Entertainment;
