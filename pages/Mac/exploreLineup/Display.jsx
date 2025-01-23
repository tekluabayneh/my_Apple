import React from "react";
import MacBtn from "../../../components/macBtn/macBtn";
const Display = ({ item, img }) => {
  return (
    <section className="flex w-5/6 flex flex-col gap-9 h-auto px-12 py-16">
      <div className="flex gap-10">
        {item.map((item, index) => {
          console.log(index);
          return (
            <div key={index} className="flex flex-col gap-3">
              <div>
                <img
                  style={{ width: index == 1 ? "230px" : "" }}
                  src={img}
                  alt="mackbook"
                />
                <div className="w-full flex text-center justify-center gap-2 py-2">
                  <span className="w-3 h-3 bg-pink-500 ring-1 ring-cyan-400 rounded-full"></span>
                  <span className="w-3 h-3 bg-blue-500 ring-1 ring-cyan-400 rounded-full"></span>
                  <span className="w-3 h-3 bg-purple-400 ring-1 ring-cyan-400 rounded-full"></span>
                </div>
              </div>
              <div className="flex flex-col gap-2 items-center justify-center">
                <span className="text-orange-400 text- text-centerxs  text-center">
                  {item.msg}
                </span>
                <h1 className="text-2xl text-nowrap text-center">
                  {item.title}
                </h1>
                <h6 className="text-xl text-center">{item.SubTitle}</h6>
                <p className="text-sm text-center">{item.description}</p>
                <h1 className="text-xl text-center">{item.price}</h1>
              </div>
              <div className="m-auto">
                {" "}
                <MacBtn />
              </div>
            </div>
          );
        })}
      </div>
      <hr className="w-full mx-auto" />
    </section>
  );
};

export default Display;
