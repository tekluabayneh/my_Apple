import React, { useRef } from "react";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import { FaPlus } from "react-icons/fa";

const MacHorizontal = ({ item, imageUrls, width, blackTextIndices }) => {
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
      <section className="flex  flex-col gap-5">
        <section
          ref={containerRef}
          className="w-full p-1 gap-8 mt-6 flex h-auto overflow-y-hidden  overflow-x-scroll relative"
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
                className="h-[34rem] relative w-96 p-5 pt-8 bg-center  bg-cover rounded-2xl flex-shrink-0 z-10 cursor-pointer shadow-xl hover:shadow-custom transition-all hover:scale-105 "
              >
                <div className=" flex flex-col gap-2 ">
                  <h1 className="text-xs">{item.title}</h1>
                  <p className="text-xl font-bold">{item.SubTitle}</p>
                </div>
                <p className="absolute bottom-3 right-5 w-9 h-9 bg-gray-300 z-10  rounded-full text-white cursor-pointer text-center pt-2 pl-2">
                  <FaPlus size={20} color="black" />
                </p>
              </div>
            );
          })}
        </section>
        <div className="z-20 w-full  left-0 flex gap-3 justify-end">
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

export default MacHorizontal;
