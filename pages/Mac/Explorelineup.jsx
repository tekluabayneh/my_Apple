import React, { useState } from "react";
import Laptop from "./exploreLineup/Laptop";
import Desktop from "./exploreLineup/Desktop";
import Display from "./exploreLineup/Display";
import ItemsContents from "../../data/macHorizontalScrollData.json";
import img from "../../assets/macimages/10001.png";
import img2 from "../../assets/macimages/114.png";

const Explorelineup = () => {
  const [checkIf, setcheckIf] = useState({
    display: false,
    desktop: false,
    laptops: true,
  });

  const handelToggle = (num) => {
    setcheckIf({
      laptops: num === "laptop" ? !checkIf.laptops : false,
      desktop: num === "desktop" ? !checkIf.desktop : false,
      display: num === "display" ? !checkIf.display : false,
    });
  };

  return (
    <section className="w-full h-auto bg-gray-100 py-5 px-12 mt-9">
      <div className="flex justify-between items-center pt-20">
        <h1 className="text-4xl">Explore the lineup.</h1>
        <div className="flex gap-4">
          <span className="text-blue-500 underline cursor-pointer text-nowrap">
            Help me choose{" "}
          </span>
          <span className="text-blue-500 underline cursor-pointer text-nowrap">
            Compare all models
          </span>
        </div>
      </div>

      {/* navigate btn container */}
      <div className="flex gap-5 items-center justify-around bg-gray-50 w-96 rounded-2xl py-2 mt-10">
        <button
          style={{
            background: checkIf.laptops ? "black" : "",
            color: checkIf.laptops ? "white" : "",
          }}
          onClick={() => handelToggle("laptop")}
          className="rounded-2xl px-5 py-2"
        >
          Laptops
        </button>
        <button
          style={{
            background: checkIf.desktop ? "black" : "",
            color: checkIf.desktop ? "white" : "",
          }}
          onClick={() => handelToggle("desktop")}
          className="rounded-2xl px-5 py-2"
        >
          Desktops
        </button>

        <button
          style={{
            background: checkIf.display ? "black" : "",
            color: checkIf.display ? "white" : "",
          }}
          onClick={() => handelToggle("display")}
          className="rounded-2xl px-5 py-2"
        >
          Displays
        </button>
      </div>
      <div className="w-full">
        {checkIf.desktop ? (
          <Desktop item={ItemsContents.four} height={37} />
        ) : checkIf.display ? (
          <Display item={ItemsContents.five} img={img2} />
        ) : checkIf.laptops ? (
          <Laptop item={ItemsContents.third} img={img} />
        ) : (
          ""
        )}
        <div>
          <h1 className="text-4xl font-bold">Apple Trade In</h1>
        </div>
      </div>
    </section>
  );
};

export default Explorelineup;
