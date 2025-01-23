import React, { useRef } from "react";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
const HorizontalList = ({ item, imageUrls, width }) => {
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
          className="w-full p-1 gap-4 mt-6 flex h-auto overflow-y-hidden  overflow-x-scroll"
        >
          {item.map((item, index) => {
            return (
              <div
                key={index}
                style={{
                  width: `${width}rem`,
                }}
                className="h-[25rem] bg-white w-96 p-5 text-center pt-12  rounded-2xl flex-shrink-0 z-10 cursor-pointer shadow-xl hover:shadow-custom transition-all"
              >
                <div className=" flex flex-col gap-2 ">
                  <h1 className="text-xl font-semibold">{item.title}</h1>
                  <p className="text-sm">{item.Sub_title}</p>
                  <p className=" text-xs text-blue-500 hover:underline cursor-pointer">
                    {item.link}
                  </p>
                </div>
                <div className="w-full bg-center  bg-cover py-1">
                  <img
                    className="w-full h-48 object-cover "
                    src={imageUrls[index]}
                    alt=""
                  />
                </div>
                <p className="text-center text-xs text-gray-400 px-10">
                  {item.description}
                </p>
              </div>
            );
          })}
        </section>
        <div className="z-20 w-full flex justify-center gap-5 py-5">
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
