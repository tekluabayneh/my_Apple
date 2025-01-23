import React from "react";
const Button = () => {
  return (
    <div className=" text-center m-auto flex flex-col gap-1">
      <button className=" text-white bg-blue-600 rounded-3xl text-sm px-2 py-1">
        buy
      </button>
      <div className="w-full flex gap-1 items-center">
        <span className="text-blue-500 hover:underline text-xs pl-2 text-nowrap cursor-pointer">
          {" "}
          learn more
        </span>{" "}
        <span style={{ fontSize: "16px", color: "blue" }}>&gt;</span>
      </div>
    </div>
  );
};

export default Button;
