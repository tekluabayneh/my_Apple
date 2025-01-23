import React, { useEffect, useState } from "react";
import mediumImage from "../../assets/10002.jpg";
import SmallerImage from "../../assets/10002s.jpg";
import Buttons from "./Buttons";
const SecondSection = () => {
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
        className="w-full h-[80vh] md:h-screen min-w-full bg-cover bg-no-repeat bg-center pt-14"
      >
        <div className="w-full grid md:grid place-content-center">
          <h1 className="ml-6 text-white text-[2.6rem] font-semibold capitalize">
            IPhone 16
          </h1>
          <p className="text-white  text-center text-[20px] xl:pt-32">
            Hello,Apple intelligence.
          </p>
          <div className="text-center">
            <Buttons bgWhite={true} />
          </div>
        </div>
      </div>
    </>
  );
};

export default SecondSection;
