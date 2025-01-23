import React, { useEffect, useState } from "react";
import mediumImage from "../../assets/10004.jpg";
import SmallerImage from "../../assets/10003.png";
import Buttons from "./Buttons";
const Home_Ipad = () => {
  return (
    <>
      <div
        style={{ backgroundImage: `url(${mediumImage})` }}
        className="w-full  h-[80vh] md:h-screen min-w-full bg-cover bg-no-repeat bg-center m-auto pt-20"
      >
        <div className="w-full h-[100%] grid justify-center m-auto">
          <div>
          <div className="pl-20">
            <img src={SmallerImage} alt="" />
          </div>
            <p className="text-black  text-center text-[20px] capitalize">
              tow sizes, faster chip, dose it all
            </p>
            <div className="text-center pl-6">
              <Buttons />
            </div>
          </div>
          <div>
            <p className="gradient-text pl-6 text-center text-[20px] pt-56">
              Hello,Apple intelligence.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home_Ipad;
