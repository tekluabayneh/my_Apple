import React, { forwardRef } from "react";

const Entertainment = (poor, ref) => {
  return (
    <>
      <div ref={ref} className="w-full flex gap-20 pl-5 pb-20">
        <div>
          <h2 className="text-[12px] text-gray-400">Explore Entertainment</h2>
          <ul className="flex flex-col gap-2">
            <li className="text-[20px] font-semibold">
              <a href="/">Explore Entertainment</a>
            </li>
            <li className="text-[20px] font-semibold">
              <a href="/">Apple One</a>
            </li>
            <li className="text-[20px] font-semibold">
              <a href="/">Apple TV+</a>
            </li>
            <li className="text-[20px] font-semibold">
              <a href="/">Apple Music</a>
            </li>
            <li className="text-[20px] font-semibold">
              <a href="/">Apple Arcade</a>
            </li>
            <li className="text-[20px] font-semibold">
              <a href="/">Apple Fitness+</a>
            </li>
            <li className="text-[20px] font-semibold">
              <a href="/">Apple News+</a>
            </li>
            <li className="text-[20px] font-semibold">
              <a href="/">Apple Podcasts</a>
            </li>
            <li className="text-[20px] font-semibold">
              <a href="/">Apple Books</a>
            </li>
            <li className="text-[20px] font-semibold">
              <a href="/">App Store</a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-[12px] text-gray-400">Support</h2>
          <ul className="flex flex-col gap-2">
            <li className="text-[12px]">
              <a href="/">Apple TV+ Support</a>
            </li>
            <li className="text-[12px]">
              <a href="/">Apple Music Support</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default forwardRef(Entertainment);
