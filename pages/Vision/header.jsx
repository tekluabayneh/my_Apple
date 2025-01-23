import React from "react";
import "../../Style.css";
const Header = () => {
  return (
    <header className="w-full flex justify-between items-center h-16 bg-gray-50 px-5">
      <h1 className="font-medium text-xl hidden md:block">Apple Vision Pro</h1>
      <ul className="flex gap-5">
        <li className="text-xs pt-1">overview</li>
        <li className="text-xs pt-1">guided Tour</li>
        <li className="text-xs pt-1">Tech specs</li>
        <button className="px-3 py2 rounded-3xl ring-1 ring-black text-xs bg-white text-black hover:bg-black hover:text-white cursor-pointer">
          Book a Demo
        </button>
        <button className="px-3 py-1 rounded-3xl bg-blue-500 text-white text-xs">
          Buy
        </button>
      </ul>
    </header>
  );
};

export default Header;
