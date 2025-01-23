import React, { forwardRef } from "react";

const Basket = (poor,ref) => {
  return (
    <>
      <div ref={ref} className="w-full flex flex-col gap-5 pl-5 pb-20">
        <h1 className="text-[2rem] font-semibold">your bag is empty</h1>
        <p className="text-[12px] flex gap-1 capitalize">
          <span className="text-blue-400 underline">signin</span>
          <span>to see if you have any saved items</span>
        </p>

        <ul className="flex flex-col gap-2">
          <h2 className="text[14px] text-gray-800">my profile</h2>
          <li className="text-[14px] text-gray-400">order</li>
          <li className="text-[14px] text-gray-400">your saves</li>
          <li className="text-[14px] text-gray-400">account</li>
          <li className="text-[14px] text-gray-400">signin</li>
        </ul>
      </div>
    </>
  );
};

export default forwardRef(Basket);
