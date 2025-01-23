import React from "react";
import "../../../Style.css";
import { IoSearchOutline, IoArrowForward } from "react-icons/io5";
const Search = () => {
  return (
    <>
      <div className="w-full flex flex-col gap-5 pl-5 pb-20">
        <div className="flex gap-1 items-center p-1">
          <div className="icon">
            <IoSearchOutline className="cursor-pointer text-[30px]" />
          </div>
          <input
            className="w-full p-3  text-[20px] font-semibold text-black placeholder:text-[20px] placeholder:font-semibold text-black outline-none rounded"
            type="text"
            autoFocus
            placeholder="Search Apple.Com"
          />
        </div>
        <div className="flex flex-col item-center gap-2">
          <h2 className="text-[12px] text-gray-400">quick links</h2>
          <ul className="flex flex-col gap-3">
            <li className="flex items-center gap-1 cursor-pointer">
              <span>
                <IoArrowForward className="cursor-pointer text-[15px]" />
              </span>
              <span className="text-[12px]">holiday Store</span>
            </li>
            <li className="flex items-center gap-1 cursor-pointer">
              <span>
                <IoArrowForward className="cursor-pointer text-[15px]" />
              </span>
              <span className="text-[12px]">find a gifts</span>
            </li>
            <li className="flex items-center gap-1 cursor-pointer">
              <span>
                <IoArrowForward className="cursor-pointer text-[15px]" />
              </span>
              <span className="text-[12px]">apple gifts card</span>
            </li>

            <li className="flex items-center gap-1 cursor-pointer">
              <span>
                <IoArrowForward className="cursor-pointer text-[15px]" />
              </span>
              <span className="text-[12px]">apple vision pro</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Search;
