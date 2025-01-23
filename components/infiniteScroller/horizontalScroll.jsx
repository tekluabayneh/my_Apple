import React, { useEffect } from "react";
import Swiper from "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs";
import one from "../../assets/scroll/10002.jpg";
import tow from "../../assets/scroll/10003.jpg";
import three from "../../assets/scroll/10004.jpg";
import four from "../../assets/scroll/10005.jpg";
import five from "../../assets/scroll/10006.jpg";
const InfiniteHorizontallScroll = () => {
  useEffect(() => {
    // Initialize Swiper
    new Swiper(".swiper-container", {
      spaceBetween: 10,
      slidesPerView: 3,
      loop: true,

      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      speed: 3000,
      scrollbar: false,
      breakpoints: {
        400: {
          slidesPerView: 1.5,
        },
      },
    });
  }, []);

  return (
    <>
      <div className="mt-2 w-full h-[65vh] xs:h-[40vh] md:h-[65vh]   overflow-hidden mb-0 z-0 ">
        {/* Swiper container */}
        <div className="swiper-container">
          <div className="swiper-wrapper">
            <div className="swiper-slide relative">
              <img
                className="bg-contain bg-center w-full h-96 object-cover rounded-lg"
                src={tow}
                alt=""
              />
              <div className="w-full absolute bottom-12 left-1 flex gap-5 pl-1 items-center">
                <button className="text-nowrap text-black bg-white text-[12px] py-2 px-6 rounded-2xl">
                  Stream now
                </button>
                <p className="text-gray-50 font-bold text[10px]">
                  Drama Family, it's a killer
                </p>
              </div>
            </div>

            <div className="swiper-slide relative">
              <img
                className="w-full h-96  bg-center object-cover rounded-lg"
                src={one}
                alt=""
              />
              <div className="w-full absolute bottom-12 left-1 flex gap-5 pl-1 items-center">
                <button className="text-nowrap text-black rounded-2xl text-[12px]  bg-white py-2 px-6">
                  Stream now
                </button>
                <p className="text-gray-50 font-bold text[10px]">
                  Trailer, Catch up Now New season premiers
                </p>
              </div>
            </div>

            <div className="swiper-slide relative">
              <img
                className="w-full h-96 bg-center object-cover rounded-lg"
                src={three}
                alt=""
              />
              <div className="w-full absolute bottom-12 left-1 flex items-center gap-5 pl-1">
                <button className="text-nowrap text-black rounded-2xl  bg-white text-[12px] px-6 py-2">
                  stream now
                </button>
                <p className="text-gray-50 font-bold text[10px]">
                  Comedy, Will They Make History... or Fake it
                </p>
              </div>
            </div>

            <div className="swiper-slide w-[95%] h-96  relative">
              <img
                className=" w-full h-96 bg-center bg-cover rounded-lg"
                src={four}
                alt=""
              />
              <div className="w-full absolute bottom-12 left-1 flex gap-5 pl-1 items-center">
                <button className="text-nowrap text-black rounded-2xl  bg-white text-[12px] py-2 px-6">
                  Stream now
                </button>
                <p className="text-gray-50 font-bold text[10px]">
                  Comedy, Kindness make Comeback.
                </p>
              </div>
            </div>

            <div className="swiper-slide w-[95%] h-96 relative">
              <img
                className="w-full h-96 bg-center bg-cover rounded-lg"
                src={five}
                alt=""
              />
              <div className="w-full absolute bottom-12 left-1 flex gap-5 pl-1 items-center">
                <button className="text-nowrap text-black rounded-2xl  bg-white text-[12px] py-2 px-6">
                  Stream now
                </button>
                <p className="text-gray-50 font-bold text[10px]">
                  Emmy, Triller Award Winner
                </p>
              </div>
            </div>
          </div>
          {/* <div className="swiper-pagination"></div> */}
          {/* Pagination dots */}
        </div>
      </div>
    </>
  );
};

export default InfiniteHorizontallScroll;
