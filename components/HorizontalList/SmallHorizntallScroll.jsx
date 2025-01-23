import React, { useRef } from "react";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
const Small_HorizontalList = ({ item, NoColor }) => {
  const containerRef = useRef(null);
  const colorPairs = [
    ["#000000", "#68cc45"],
    ["#000000", "#007aff"],
    ["#000000", "#68cc45"],
    ["#000000", "#007aff"],
    ["#000000", "#ac39ff"],
    ["#000000", "#000000"],
  ];

  // Get a random color from the colors array
  const getColorPair = (index) => {
    return colorPairs[index % colorPairs.length];
  };

  // Function to apply colors to halves of the sentence
  const styleTextWithColorHalves = (text, index) => {
    const midIndex = Math.floor(text.length / 2);
    const firstHalf = text.slice(0, midIndex);
    const secondHalf = text.slice(midIndex);

    const [color1, color2] = getColorPair(index);
    return (
      <span>
        <span style={{ color: NoColor ? "" : color1 }}>{firstHalf}</span>
        <span style={{ color: NoColor ? "" : color2 }}>{secondHalf}</span>
      </span>
    );
  };

  const handelScroll = (diraction) => {
    if (containerRef.current) {
      if (diraction == "right") {
        containerRef.current.scrollBy({
          left: 300,
          behavior: "smooth",
        });
      } else {
        containerRef.current.scrollBy({
          left: -300,
          behavior: "smooth",
        });
      }
    }
  };
  return (
    <>
      <section className="relative">
        <section
          ref={containerRef}
          className="w-full p-1 gap-4 mt-10 flex h-auto overflow-y-hidden  overflow-x-scroll relative"
        >
          {item.map((item, index) => {
            return (
              <div
                key={index}
                className="h-60 w-72 p-5 rounded-2xl flex-shrink-0 z-10 cursor-pointer shadow-custom hover:scale-105 transition-all"
              >
                <div className="pl-3 flex flex-col">
                  <div
                    className="w-12"
                    dangerouslySetInnerHTML={{ __html: item.image }}
                  ></div>
                  <h1 className=" text-xl font-semibold">
                    {styleTextWithColorHalves(item.title, index)}
                  </h1>
                </div>
              </div>
            );
          })}
        </section>
        <div className="z-20 w-full absolute top-32 left-0 flex justify-between">
          <button
            onClick={() => handelScroll("left")}
            className="bg-black text-white w-10 opacity-10 hover:opacity-100 h-10 rounded-full cursor-pointer"
          >
            <IoChevronBack size={38} />
          </button>
          <button
            onClick={() => handelScroll("right")}
            className="bg-black text-white w-10 opacity-10 hover:opacity-100 h-10 rounded-full cursor-pointer"
          >
            <IoChevronForward size={38} />
          </button>
        </div>
      </section>
    </>
  );
};

export default Small_HorizontalList;
