import React, { forwardRef } from "react";

const Watch = (ppor, ref) => {
  return (
    <>
      <div ref={ref} className="w-full flex pl-5 gap-20 pb-20">
        <div className="">
          <h2 className="text-[12px] text-gray-400">Explore Watch</h2>
          <ul className="flex flex-col gap-2">
            <li className="text-[24px] font-semibold">
              <a href="#">Explore All Apple Watch</a>
            </li>
            <li className="text-[24px] font-semibold">
              <a href="#">Apple Watch Series 10</a>
            </li>
            <li className="text-[24px] font-semibold">
              <a href="#">Apple Watch Ultra 2</a>
            </li>
            <li className="text-[24px] font-semibold">
              <a href="#">Apple Watch SE</a>
            </li>
            <li className="text-[24px] font-semibold">
              <a href="#">Apple Watch Nike</a>
            </li>
            <li className="text-[24px] font-semibold">
              <a href="#">Apple Watch Hermès</a>
            </li>
            <li className="text-[14px] font-semibold">
              <a href="#">Compare Watch</a>
            </li>
            <li className="text-[14px] font-semibold">
              <a href="#">Why Apple Watch</a>
            </li>
          </ul>
        </div>
        <div className="">
          <h2 className="text-[12px] text-gray-400">Shop more</h2>
          <ul className="flex flex-col gap-2">
            <li className="text-[12px]">
              <a href="#">Shop Apple Watch</a>
            </li>
            <li className="text-[12px]">
              <a href="#">Apple Watch Studio</a>
            </li>
            <li className="text-[12px]">
              <a href="#">Apple Watch Bands</a>
            </li>
            <li className="text-[12px]">
              <a href="#">Apple Watch Accessories</a>
            </li>
            <li className="text-[12px]">
              <a href="#">Apple Trade In</a>
            </li>
            <li className="text-[12px]">
              <a href="#">Financing</a>
            </li>
          </ul>
        </div>
        <div className="">
          <h2 className="text-[12px] text-gray-400">more from watch</h2>
          <ul className="flex flex-col gap-2">
            <li className="text-[12px]">
              <a href="#">Apple Watch Support</a>
            </li>
            <li className="">
              <a href="#">AppleCare+</a>
            </li>
            <li className="text-[12px]">
              <a href="#">watchOS 11</a>
            </li>
            <li className="text-[12px]">
              <a href="#">Apple Watch For Your Kids</a>
            </li>
            <li className="text-[12px]">
              <a href="#">Apps by Apple</a>
            </li>
            <li className="text-[12px]">
              <a href="#">Apple Fitness+</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default forwardRef(Watch);
