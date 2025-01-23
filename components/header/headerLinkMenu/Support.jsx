import React, { forwardRef } from "react";

const Support = (poor, ref) => {
  return (
    <>
      <div ref={ref} className="w-full flex gap-20 pl-5 pb-20">
        <div>
          <h2 className="text-[12px] text-gray-400">Explore Support</h2>
          <ul className="flex flex-col gap-2">
            <li className="text-[20px] font-semibold">
              <a href="">iPhone</a>
            </li>
            <li className="text-[20px] font-semibold">
              <a href="">Mac</a>
            </li>
            <li className="text-[20px] font-semibold">
              <a href="">iPad</a>
            </li>
            <li className="text-[20px] font-semibold">
              <a href="">Watch</a>
            </li>
            <li className="text-[20px] font-semibold">
              <a href="">Apple Vision Pro</a>
            </li>
            <li className="text-[20px] font-semibold">
              <a href="">AirPods</a>
            </li>
            <li className="text-[20px] font-semibold">
              <a href="">Music</a>
            </li>
            <li className="text-[12px]">
              <a href="">TV</a>
            </li>
            <li className="text-[12px]">
              <a href="">Explore Support</a>
            </li>
          </ul>
        </div>
        <div data-analytics-region="get help">
          <h2 className="text-[12px] text-gray-400">Get Help</h2>
          <ul className="flex flex-col gap-2">
            <li className="text-[12px]">
              <a href="">Community</a>
            </li>
            <li className="text-[12px]">
              <a href="">Check Coverage</a>
            </li>
            <li className="text-[12px]">
              <a href="">Repair</a>
            </li>
            <li className="text-[12px]">
              <a href="">Contact Us</a>
            </li>
          </ul>
        </div>
        <div data-analytics-region="helpful topics">
          <h2 className="text-[12px] text-gray-400">Helpful Topics</h2>
          <ul className="flex flex-col gap-2">
            <li className="text-[12px]">
              <a href="">Get AppleCare+</a>
            </li>
            <li className="text-[12px]">
              <a href="">Apple Account and Password</a>
            </li>
            <li className="text-[12px]">
              <a href="">Billing &amp; Subscriptions</a>
            </li>
            <li className="text-[12px]">
              <a href="">Accessibility</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default forwardRef(Support);
