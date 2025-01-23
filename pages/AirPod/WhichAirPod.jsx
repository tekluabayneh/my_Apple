import React from "react";
import content from "../../data/airpodsdata.json";
import { simg } from "./img";
import Button from "./button";
const WhichAirPod = () => {
  return (
    <section className="w-full flex flex-col gap-20 bg-gray-50 py-40 justify-center">
      <div className="w-full pb-32">
        <h1 className="text-6xl from-black text-center font-medium  md:px-40">
          Which AirPods are right for you?
        </h1>
      </div>

      <div className="w-full grid xs:grid-cols-2 md:grid-cols-4 h-auto justify-center items-center pl-20">
        {content.product_one.map((item, index) => {
          return (
            <div className="w-full flex flex-col gap-10 gap-4 ">
              <div>
                <img
                  className="w-32 h-32 object-contain bg-center"
                  src={simg[index]}
                  alt="brands image"
                />
              </div>
              <div className="flex flex-col gap-5">
                <h3 className="text-xl font-medium">{item.name}</h3>
                <p className="text-xs w-32 text-center">{item.description}</p>
                <p className="pt-9 font-medium pl-8">{item.price}</p>
                <div className="m-auto pr-32">
                  <Button />
                </div>
              </div>
              <hr />
            </div>
          );
        })}
      </div>
      <div className="w-full grid xs:grid-cols-2 md:grid-cols-4 gap-5">
        {content.product_tow.map((content) => {
          return (
            <p className="text-sm text-center text-gray-500">{content.title}</p>
          );
        })}
      </div>
      <div className="flex gap-1 m-auto">
        <span className="text-lg font-medium text-blue-600 hover:underline cursor-pointer">
          Compare all AirPods models
        </span>
        <span style={{ fontSize: "16px", color: "blue" }}>&gt;</span>
      </div>
    </section>
  );
};

export default WhichAirPod;
