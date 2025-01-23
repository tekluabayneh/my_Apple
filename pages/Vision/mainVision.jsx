import React from "react";
import Header from "./header";
import Visionhomepage from "./visionhomepage";
import VisionPro from "./visionPro";
import Entertainment from "./Entertainment";
import Productivity from "./Productivity";
import PhotosandVideos from "./PhotosandVideos";
import Connection from "./Connection";
import Apps from "./Apps";
import VisionOS from "./visionOS";

const MainVision = () => {
  return (
    <section className="w-full h-auto pt-10 relative">
      <Header />
      <Visionhomepage />
      <VisionPro />
      <Entertainment />
      <Productivity />
      <PhotosandVideos />
      <Connection />
      <Apps />
      <VisionOS />
    </section>
  );
};

export default MainVision;
