import React from "react";
import "../../Style.css"
const Trillercontainer = ({ img, content }) => {
  console.log(content);
  let { title, subtitle } = content[0];
  return (
    <section
      style={{ backgroundImage: `url(${img})` }}
      className="w-full h-[80vh] flex flex-col items-start gap-5 justify-end bg-center bg-cover object-cover mb-5 px-20 "
    >
      <div className="w-full flex gap-5 items-end  px-10">
        <h1 className="text-2xl font-medium text-white">{title}</h1>
        <button className="px-4 py-1 ring-1 ring-white bg-transparent text-white cursor-pointer rounded-3xl">
          Bundle with One
        </button>
      </div>
      <h1 className=" text-4xl font-bold text-white md:pr-32 pl-7">
        {subtitle}
      </h1>
      <div className="flex gap-5 items-center pb-10 pl-7">
        <button className="px-5 py-2 rounded-3xl text-black text-sm font-medium bg-white">
          Try it free<sup className="text-xs">1</sup>
        </button>
        <button className="px-5 py-2 rounded-3xl ring-1 ring-white text-white text-sm font-medium bg-transparent">
          Learn more
        </button>
      </div>
    </section>
  );
};

export default Trillercontainer;
