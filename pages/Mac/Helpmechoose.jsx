import React from "react";
import backgroundImg from "../../assets/macimages/10001Chosee.jpg";
import "../../Style.css";
const Helpmechoose = () => {
  return (
    <>
      <section className="pt-10 w-full  xs:mt-20 md:mt-4 flex flex-col gap-10">
        <h1 className="font-black text-4xl pl-12">Help me choose.</h1>
        <div className="w-5/6 h-96 flex xs:flex-col-reverse md:flex-row m-auto   bg-gray-100 rounded-2xl">
          <div className="pl-10 flex items-center flex-col gap-4">
            <h1 className="text-xl capitalize text-nowrap flex pt-36 items-center">
              answer few questions to. <br />
              find the best mac for you
            </h1>
            <button className="bg-blue-600 text-xs text-white rounded-2xl px-4 py-2">
              get Started
            </button>
          </div>
          <div className="flex items-center">
            <img className="aspect-auto" src={backgroundImg} alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Helpmechoose;
