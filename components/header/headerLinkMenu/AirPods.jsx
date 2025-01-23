import React, { forwardRef } from "react";

const AirPods = (poor, ref) => {
  return (
    <>
      <div ref={ref} className="w-fulll flex gap-20 pl-5 pb-20">
        <div className="">
          <h2 className="text-[12px] text-gray-400">Explore AirPods</h2>
          <ul className="flex flex-col gap-2">
            <li className="text-[20px] font-semibold">
              <a href="#">Explore All AirPods</a>
            </li>
            <li className="text-[20px] font-semibold">
              <a href="#">AirPods 4</a>
            </li>
            <li className="text-[20px] font-semibold">
              <a href="#">AirPods Pro 2</a>
            </li>
            <li className="text-[20px] font-semibold">
              <a href="#">AirPods Max</a>
            </li>
            <li className="text-[20px] font-semibold">
              <a href="#">Compare AirPods</a>
            </li>
          </ul>
        </div>
        <div className="">
          <h2 className="text-[12px] text-gray-400">Shop AirPods</h2>
          <ul className="flex flex-col gap-2">
            <li className="text-[12px]">
              <a href="#">Shop AirPods</a>
            </li>
            <li className="text-[12px]">
              <a href="#">AirPods Accessories</a>
            </li>
          </ul>
        </div>
        <div className="">
          <h2 className="text-[12px] text-gray-400">More from AirPods</h2>
          <ul className="flex flex-col gap-2">
            <li className="text-[12px]">
              <a href="#">AirPods Support</a>
            </li>
            <li className="text-[12px]">
              <a href="#">AppleCare+ for Headphones</a>
            </li>
            <li className="text-[12px]">
              <a href="#">Hearing Health</a>
            </li>
            <li className="text-[12px]">
              <a href="#">Apple Music</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default forwardRef(AirPods);
