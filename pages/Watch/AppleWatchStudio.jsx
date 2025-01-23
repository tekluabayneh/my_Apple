import React from "react";
import img from "../../assets/WatchesImage/00.jpg";
import "../../Style.css";
const AppleWatchStudio = () => {
  return (
    <section className="w-full h-auto px-10 my-10">
      <h1 className="text-4xl font-bold">Apple Watch Studio</h1>
      <div
        style={{ backgroundImage: `url(${img})` }}
        className="bg-cover bg-bottom bg-no-repeat w-full h-[35rem]  rounded-3xl bg-black shadow-2xl p-5 flex  flex-col gap-1  my-10"
      >
        <h1 className="text-center text-2xl pb-1">
          mix. match, make it yours.
        </h1>
        <p className="text-center text-gray-400">
          choose a case. pick a band <br /> configure your perfect watch
        </p>

        <div className="mx-auto relative my-3">
          <button
            className="bg-white w-40 h-9 text-sm py-1 hover:text-blue-600 relative cursor-pointer transition-all px-1 mx-auto text-center
          text-black rounded-3xl shadow-custom text-center z-10"
          >
            create your style
          </button>
          <span
            className="w-44  h-10 -top-[0.19rem] -left-2 py-[1.3rem]  mx-auto  after:content-['']  transition-all
             rounded-3xl shadow-custom text-center absolute  bg-gradient-to-r from-yellow-400
            via-purple-400 via-red-400 via-purple-500 via-pink-400 to-green-400"
          ></span>
        </div>
      </div>
    </section>
  );
};

export default AppleWatchStudio;
