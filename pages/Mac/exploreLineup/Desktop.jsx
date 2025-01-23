import React, { useRef } from "react";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import MacBtn from "../../../components/macBtn/macBtn";
import { third } from "../img";
const Desktop = ({ item, height }) => {
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
          className="w-full p-1 gap-4 mt-6 flex h-auto   overflow-x-scroll"
        >
          {item.map((item, index) => {
            return (
              <div
                key={index}
                style={{
                  height: `${height}rem`,
                }}
                className=" w-96 p-5 pt-12 bg-center  bg-cover rounded-2xl flex-shrink-0 z-10 cursor-pointer"
              >
                <div className="w-full">
                  <img src={third[index]} alt="" />
                </div>
                <div className="text-center flex flex-col gap-5 ">
                  <span className="text-xs text-gray-400 text-center ">
                    {item.msg}
                  </span>
                  <h1 className="text-xl font-semibold text-center ">
                    {item.title}
                  </h1>
                  <p className="text-sm text-center ">{item.SubTitle}</p>
                  <p className=" text-xl text-center ">{item.description}</p>
                  <p className=" text-xs text-center">{item.price}</p>
                </div>

                <div className="w-full flex justify-center">
                  <MacBtn />
                </div>
              </div>
            );
          })}
        </section>
        <div className="z-20 w-full  flex gap-5 justify-end">
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

export default Desktop;
