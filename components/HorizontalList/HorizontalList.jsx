import React, { useRef } from "react";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
const HorizontalList = ({ item, imageUrls, width, blackTextIndices }) => {
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
    <>
      <section className="relative">
        <section
          ref={containerRef}
          className="w-full p-1 gap-4 mt-6 flex h-auto overflow-y-hidden  overflow-x-scroll relative"
        >
          {item.map((item, index) => {
            return (
              <div
                key={index}
                style={{
                  backgroundImage: `url(${imageUrls[index]})`,
                  width: `${width}rem`,
                  color: blackTextIndices.includes(index) ? "white" : "black",
                }}
                className="h-[28rem] w-96 p-5 pt-12 bg-center  bg-cover rounded-2xl flex-shrink-0 z-10 cursor-pointer shadow-xl hover:shadow-custom transition-all"
              >
                <div className=" flex flex-col gap-2 ">
                  <span className="text-xs text-gray-400">{item.msg}</span>
                  <h1 className="text-xl font-semibold">{item.title}</h1>
                  <p className="text-sm">{item.Sub_title}</p>
                  <p className=" text-xs">{item.description}</p>
                </div>
              </div>
            );
          })}
        </section>
        <div className="z-20 w-full absolute top-52 left-0 flex justify-between">
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

export default HorizontalList;
