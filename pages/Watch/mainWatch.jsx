import React from "react";
import { first, second, third } from "./img";
import TopHorizontalScroll from "../../components/TopHorizontalScroll/TopHorizontalScroll";
import content from "../../data/Watchdata.json";
import Videos from "../../components/videos";
import MacHorizontal from "../../components/macHorizontalScroll/macHorizontal";
import Ipad_HorizontalList from "../Ipad/horizontalSection";
import AppleWatchStudio from "./AppleWatchStudio";
import firstHo from "../../data/horizontalScroll.json";
import Small_HorizontalList from "../../components/HorizontalList/SmallHorizntallScroll";
import AppleWatchessentials from "./AppleWatchessentials";

const MainWatch = () => {
  let url =
    "https://www.apple.com/105/media/us/watch/2024/f0b51c31-e8a5-44d7-b23d-51bd2858454a/anim/hero/medium_2x.mp4";
  return (
    <section className=" py-10">
      <TopHorizontalScroll item={content.first} img={first} />
      <Videos
        url={url}
        title={"Apple Watch"}
        subtitle={"The ultimate device <br/> for a healthy life."}
      />
      <div className="w-full px-5">
        <div className="w-full pl-5 py-10">
          <h1 className="text-4xl font-bold">Get to know Apple Watch.</h1>
        </div>
        <MacHorizontal
          item={content.second}
          imageUrls={second}
          width={19}
          blackTextIndices={[0, 6]}
        />
      </div>
      <div className="px-12 my-20">
        <div className="w-full flex justify-between px-12 ">
          <h1 className="text-4xl font-bold">Explore the lineup.</h1>
          <span className="underline text-blue-500">Compare all models</span>
        </div>
        <Ipad_HorizontalList
          item={content.third}
          imageUrls={third}
          width={27}
          blackTextIndices={[null]}
          NoImage={true}
        />
      </div>
      <AppleWatchStudio />
      <div className="px-12 my-20">
        <div className="w-full flex justify-between px-12 ">
          <h1 className="text-4xl font-bold">
            Why Apple is the best <br /> place to buy Apple Watch.
          </h1>
          <span className="underline text-blue-500">Shop Apple Watch.</span>
        </div>
        <Small_HorizontalList item={firstHo.third} NoColor={true} />
      </div>
      <AppleWatchessentials />
    </section>
  );
};

export default MainWatch;
