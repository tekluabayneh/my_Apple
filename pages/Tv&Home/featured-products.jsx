import React from "react";
import { banners } from "./img";
const Featuredproducts = () => {
  const contet = [
    { title: "Profound sound.", subtitle: "HomePod", price: "$299" },
    {
      title: "Surprising sound for its size.",
      subtitle: "HomePod mini",
      price: "$$99",
    },
    {
      title: "The Apple experience.Cinematic in every sense",
      subtitle: "",
      price: "$Starting at $129",
    },
    {
      title: "The foundation for a smarter home.",
      subtitle: "Home app",
      price: "$299",
    },
  ];
  return (
    <section className="w-full px-20 grid grid-cols-1 md:grid-cols-2 gap-5 py-10">
      {contet.map((item, index) => {
        return (
          <div
            key={index}
            style={{
              background: index === 0 ? "black" : "",
              color: index === 0 ? "white" : "",
            }}
            className=" text-center w-full h-[32rem] bg-white  flex flex-col items-center justify-start pt-5 rounded-2xl overflow-hidden"
          >
            <p className="text-xl text-center px-10 pt-8">{item.subtitle}</p>
            <h3 className="text-xl text-center px-10 font-medium">
              {item.title}
            </h3>
            <p className="pt-5 text-center px-5 text-sm">{item.price}</p>
            <div className="w-full  flex gap-4 items-center justify-center pt-2">
              <button className="text-sm rounded-3xl bg-blue-600 text-white cursor-pointer px-4 py-2">
                buy
              </button>
              <span className="hover:underline text-blue-500 cursor-pointer">
                learn more
              </span>
            </div>
            <img
              className="w-full h-full object-cover bg-center bg-cover pt-4"
              src={banners[index]}
              alt=""
            />
          </div>
        );
      })}
    </section>
  );
};

export default Featuredproducts;
