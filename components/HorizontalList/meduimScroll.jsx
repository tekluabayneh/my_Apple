import React, { useRef } from "react";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
const Medium_HorizontalList = ({
  item,
  imageUrls,
  width,
  blackTextIndices,
}) => {
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
          className="w-full p-1 gap-4 mt-6 flex  h-auto overflow-y-hidden  overflow-x-scroll relative"
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
                className="h-[29rem] w-96 p-5 pt-11 pb-4 bg-center  bg-contain bg-no-repeat rounded-2xl flex-shrink-0 z-10 cursor-pointer shadow-xl hover:shadow-custom transition-all flex flex-col justify-end bg-white hover:scale-105 transition-all"
              >
                <div className="flex gap-2 text-center justify-center pb-2">
                  <span className="w-3 h-3 bg-blue-600 rounded-full"></span>
                  <span className="w-3 h-3 bg-purple-600 rounded-full"></span>
                  <span className="w-3 h-3 bg-pink-600 rounded-full"></span>
                  <span className="w-3 h-3 bg-gray-600 rounded-full"></span>
                </div>
                <span className="text-xs text-orange-500">{item.msg}</span>
                <div className=" flex flex-col gap-5">
                  <h1 className=" text-sm">{item.title}</h1>
                  <p className=" text-xs">{item.price}</p>
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

export default Medium_HorizontalList;
