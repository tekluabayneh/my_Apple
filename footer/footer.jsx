import React, { useRef, useState } from "react";
import data from "../../data/footer.json";
import "../../Style.css";
import { IoArrowDownCircle, IoVolumeHigh } from "react-icons/io5";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";

const Footer = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const listContainer = useRef(null);
  const handleToggle = (index, e) => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="w-full h-auto flex flex-col gap-4 mt-10 px-5 bg-gray-100 py-5">
      <div className="flex flex-col gap-5">
        {Array.from(data.footer).map((fo, index) => {
          return (
            <p key={index} className="text-[11px] text-gray-500 leading-4">
              {index + 1} {fo.description}
            </p>
          );
        })}
      </div>
      <hr className="text-black" />
      <div className="pt-5 grid xs:grid-cols-1 xs:gap-4  md:grid-cols-5 gap-1">
        {Array.from(data.footerNav).map((foItems, index) => {
          return (
            <div
              ref={listContainer}
              key={index}
              className="flex  flex-col gap-1"
            >
              <div className="w-full xs:flex justify-between xs:border-b-2 md:border-b-0">
                <h5 className="text-xs text-black  xs:pb-1 ">
                  {foItems.title}
                </h5>
                <h1
                  onClick={(e) => handleToggle(index, e)}
                  className="pr-1 cursor-pointer md:hidden"
                >
                  {isExpanded ? (
                    <FaArrowDown size={15} />
                  ) : (
                    <FaArrowUp size={15} />
                  )}
                </h1>
              </div>
              <ul
                className={`flex flex-col gap-2   md:h-auto overflow-hidden ${
                  isExpanded ? `h-auto` : `xs:h-1`
                } `}
              >
                {foItems.items.map((item, index) => (
                  <li
                    onClick={() => handleToggle(index)}
                    key={index}
                    className="text-[11px] text-gray-500 list-none"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
      <p className="text-[12px]">
        More ways to shop: Find an Apple Store or other retailer near you. Or
        call 1-800-MY-APPLE.
      </p>
      <hr />
    </div>
  );
};

export default Footer;
