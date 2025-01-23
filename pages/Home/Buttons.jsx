import React from "react";

const Buttons = ({ bgWhite, size, message }) => {
  return (
    <div className="flex gap-5 m-1 mt-5 ml-6">
      <button
        style={{
          background: bgWhite ? "white" : "",
          color: bgWhite ? "black" : "",
          padding: size ? "0.5rem 1rem" : "",
        }}
        className="px-6 py-[12px] bg-[#0071e3]  text-white rounded-[2.5rem] cursor-pointer"
      >
        {message ? "Get Your estimate" : "Learn More"}
      </button>

      {message ? (
        ""
      ) : (
        <button
          style={{
            padding: size ? "0.5rem 1rem" : "",
          }}
          className="px-6 py-1 rounded-[2.5rem] text-[#0071e3] ring-1 ring-[#0071e3] cursor-pointer hover:bg-[#0071e3] hover:text-white"
        >
          Buy
        </button>
      )}
    </div>
  );
};

export default Buttons;
