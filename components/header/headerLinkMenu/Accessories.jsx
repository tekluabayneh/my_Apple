import React, { forwardRef } from "react";

const Accessories = (poor, ref) => {
  return (
    <>
      <div ref={ref} className="w-full flex gap-20 pl-5 pb-20">
        <div>
          <h2 className="text-[12px] text-gray-400">Shop Accessories</h2>
          <ul className="flex flex-col gap-2">
            <li className="text[20px] font-semibold">
              <a href="/">Shop All Accessories</a>
            </li>
            <li className="text-[20px] font-semibold">
              <a href="/">Mac</a>
            </li>
            <li className="text-[20px] font-semibold">
              <a href="/">iPad</a>
            </li>
            <li className="text-[20px] font-semibold">
              <a href="/">iPhone</a>
            </li>
            <li className="text-[20px] font-semibold">
              <a href="/">Apple Watch</a>
            </li>
            <li className="text-[20px] font-semibold">
              <a href="/">Apple Vision Pro</a>
            </li>
            <li className="text-[20px] font-semibold">
              <a href="">AirPods</a>
            </li>
            <li className="text-[20px] font-semibold">
              <a href="/">TV & Home</a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-[12px] text-gray-400">Explore Accessories</h2>
          <ul className="flex flex-col gap-2">
            <li className="text-[12px]">
              <a href="/">Made by Apple</a>
            </li>
            <li className="text-[12px]">
              <a href="/">Beats by Dr. Dre</a>
            </li>
            <li className="text-[12px]">
              <a href="/">AirTag</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default forwardRef(Accessories);
