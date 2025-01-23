import React from "react";
import "../../Style.css";

const One = () => {
  return (
    <section className="w-full bg-white flex flex-col  gap-5 justify-center items-center py-10">
      <h1 className="text-4xl text-center font-bold">One</h1>
      <p className="text-center text-xl">
        Bundle up to six Apple services <br /> and enjoy more for less.
      </p>
      <div className="w-full flex gap-5 justify-center items-center">
        <button className="px-5 py-2 rounded-3xl text-white text-sm font-medium bg-black">
          Try it free<sup className="text-xs">1</sup>
        </button>
        <span className="text-lg text-black hover:underline cursor-pointer">
          Learn more
        </span>
      </div>
    </section>
  );
};

export default One;
