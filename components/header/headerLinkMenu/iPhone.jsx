import React, { forwardRef } from "react";

const IPhone = (poor, ref) => {
  return (
    <>
      <div ref={ref} className="w-full flex gap-20 pl-5 pb-20">
        <div>
          <h2 className="text-[12px] text-gray-400">Explore iPhone</h2>
          <ul className="flex flex-col gap-2">
            <li className="text-[20px] font-semibold">
              <a>Explore All iPhone</a>
            </li>
            <li className="text-[20px] font-semibold">
              <a>iPhone 16 Pro</a>
            </li>
            <li className="text-[20px] font-semibold">
              <a>iPhone 16</a>
            </li>
            <li className="text-[20px] font-semibold">
              <a>iPhone 15</a>
            </li>
            <li className="text-[20px] font-semibold">
              <a>iPhone 14</a>
            </li>
            <li className="text-[20px] font-semibold">
              <a>iPhone SE</a>
            </li>
            <li className="text-[13px] font-semibold">
              <a>Compare iPhone</a>
            </li>
            <li className="text-[13px] font-semibold">
              <a>Switch from Android</a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-[12px] text-gray-400">Shop iPhone</h2>
          <ul className="flex flex-col gap-2">
            <li className="text-[12px]">
              <a>Shop iPhone</a>
            </li>
            <li className="text-[12px]">
              <a>iPhone Accessories</a>
            </li>
            <li className="text-[12px]">
              <a>Apple Trade In</a>
            </li>
            <li className="text-[12px]">
              <a>Carrier Deals at Apple</a>
            </li>
            <li className="text-[12px]">
              <a>Financing</a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-[12px] text-gray-400">More from iPhone</h2>
          <ul className="flex flex-col gap-2">
            <li className="text-[12px]">
              <a>iPhone Support</a>
            </li>
            <li className="text-[12px]">
              <a>AppleCare+ for iPhone</a>
            </li>
            <li className="text-[12px]">
              <a>iOS 18</a>
            </li>
            <li className="text-[12px]">
              <a>Apple Intelligence</a>
            </li>
            <li className="text-[12px]">
              <a>Apps by Apple</a>
            </li>
            <li className="text-[12px]">
              <a>iPhone Privacy</a>
            </li>
            <li className="text-[12px]">
              <a>iCloud+</a>
            </li>
            <li className="text-[12px]">
              <a>Wallet, Pay, Card</a>
            </li>
            <li className="text-[12px]">
              <a>Siri</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default forwardRef(IPhone);
