import React from "react";
import banner3 from "../../assets/TvAndHomeImg/bannerlast.png";
const Watchsingplayworkout = () => {
  return (
    <section className="w-full my-10 px-10 flex flex-col gap-8 justify-center py-20">
      <h1 className="text-center md:px-5 text-5xl font-medium">
        Watch, sing, play, and work out. On the big screen.
      </h1>
      <div className=" xs:w-full md:w-5/6 m-auto">
        <img src={banner3} alt="" />
      </div>
      <div className="w-full px-20 flex flex-col md:flex-row justify-between gap-5">
        <div className="flex flex-col gap-4">
          <h1 className="text-xl text-center">Fast, free delivery</h1>
          <p className="text-sm text-center md:px-10">
            Or pick up available items at an Apple Store.
          </p>
          <span className="text-blue-500 hover:underline text-xs text-center cursor-pointer">
            {" "}
            Learn more
          </span>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-xl text-center">Get help buying</h1>
          <p className="text-sm text-center md:px-10">
            Have a question? Call a Specialist or chat online.
          </p>
          <span className="text-blue-500 hover:underline text-xs text-center cursor-pointer">
            {" "}
            Contact us
          </span>
        </div>
      </div>
    </section>
  );
};

export default Watchsingplayworkout;
