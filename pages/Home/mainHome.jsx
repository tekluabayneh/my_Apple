import React from "react";
import FirstSection from "./Iphone16Pro";
import SecondSection from "./iPhone16";
import Home_Ipad from "./ipad";
import Watches from "./Watches";
import InfiniteHorizontallScroll from "../../components/infiniteScroller/horizontalScroll";
import SmallHorizontallscroll from "../../components/infiniteScroller/smallHorizontallscroll";

const MainHome = () => {
  return (
    <div className="w-full grid  gap-2">
      <FirstSection />
      <SecondSection />
      <Home_Ipad />
      <Watches />
      <InfiniteHorizontallScroll />
      <SmallHorizontallscroll />
    </div>
  );
};

export default MainHome;
