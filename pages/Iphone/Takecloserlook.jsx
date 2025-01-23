import React from "react";
import img from "../../assets/iphone/10014.jpg";
const Takecloserlook = () => {
  return (
    <section className="py-10 px-5">
      <div className="w-full pb-10">
        <h1 className="text-4xl font-bold pl-5">
          Take a closer look at <br /> our latest models.
        </h1>
      </div>
      <div
        style={{ backgroundImage: `url(${img})` }}
        className="w-full m-auto h-[33rem] px-5 bg-center p-5 bg-cover bg-no-repeat rounded-3xl hover:scale-105 transition-all"
      >
        <h3 className="text-center text-2xl text-white">
          <span>A Guided Tour of</span> <br />
          <span>iphone 16 % ipgone 16 pro</span>
        </h3>

        <div className="w-full m-auto text-center py-5">
          <button className=" m-auto text-center text-black bg-gray-200 rounded-2xl px-3 py-2">
            watch the file
          </button>
        </div>
      </div>
    </section>
  );
};

export default Takecloserlook;
