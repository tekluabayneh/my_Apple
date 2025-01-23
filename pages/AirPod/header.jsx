import React from "react";
import { imges } from "./img";
import "../../Style.css";
const Header = () => {
  let contet = [
    { title: "AirPods" },
    { title: "AirPods Pro" },
    { title: "AirPods Max" },
    { title: "Compare" },
    { title: "Apple Music" },
  ];
  return (
    <header className="w-full h-32 px-10 flex gap-10 bg-gray-50 justify-center items-center">
      {contet.map((item, index) => {
        return (
          <div className=" flex flex-col items-center">
            <img
              className="w-12 h-12 object-contain"
              src={imges[index]}
              alt=""
            />
            <span className="text-xs">{item.title}</span>
          </div>
        );
      })}
    </header>
  );
};

export default Header;
