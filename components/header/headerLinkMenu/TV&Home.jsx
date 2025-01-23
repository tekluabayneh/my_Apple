import React, { forwardRef } from "react";

const TVHome = (poor, ref) => {
  return (
    <>
      <div ref={ref} className="w-full flex gap-20 pl-5 pb-20">
        <div>
          <h2 className="text-[12px] text-gray-400">Explore TV & Home</h2>
          <ul className="flex flex-col gap-2">
            <li className="text-[20px] font-semibold">
              <a href="/">Explore TV & Home</a>
            </li>
            <li className="text-[20px] font-semibold">
              <a href="/">Apple TV 4K</a>
            </li>
            <li className="text-[20px] font-semibold">
              <a href="/">HomePod</a>
            </li>
            <li className="text-[20px] font-semibold">
              <a href="/">HomePod mini</a>
            </li>
          </ul>
        </div>{" "}
        <div>
          <h2 className="text-[12px] text-gray-400">Shop TV & Home</h2>
          <ul className="flex flex-col gap-2">
            <li className="text-[12px]">
              <a href="/">Shop Apple TV 4K</a>
            </li>
            <li className="text-[12px]">
              <a href="/">Shop HomePod</a>
            </li>
            <li className="text-[12px]">
              <a href="/">Shop HomePod mini</a>
            </li>
            <li className="text-[12px]">
              <a href="/">Shop Siri Remote</a>
            </li>
            <li className="text-[12px]">
              <a href="/">TV & Home Accessories</a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-[12px] text-gray-400">More from TV & Home</h2>
          <ul className="flex flex-col gap-2">
            <li>
              <a href="/">Apple TV Support</a>
            </li>
            <li className="text-[12px]">
              <a href="/">HomePod Support</a>
            </li>
            <li className="text-[12px]">
              <a href="/">AppleCare+</a>
            </li>
            <li className="text-[12px]">
              <a href="/">Apple TV app</a>
            </li>
            <li className="text-[12px]">
              <a href="/">Apple TV+</a>
            </li>
            <li className="text-[12px]">
              <a href="/">Home app</a>
            </li>
            <li className="text-[12px]">
              <a href="/">Apple Music</a>
            </li>
            <li className="text-[12px]">
              <a href="/">Siri</a>
            </li>
            <li className="text-[12px]">
              <a href="/">AirPlay</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default forwardRef(TVHome);
