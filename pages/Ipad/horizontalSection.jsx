import React, { useRef } from "react";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import MacBtn from "../../components/macBtn/macBtn";
import { four, five, six, seven, eight, nine } from "./img";
import { Imgfour, Imgfive, Imgsix, Imgseven, Imgeight } from "../Watch/img";
const Ipad_HorizontalList = ({
  item,
  imageUrls,
  width,
  blackTextIndices,
  NoImage,
}) => {
  const containerRef = useRef(null);

  const handelScroll = (diraction) => {
    if (containerRef.current) {
      if (diraction == "right") {
        containerRef.current.scrollBy({
          left: 470,
          behavior: "smooth",
        });
      } else {
        containerRef.current.scrollBy({
          left: -470,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <>
      <section className="">
        <section
          ref={containerRef}
          className="w-full p-1  mt-6 flex  h-auto overflow-y-hidden  overflow-x-scroll"
        >
          {item.map((item, index) => {
            return (
              <div
                key={index}
                style={{
                  width: `${width}rem`,
                  color: blackTextIndices.includes(index) ? "white" : "black",
                }}
                className="h-auto flex  flex-col justify-center p-5 pt-12 bg-center  bg-cover  flex-shrink-0 z-10"
              >
                <div className="w-full justify-center">
                  <img
                    className="w-72 h-72 bg-center object-contain m-auto py-5"
                    src={imageUrls[index]}
                    alt=""
                  />
                  <div className="w-full flex gap-2 justify-center ">
                    <span className="w-3 h-3 bg-purple-500 rounded-full ring-1"></span>
                    <span className="w-3 h-3 bg-red-500 rounded-full ring-1"></span>
                    <span className="w-3 h-3 bg-blue-500 rounded-full ring-1"></span>
                    <span className="w-3 h-3 bg-green-500 rounded-full ring-1"></span>
                    <span className="w-3 h-3 bg-black-500 rounded-full ring-1"></span>
                  </div>
                </div>
                <div className=" flex flex-col gap-2 justify-center text-center pt-7">
                  <h1 className="text-xl font-semibold">{item.title}</h1>
                  <p className="text-xs text-wrap w-60  m-auto">
                    {item.SubTitle}
                  </p>
                  <p className=" text-lg text-wrap ">{item.price}</p>
                  <div className="w-full h-auto flex justify-center pb-2 m-auto text-center">
                    <MacBtn />
                  </div>
                </div>
                <hr />
                <div className="flex flex-col gap-5 pt-6 justify-center text-center px-32">
                  <div>
                    <span>
                      <p className="text-lg font-bold">{item.SubSub_title}</p>
                      <p className="w-60 text-xs m-auto">{item.description}</p>
                    </span>
                  </div>
                  {/* sing */}
                  <div className="w-40 m-auto flex flex-col gap-4 justify-center ">
                    <span className="w-full m-auto">
                      {NoImage ? (
                        <img
                          className="w-10 ml-14"
                          src={Imgsix[index]}
                          alt="img"
                        />
                      ) : (
                        <img
                          className="w-10 ml-14"
                          src={four[index]}
                          alt="img"
                        />
                      )}
                    </span>
                    <span className="text-xs w-full">{item.brand_one}</span>
                  </div>
                  {/* single */}
                  <div className="w-40 m-auto flex flex-col gap-4 justify-center">
                    <span>
                      {NoImage ? (
                        " "
                      ) : (
                        <img className="w-10 ml-14" src={five[index]} alt="_" />
                      )}
                    </span>
                    <span className="text-xs w-full">{item.brand_tow}</span>
                  </div>
                  {/* single */}
                  <div className="w-40 m-auto flex flex-col gap-4 justify-center">
                    <span>
                      {NoImage ? (
                        <img
                          className="w-10 ml-14"
                          src={Imgfive[index]}
                          alt="img"
                        />
                      ) : (
                        <img
                          className="w-10 ml-14"
                          src={six[index]}
                          alt="img"
                        />
                      )}
                    </span>
                    <span className="text-xs w-full">{item.brand_three}</span>
                  </div>
                  {/* singlr */}
                  <div className="w-40 m-auto flex flex-col gap-4 justify-center">
                    <span>
                      {NoImage ? (
                        <img
                          className="w-10 ml-14"
                          src={Imgseven[index]}
                          alt="img"
                        />
                      ) : (
                        <img
                          className="w-10 ml-14"
                          src={seven[index]}
                          alt="img"
                        />
                      )}
                    </span>
                    <span className="text-xs w-full">{item.brand_four}</span>
                  </div>
                  {/* single */}
                  <div className="w-40 m-auto flex flex-col gap-4 justify-center">
                    <span>
                      {NoImage ? (
                        <img
                          className="w-10 ml-14"
                          src={Imgeight[index]}
                          alt="img"
                        />
                      ) : (
                        <img
                          className="w-4 ml-14"
                          src={eight[index]}
                          alt="img"
                        />
                      )}
                    </span>
                    <span className="text-xs w-full">{item.brand_five}</span>
                  </div>
                  {/* single */}
                  <div className="w-40 m-auto flex flex-col gap-4 justify-center">
                    <span>
                      {NoImage ? (
                        <img
                          className="w-10 ml-14"
                          src={Imgfour[index]}
                          alt="img"
                        />
                      ) : (
                        <img
                          className="w-10 ml-14"
                          src={nine[index]}
                          alt="img"
                        />
                      )}
                    </span>
                    <span className="text-xs w-full">{item.brand_six}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </section>
        <div className="sticky bottom-10 left-0 z-20 w-full  top-52 left-0 flex justify-end gap-5 p-4">
          <button
            onClick={() => handelScroll("left")}
            className="bg-gray-400 text-gray-200 w-8  h-8 rounded-full cursor-pointer pl-"
          >
            <IoChevronBack size={30} />
          </button>
          <button
            onClick={() => handelScroll("right")}
            className="bg-gray-400 text-gray-200 w-8  h-8 rounded-full cursor-pointer pl-"
          >
            <IoChevronForward size={30} />
          </button>
        </div>
      </section>
    </>
  );
};

export default Ipad_HorizontalList;
