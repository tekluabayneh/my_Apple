import React from "react";
import "../../Style.css"
const Header = () => {
  return (
    <div className="w-full h-20 shadow-sm flex items-center py-5 justify-between px-5">
      <h1 className="text-2xl">Accessories</h1>
      <span className="text-xs">Browse all</span>
    </div>
  );
};

export default Header;
