import React, { forwardRef } from "react";
import "./../../../Style.css";

const Store = (ppor, ref) => {
  return (
    <>
      <div ref={ref} className="w-full pb-20">
        <div className="flex pl-5 gap-20">
          <div className="">
            <h2 className="text-sm text-gray-400">Shop</h2>
            <ul className="">
              <li className="text-2xl font-semibold">
                <a href="/" className="">
                  Shop the Latest
                </a>
              </li>
              <li className="text-2xl font-semibold">
                <a href="/" className="">
                  Mac
                </a>
              </li>
              <li className="text-2xl font-semibold">
                <a href="/" className="">
                  iPad
                </a>
              </li>
              <li className="text-2xl font-semibold">
                <a href="/" className="">
                  iPhone
                </a>
              </li>
              <li className="text-2xl font-semibold">
                <a href="/" className="">
                  Apple Watch
                </a>
              </li>
              <li className="text-2xl font-semibold">
                <a href="/" className="">
                  Apple Vision Pro
                </a>
              </li>
              <li className="text-2xl font-semibold">
                <a href="/" className="">
                  Accessories
                </a>
              </li>
            </ul>
          </div>

          <div className="">
            <h2 className="text-sm text-gray-400">Quick Links</h2>
            <ul className="flex flex-col gap-2">
              <li className="text-[13px]">
                <a href="/" className="">
                  Find a Store
                </a>
              </li>
              <li className="text-[13px]">
                <a href="/" className="">
                  Order Status
                </a>
              </li>
              <li className="text-[13px]">
                <a href="/" className="">
                  Apple Trade In
                </a>
              </li>
              <li className="text-[13px]">
                <a href="/" className="">
                  Financing
                </a>
              </li>
            </ul>
          </div>

          <div className="">
            <h2 className="text-sm text-gray-400">Shop Special Stores</h2>
            <ul className="flex flex-col gap-2">
              <li className="text-[12px]">
                <a href="/" className="">
                  Certified Refurbished
                </a>
              </li>
              <li className="text-[12px]">
                <a href="/" className="">
                  Education
                </a>
              </li>
              <li className="text-[12px]">
                <a href="/" className="">
                  Business
                </a>
              </li>
              <li className="text-[12px]">
                <a href="/" className="">
                  Veterans and Military
                </a>
              </li>
              <li className="text-[12px]">
                <a href="/" className="">
                  Government
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default forwardRef(Store);
