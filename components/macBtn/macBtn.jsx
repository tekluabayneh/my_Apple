import React from "react";
import "../../Style.css";
import { IoChevronForward } from "react-icons/io5";
const MacBtn = () => {
  return (
    <div className="flex items-center gap-5 pt-5">
      <button className="bg-blue-600 rounded-2xl  text-white text-sm px-5 py-2">
        Learn more
      </button>
      <div className="text-blue-400 flex  items-center cursor-pointer">
        <span className="hover:underline"> Buy </span>
        <span className="tp-1">
          <IoChevronForward size={14} />
        </span>
      </div>
    </div>
  );
};

export default MacBtn;
