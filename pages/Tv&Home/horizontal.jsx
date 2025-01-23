import React from "react";
import HorizontalList from "./comhorizontal";
import content from "../../data/tv&homedata.json";
import { horizontalbanners1, horizontalbanners2 } from "./img";
const Horizontal = () => {
  return (
    <section className="w-full my-20">
      <div className="w-full text-center mt-20">
        <h1 className="text-5xl md:px-20 font-bold text-center">
          Every reason to turn your house into a smart home.
        </h1>
        <HorizontalList
          item={content.first}
          imageUrls={horizontalbanners1}
          width={20}
        />
      </div>
      <div className="w-full text-center mt-20">
        <h1 className="text-5xl md:px-20 font-bold text-center">
          Accessories. Around your home and across your devices.
        </h1>
        <p className="py-2 text-blue-500 hover:underline text-center cursor-pointer">
          Shop accessories
        </p>
        <HorizontalList
          item={content.second}
          imageUrls={horizontalbanners2}
          width={20}
        />
      </div>
    </section>
  );
};

export default Horizontal;
