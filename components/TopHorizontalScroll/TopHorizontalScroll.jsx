import React, { useRef } from "react";
import "../../Style.css";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

const TopHorizontalScroll = ({ item, img, bgColor }) => {
  const containerRef = useRef(null);
  const handelScroll = (diraction) => {
    if (containerRef.current) {
      if (diraction == "right") {
        containerRef.current.scrollBy({
          left: 370,
          behavior: "smooth",
        });
      } else {
        containerRef.current.scrollBy({
          left: -370,
          behavior: "smooth",
        });
      }
    }
  };
  return (
    <section
      style={{
        background: bgColor ? "black" : "",
        color: bgColor ? "white" : "",
      }}
      className="w-full h-32 bg-[#fafafc] relative  flex gap-2 items-center overflow-y-hidden overflow-x-scroll"
    >
      <div
        ref={containerRef}
        className="w-full h-full relative  flex gap-2 items-center overflow-y-hidden overflow-x-scroll pt-5 px-10"
      >
        <div className="w-32 h-full flex-shrink-0 flex  gap-10">
          {item.map((item, index) => {
            return (
              <div
                key={index}
                className="w-full flex flex-col gap-2 items-center"
              >
                <img
                  className="w-14 h-14 object-contain"
                  src={img[index]}
                  alt="img"
                />
                <span className="text-xs text-gray-400 text-nowrap">
                  {item.title}
                </span>
              </div>
            );
          })}
        </div>
      </div>
      <div className="z-20 w-full h-full absolute top-0 left-0 flex justify-between">
        <button
          onClick={() => handelScroll("left")}
          className="bg-black text-white w-6 h-full opacity-10 hover:opacity-100  rounded cursor-pointer"
        >
          <IoChevronBack size={30} />
        </button>
        <button
          onClick={() => handelScroll("right")}
          className="bg-black text-white w-6 h-full opacity-10 hover:opacity-100 rounded cursor-pointer"
        >
          <IoChevronForward size={30} />
        </button>
      </div>
    </section>
  );
};

export default TopHorizontalScroll;
