import React, { useEffect, useRef, useState } from "react";
import Swiper from "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs";
import one from "../../assets/scroll/1000ss1.jpg";
import tow from "../../assets/scroll/1000ss2.jpg";
import three from "../../assets/scroll/1000ss3.jpg";
import four from "../../assets/scroll/1000ss4.jpg";
import five from "../../assets/scroll/1000ss5.jpg";
import "../../Style.css";
const SmallHorizontallscroll = () => {
  const [stop, setstop] = useState(false);
  const iamges = [one, tow, three, four, five];
  const scroller_container = useRef(null);

  useEffect(() => {
    if (scroller_container.current) {
      const children = Array.from(scroller_container.current.children);
      let clonedNodes = children.map((item) => item.cloneNode(true));
      clonedNodes.forEach((clonedNode) =>
        scroller_container.current.appendChild(clonedNode)
      );
    }
  }, []);

  return (
    <>
      <div className="overflow-hidden  flex shadow space-x-5">
        <div
          ref={scroller_container}
          className="w-full gap-4 flex items-center justify-center animate-scroll-loop"
        >
          {iamges.map((img, index) => {
            return (
              <div
                key={index}
                className="group flex flex-col gap-2 w-[30%] h-[30vh] cursor-pointer transition-all transition-delay  duration-400 z-50 ease-in-out-custom  relative w-52 h-32 rounded max-w-none flex-shrink-0 "
              >
                <img
                  className=" w-full h-[100%] bg-center bg-contain rounded-lg"
                  src={img}
                  alt=""
                />
                <div className="hidden group-hover:flex absolute  top-0 left-0 z-10 w-full  h-[100%] bg-black flex items-center justify-center bg-opacity-50">
                  <button className="px-6 py-1 rounded-2xl bg-white text-black opacity-100 z-20">
                    Watch
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default SmallHorizontallscroll;
