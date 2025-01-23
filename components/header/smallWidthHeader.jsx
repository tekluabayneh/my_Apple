import React, { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import "../../Style.css";
import clsx from "clsx";
const SmallWidthHeader = ({ setIsclosed, isClosed }) => {
  console.log(isClosed);
  return (
    <div
      className={clsx(
        "w-full absolute h-[100vh] duration-400 ease-in-out-custom top-0 left-0 flex items-start pl-5 md:h-0 bg-white md:transform md:-translate-y-[50rem]",
        isClosed ? "-translate-y-[80rem]" : "-translate-y-0"
      )}
    >
      <IoCloseOutline
        onClick={() => setIsclosed(true)}
        className="closeBtn absolute top-6 right-6 font-extrabold text-[50px] cursor-pointer"
      />
      <ul className="flex flex-col gap-5 pt-12">
        <li className="hover_store text-[28px] font-extrabold text-[#000] cursor-pointer">
          <a href="/Store">Store</a>
        </li>
        <li className="hover_mac text-[28px] font-extrabold text-[#000] cursor-pointer ">
          <a href="/Mac">Mac</a>
        </li>
        <li className="hover_ipad text-[28px] font-extrabold text-[#000] cursor-pointer ">
          <a href="/ipad">ipad</a>
        </li>
        <li className="hover_iphone text-[28px] font-extrabold text-[#000] cursor-pointer ">
          <a href="/iphone">iphone</a>
        </li>
        <li className="hover_watch text-[28px] font-extrabold text-[#000] cursor-pointer ">
          <a href="/watch">watch</a>
        </li>
        <li className="hover_vision text-[28px] font-extrabold text-[#000] cursor-pointer ">
          <a href="/vision">vision</a>
        </li>
        <li className="hover_airpods text-[28px] font-extrabold text-[#000] cursor-pointer ">
          <a href="/airpod">Airpods</a>
        </li>
        <li className="hover_tvandhoem text-[28px] font-extrabold whitespace-now tt-[#000000CC] cursor-pointer ">
          <a href="/Tv_Home">Tv& Home</a>
        </li>
        <li className="hover_entertainment text-[28px] font-extrabold text-[#000] cursor-pointer ">
          <a href="/Entertainment">Entertainment</a>
        </li>
        <li className="hover_accesory text-[28px] font-extrabold text-[#000] cursor-pointer ">
          <a href="/Accessories">Accessories</a>
        </li>
        <li className="hover_suport text-[28px] font-extrabold text-[#000] cursor-pointer ">
          <a href="/support">support</a>
        </li>
      </ul>
    </div>
  );
};

export default SmallWidthHeader;
