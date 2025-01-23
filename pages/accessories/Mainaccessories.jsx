import React from "react";
import Medium_HorizontalList from "../../components/HorizontalList/meduimScroll";
import firstHo from "../../data/horizontalScroll.json";
import SearchSection from "./searchSection";
import { four, third } from "../Store/img";
import Homepage from "./homepage";
import Header from "./header";
import "../../Style.css";
const Mainaccessories = () => {
  return (
    <section className="w-full pt-10">
      <Header />
      <Homepage />
      <SearchSection />
      <div className="my-20">
        <h1 className="text-4xl md:leading-3 text-black text-center font-semibold">
          Featured iPhone Accessories
        </h1>
        <Medium_HorizontalList
          item={firstHo.four}
          imageUrls={third}
          width={17}
          blackTextIndices={[null]}
        />
      </div>

      <div className="my-20">
        <h1 className="text-4xl md:leading-3 text-black text-center font-semibold">
          Sound Essentials
        </h1>
        <Medium_HorizontalList
          item={firstHo.five}
          imageUrls={four}
          width={17}
          blackTextIndices={[null]}
        />
      </div>
    </section>
  );
};

export default Mainaccessories;
