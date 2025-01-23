import React from "react";
import "../../Style.css";
const PhotosandVideos = () => {
  return (
    <section className="w-full h-auto flex items-center justify-center flex-col bg-gray-50  my-20 gap-10 md:gap-32 pb-12">
      <div className="w-full flex-flex-col gap-2 flex-1 text-center py-5">
        <span>Photos and Videos</span>
        <h1 className="text-6xl font-bold">
          Be in the moment. <br /> All over again.
        </h1>
      </div>

      <div className="w-full flex gap5 justify-between items-start flex-1">
        <h1 className="flex-1 px-5 text-2xl font-medium hidden md:block">
          Your memories come alive.
        </h1>
        <div className="flex-1 px-5 flex flex-col gap-4 items-start">
          <p className="leading-7 text-gray-400">
            Apple Vision Pro is Apple’s first 3D camera. You can capture magical
            spatial photos and spatial videos in 3D, then relive those cherished
            moments like never before with immersive Spatial Audio. Your
            existing library of photos and videos looks incredible at remarkable
            scale — and now you can transform your 2D photos into spatial photos
            with just a tap. Even panoramas wrap around you — making you feel
            like you’re standing right where you took them. You can also take
            spatial videos with iPhone 16 Pro, iPhone 16, or iPhone 15 Pro, as
            well as spatial photos with iPhone 16 Pro or iPhone 16, then view
            them on Apple Vision Pro.
          </p>
          <button className="px-4 py-2 ring-2 text-white ring-orange-500 bg-orange-500 rounded-3xl cursor-pointer hover:bg-orange-600 text-sm">
            learn more about Photos and Videos
          </button>
        </div>
      </div>
    </section>
  );
};

export default PhotosandVideos;
