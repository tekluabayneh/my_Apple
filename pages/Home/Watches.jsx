import React from "react";
import watch2 from "../../assets/10003.jpg";
import watch from "../../assets/1000small4.jpg";
import airpod from "../../assets/1000small5.jpg";
import girl from "../../assets/1000small6.jpg";
import laptop from "../../assets/10005.jpg";
import iphone from "../../assets/10007.jpg";
import Buttons from "./Buttons";

import { FaApple } from "react-icons/fa";

const Watches = () => {
  return (
    <>
      <section className="w-full h-[400vh] md:h-[250vh] grid xs:grid-cols-1 md:grid-cols-2 gap-4 px-2">
        <div
          style={{
            backgroundImage: `url(${watch2})`,
          }}
          className="w-[100%] bg-cover h-[100%] text-center pt-10  rounded-sm bg-center"
        >
          <div className="flex flex-col justify-center">
            <h3 class="">
              <span class="flex justify-center items-center text-[2rem] font-semibold">
                <FaApple className="cursor-pointer" /> Watch
              </span>
            </h3>
            <span className="text-gray-400 leading-tight">Series 10</span>
            <p class="text[18px] font-bold">Thinstant classic.</p>
            <div className="flex justify-center">
              <Buttons size={true} />
            </div>
          </div>
        </div>

        <div
          style={{
            backgroundImage: `url(${watch})`,
          }}
          className="w-[100%] h-[100%] pt-10 rounded-sm bg-cover bg-center"
        >
          <div className="flex flex-col justify-center">
            <h3 class="">
              <span class="flex justify-center items-center text-[2rem] font-semibold text-white">
                <FaApple className="cursor-pointer" /> Watch
              </span>
            </h3>
            <span className="text-gray-400 leading-tight text-red-600 flex justify-center">
              unltra 2
            </span>
            <p class="text[18px] font-bold capitalize text-gray-100 flex justify-center">
              new finish. never quit.
            </p>
            <div className="flex justify-center">
              <Buttons size={true} />
            </div>
          </div>
        </div>

        <div
          style={{
            backgroundImage: `url(${airpod})`,
          }}
          className="w-[100%] h-[100%]   rounded-sm bg-cover bg-center"
        >
          <div className="flex flex-col justify-end items-center h-[100%] pb-12">
            <h3 class="">
              <span class="flex justify-center items-center text-[2rem] font-semibold text-white">
                AirPods Pro 2
              </span>
            </h3>

            <p class="text[18px] font-bold capitalize text-gray-100 flex justify-center">
              now with hearing aid feature.
            </p>
            <div className="flex justify-center">
              <Buttons size={true} />
            </div>
          </div>
        </div>

        <div
          style={{
            backgroundImage: `url(${girl})`,
          }}
          className="w-[100%] h-[100%]  rounded-sm bg-cover bg-center"
        >
          <div className="flex flex-col justify-end items-center h-[100%] pb-12">
            <h3 class="">
              <span class="flex justify-center items-center text-[2rem] font-semibold text-white">
                AirPods 4
              </span>
            </h3>
            <span className="text-white leading-tight flex justify-center">
              iconic now supersonic
            </span>
            <p class="text[18px] font-bold capitalize text-white flex justify-center">
              available with active noise cancellation
            </p>
            <div className="flex justify-center">
              <Buttons size={true} />
            </div>
          </div>
        </div>

        <div
          style={{
            backgroundImage: `url(${laptop})`,
          }}
          className="w-[100%] h-[100%]  rounded-sm bg-cover bg-center pt-10"
        >
          <div className="flex flex-col justify-center">
            <h3 class="">
              <span class="flex justify-center items-center text-[2rem] font-semibold text-black">
                MackBook Air
              </span>
            </h3>

            <p class="text[18px] font-bold capitalize text-black flex justify-center">
              lean mean. m3 machine
            </p>
            <div className="flex justify-center">
              <Buttons size={true} />
            </div>
          </div>
        </div>

        <div
          style={{
            backgroundImage: `url(${iphone})`,
          }}
          className="w-[100%] h-[100%]  rounded-sm bg-cover bg-center pt-10"
        >
          <div className="flex flex-col justify-center">
            <h3 class="">
              <span class="flex justify-center items-center text-[2rem] font-semibold text-black">
                <FaApple className="cursor-pointer" /> Trade in
              </span>
            </h3>
            <p class="text[18px] font-bold capitalize text-black flex justify-center">
              <span>get $180-$650 in credit when you</span>
            </p>
            <p class="text[18px] font-bold capitalize text-black flex justify-center">
              <span>trade in iphone 12 or higher,</span>
            </p>
            <div className="flex justify-center">
              <Buttons size={true} message={true} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Watches;
