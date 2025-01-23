import React, { forwardRef } from "react";

const IPad = (poor, ref) => {
  return (
    <>
      <div ref={ref} className="w-full pl-5 flex gap-20 pb-20">
        <div className="">
          <h2 className="text-[12px] text-gray-400">Explore iPad</h2>
          <ul className="">
            <li className="text-[20px] font-semibold">
              <a className="">Explore All iPad</a>
            </li>
            <li className="text-[20px] font-semibold">
              <a className="">iPad Pro</a>
            </li>
            <li className="text-[20px] font-semibold">
              <a className="">iPad Air</a>
            </li>
            <li className="text-[20px] font-semibold">
              <a className="">iPad</a>
            </li>
            <li className="text-[20px] font-semibold">
              <a className="">iPad mini</a>
            </li>
            <li className="text-[20px] font-semibold">
              <a className="">Apple Pencil</a>
            </li>
            <li className="text-[20px] font-semibold">
              <a className="">Keyboards</a>
            </li>
            <li className="text-[12px] font-semibold">
              <a className="">Compare iPad</a>
            </li>
            <li className="text-[12px] font-semibold">
              <a className="">Why iPad</a>
            </li>
          </ul>
        </div>

        <div className="">
          <h2 className="text-[12px] text-gray-400">Shop iPad</h2>
          <ul className="flex flex-col gap-2">
            <li className="text-[12px]">
              <a className="">Shop iPad</a>
            </li>
            <li className="text-[12px]">
              <a className="">iPad Accessories</a>
            </li>
            <li className="text-[12px]">
              <a className="">Apple Trade In</a>
            </li>
            <li className="text-[12px]">
              <a className="">Financing</a>
            </li>
          </ul>
        </div>

        <div className="">
          <h2 className="text-[12px] text-gray-400">More from iPad</h2>
          <ul className="flex flex-col gap-2">
            <li className="text-[12px]">
              <a className="">iPad Support</a>
            </li>
            <li className="text-[12px]">
              <a className="">AppleCare+ for iPad</a>
            </li>
            <li className="text-[12px]">
              <a className="">iPadOS 18</a>
            </li>
            <li className="text-[12px]">
              <a className="">Apple Intelligence</a>
            </li>
            <li className="text-[12px]">
              <a className="">Apps by Apple</a>
            </li>
            <li className="text-[12px]">
              <a className="">iCloud+</a>
            </li>
            <li className="text-[12px]">
              <a className="">Education</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default forwardRef(IPad);
