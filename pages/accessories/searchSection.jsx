import React from "react";
import "../../Style.css";
const SearchSection = () => {
  return (
    <section className="w-full">
      <div className="w-full px-5 md:px-32 flex gap-4 flex-col justify-center items-center">
        <h1 className="text-2xl font-medium">
          Find the accessories you’re looking for.
        </h1>
        <div className="w-full h-14 ring-1  ring-black rounded-xl pt-3 px-2">
          <input
            className="w-full text-xl font-medium outline-none border-none"
            placeholder="search accessories"
            type="text"
          />
        </div>
      </div>
    </section>
  );
};

export default SearchSection;
