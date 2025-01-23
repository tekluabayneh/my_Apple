import React, { forwardRef } from "react";

const Mac = (poor, ref) => {
  return (
    <>
      <div ref={ref} className="w-full pb-20">
        <div className="flex gap-20 pl-5">
          <div className="">
            <h2 className="text-[12px] text-gray-400">Explore Mac</h2>
            <ul className="">
              <li className="text-[24px] font-semibold">
                <a href="/" className="">
                  Explore All Mac
                </a>
              </li>
              <li className="text-[24px] font-semibold">
                <a href="/" className="">
                  MacBook Air
                </a>
              </li>
              <li className="text-[24px] font-semibold">
                <a href="/" className="">
                  MacBook Pro
                </a>
              </li>
              <li className="text-[24px] font-semibold">
                <a href="/" className="">
                  iMac
                </a>
              </li>
              <li className="text-[24px] font-semibold">
                <a href="/" className="">
                  Mac mini
                </a>
              </li>
              <li className="text-[24px] font-semibold">
                <a href="/" className="">
                  Mac Studio
                </a>
              </li>
              <li className="text-[24px] font-semibold">
                <a href="/" className="">
                  Mac Pro
                </a>
              </li>
              <li className="text-[24px] font-semibold">
                <a href="/" className="">
                  Displays
                </a>
              </li>
              <li className="text-[14px] font-semibold">
                <a href="/" className="">
                  Compare Mac
                </a>
              </li>
              <li className="text-[14px] font-semibold">
                <a href="/" className="">
                  Switch from PC to Mac
                </a>
              </li>
            </ul>
          </div>

          <div className="">
            <h2 className="text-[12px] text-gray-400">Shop Mac</h2>
            <ul className="flex flex-col gap-2">
              <li className="text-[13px]">
                <a href="/" className="">
                  Shop Mac
                </a>
              </li>
              <li className="text-[13px]">
                <a href="/" className="">
                  Mac Accessories
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
            <h2 className="text-[12px] text-gray-400">More from Mac</h2>
            <ul className="flex flex-col gap-2">
              <li className="text-[13px]">
                <a href="/" className="">
                  Mac Support
                </a>
              </li>
              <li className="text-[13px]">
                <a href="/" className="">
                  AppleCare+ for Mac
                </a>
              </li>
              <li class="text-[13px]">
                <a href="/" class="">
                  macOS Sequoia
                </a>
              </li>
              <li class="text-[13px]">
                <a href="/" class="">
                  Apple Intelligence
                </a>
              </li>
              <li class="text-[13px]">
                <a href="/" class="">
                  Apps by Apple
                </a>
              </li>
              <li class="text-[13px]">
                <a href="/" class="">
                  Continuity
                </a>
              </li>
              <li class="text-[13px]">
                <a href="/" class="">
                  iCloud+
                </a>
              </li>
              <li class="text-[13px]">
                <a href="/" class="">
                  Mac for Business
                </a>
              </li>
              <li class="text-[13px]">
                <a href="/" class="">
                  Education
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default forwardRef(Mac);
