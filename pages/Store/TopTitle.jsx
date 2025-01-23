import React from "react";

const TopTitle = () => {
  return (
    <>
      <div className="w-full flex justify-between items-center gap-11 pb-12">
        <div className="flex items-start gap-2">
          <h1 className="text-4xl font-semibold pt-1 text-gray-500">
            <span className="text-5xl font-extrabold text-gray-600 pb-1">
              Store.
            </span>
            The best way to buy the products you love.
          </h1>
        </div>
        <div className="flex flex-col gap-1 xs:hidden md:block">
          <div className="flex flex-col ">
            <span className="text-sm text-nowrap">Need Shopping Help</span>
            <span className="underline text-sm text-blue-400 cursor-pointer">
              Ask Specialists
            </span>
          </div>
          <div className="flex flex-col ">
            <span className="text-sm text-nowrap">Visit an Apple Store</span>
            <span className="underline text-sm text-blue-400 cursor-pointer">
              Find one near you
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopTitle;
