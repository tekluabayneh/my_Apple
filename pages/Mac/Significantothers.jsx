import React, { useState } from "react";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import img1 from "../../assets/macimages/lap1.jpg";
import img2 from "../../assets/macimages/lap2.jpg";
import img3 from "../../assets/macimages/lap3.jpg";
import "../../Style.css";
const Significantothers = () => {
  const [isExpanded, setIsExpanded] = useState({
    first: true,
    second: false,
    third: false,
  });

  const handelToggle = (num) => {
    setIsExpanded({
      first: num === "first" ? !isExpanded.first : false,
      second: num === "second" ? !isExpanded.second : false,
      third: num === "third" ? !isExpanded.third : false,
    });
  };

  return (
    <section>
      <h1 className="text-4xl font-bold pl-6 pb-24">Significant others.</h1>

      <div className="w-full px-12 flex flex-col gap-6 pb-12 ease-in-out-custom transition-all">
        <div className="w-full flex flex-col border-b-2 border-gray-300 pb-5 rounded-b-lg">
          <div className="w-full flex justify-between pb-5">
            <h1 className="text-2xl font-bold">Mac and iPhone</h1>
            <span
              onClick={() => handelToggle("first")}
              className="cursor-pointer"
            >
              {isExpanded.first ? (
                <FaArrowDown size={15} />
              ) : (
                <FaArrowUp size={15} />
              )}
            </span>
          </div>

          <div
            style={{ height: isExpanded.first ? "auto" : "0" }}
            className="w-full flex flex-col gap-5 overflow-hidden transition-height transition-duration-400 transition-ease-in-out-custom transition-delay-200"
          >
            <p className="px-5">
              Answer calls or messages from your iPhone directly on your Mac.
              See and control what’s on your iPhone from your Mac with iPhone
              Mirroring. Use Universal Clipboard to copy images, video, or text
              from your iPhone, then paste into another app on your nearby Mac.
              And thanks to iCloud, you can access your files from either your
              iPhone or your Mac. And so much more.
            </p>
            <img
              className="w-96 h-60 bg-center m-auto xs:hidden md:block"
              src={img3}
              alt="img"
            />
          </div>
        </div>
        {/* single */}
        <div className="w-full flex flex-col border-b-2 border-gray-300 pb-5 rounded-b-lg ">
          <div className="w-full flex justify-between pb-5">
            <h1 className="text-2xl font-bold">Mac and iPad</h1>
            <span
              onClick={() => handelToggle("second")}
              className="cursor-pointer"
            >
              {isExpanded.second ? (
                <FaArrowDown size={15} />
              ) : (
                <FaArrowUp size={15} />
              )}
            </span>
          </div>
          <div
            style={{ height: isExpanded.second ? "auto" : "0" }}
            className="w-full flex flex-col gap-5 overflow-hidden transition-height transition-duration-400 transition-ease-in-out-custom transition-delay-200"
          >
            <p className="px-5">
              Sketch on your iPad and have it appear instantly on your Mac. Or
              use your iPad as a second display, so you can work on one screen
              while you reference the other. You can even start a Final Cut Pro
              project on your iPad and continue it on your Mac.
            </p>
            <img
              className="w-96 h-60 xs:hidden md:block bg-center m-auto"
              src={img2}
              alt="img"
            />
          </div>
        </div>
        {/* single */}
        <div className="w-full flex flex-col border-b-2 border-gray-300 pb-5 rounded-b-lg">
          <div className="w-full flex justify-between pb-5">
            <h1 className="text-2xl font-bold">Mac and Apple Watch</h1>
            <span
              onClick={() => handelToggle("third")}
              className="cursor-pointer"
            >
              {isExpanded.third ? (
                <FaArrowDown size={15} />
              ) : (
                <FaArrowUp size={15} />
              )}
            </span>
          </div>
          <div
            style={{ height: isExpanded.third ? "auto" : "0" }}
            className="w-full flex flex-col gap-5 overflow-hidden transition-height transition-duration-400 transition-ease-in-out-custom transition-delay-200"
          >
            <p className="px-5">
              Automatically log in to your Mac when you’re wearing your Apple
              Watch with Auto Unlock. No password typing required.
            </p>
            <img
              className="w-96 h-60  bg-center obj m-auto xs:hidden md:block"
              src={img1}
              alt="img"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Significantothers;
