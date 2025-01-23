import React, { useEffect, useState } from "react";
import Buttons from "./Buttons";
import mediumImage from "../../assets/10001.jpg";
import SmallerImage from "../../assets/10001s.jpg";

const FirstSection = () => {
  const [backgroundImg, setBackgroundImg] = useState(mediumImage);

  /* update the image urrl when smaller size */
  useEffect(() => {
    const updateBackground = () => {
      if (window.innerWidth < 890) {
        setBackgroundImg(SmallerImage);
      } else {
        setBackgroundImg(mediumImage);
      }
    };

    updateBackground();
    window.addEventListener("resize", updateBackground);
  }, []);
  return (
    <>
      <div
        style={{ backgroundImage: `url(${backgroundImg})` }}
        className="w-full  md:h-screen min-w-full bg-cover bg-no-repeat bg-center pt-20"
      >
        <div className="w-full grid md:grid place-content-center pt-96 md:pt-0">
          <h1 className=" text-white text-[2.6rem] font-semibold capitalize">
            IPhone 16 pro
          </h1>
          <p className="text-white  text-center text-[20px] xl:pt-32">
            Hello,Apple intelligence.
          </p>
          <div className="text-center">
            <Buttons />
          </div>
        </div>
      </div>
    </>
  );
};

export default FirstSection;
