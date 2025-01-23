import React, { forwardRef } from "react";

const Vision = (poor, ref) => {
  return (
    <>
      <div ref={ref} className="w-full flex gap-20 pl-5 pb-20">
        <div className="">
          <h2 className="text-[12px] text-gray-400">Explore Vision</h2>
          <ul className="flex flex-col gap-2">
            <li className="text-[20px] font-semibold">
              <a href="#" className="">
                Explore Apple Vision Pro
              </a>
            </li>
            <li className="text-[12px] font-normal">
              <a href="#" className="">
                Guided Tour
              </a>
            </li>
            <li className="text-[12px] font-normal">
              <a href="#" className="">
                Tech Specs
              </a>
            </li>
          </ul>
        </div>
        <div className="">
          <h2 className="text-[12px] text-gray-400">Shop Vision</h2>
          <ul className="flex flex-col gap-2">
            <li className="text-[12px]">
              <a href="#" className="">
                Shop Apple Vision Pro
              </a>
            </li>
            <li className="text-[12px]">
              <a href="#" className="">
                Apple Vision Pro Accessories
              </a>
            </li>
            <li className="text-[12px]">
              <a href="#" className="">
                Book a Demo
              </a>
            </li>
            <li className="text-[12px]">
              <a href="#" className="">
                Financing
              </a>
            </li>
          </ul>
        </div>
        <div className="">
          <h2 className="text-[12px] text-gray-400">More from Vision</h2>
          <ul className="flex flex-col gap-2">
            <li className="text-[12px]">
              <a href="#" className="">
                Apple Vision Pro Support
              </a>
            </li>
            <li className="text-[12px]">
              <a href="#" className="">
                AppleCare+
              </a>
            </li>
            <li className="text-[12px]">
              <a href="#" className="">
                visionOS 2
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default forwardRef(Vision);
