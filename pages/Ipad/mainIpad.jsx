import React from "react";
import TopHorizontalScroll from "../../components/TopHorizontalScroll/TopHorizontalScroll";
import ipadTopContent from "../../data/ipadTopContent.json";
import Videos from "../../components/videos";
import { ipadTopImages, second, third } from "./img";
import ItemsContents from "../../data/ipadTopContent.json";
import MacHorizontal from "../../components/macHorizontalScroll/macHorizontal";
import Ipad_HorizontalList from "./horizontalSection";
import Small_HorizontalList from "../../components/HorizontalList/SmallHorizntallScroll";
import firstHo from "../../data/horizontalScroll.json";
const MainIpad = () => {
  let url =
    "https://www.apple.com/105/media/us/ipad/2024/45762adb-901a-4726-8b0c-1f3ee092b09a/anim/welcome-hero/medium.mp4";
  return (
    <section className="w-full h-auto pt-9">
      <TopHorizontalScroll item={ipadTopContent.first} img={ipadTopImages} />

      <div className="w-full">
        <Videos
          url={url}
          title={"iPad"}
          subtitle={`Touch, draw, and type.<br /> on one magical device`}
        />
      </div>
      <div className="px-12">
        <h1 className="text-4xl font-bold">Get to know iPad.</h1>
        <MacHorizontal
          item={ItemsContents.second}
          imageUrls={second}
          width={19}
          blackTextIndices={[0, 1, 2, 3, 4]}
        />
      </div>
      <div className="px-12 my-20">
        <div className="w-full flex justify-between px-12 ">
          <h1 className="text-4xl font-bold">Explore the lineup.</h1>
          <span className="underline text-blue-500">Compare all models</span>
        </div>
        <Ipad_HorizontalList
          item={ipadTopContent.third}
          imageUrls={third}
          width={27}
          blackTextIndices={[null]}
        />
      </div>
      <div className="w-full my-10 py-20 px-10">
        <div className="w-full flex justify-between">
          <h1 className="text-4xl font-bold">
            Why Apple is the best <br /> place to buy iPad.
          </h1>
          <span className="underline text-blue-500 cursor-pointer">
            shop ipad
          </span>
        </div>
        <Small_HorizontalList item={firstHo.third} NoColor={true} />
      </div>
    </section>
  );
};

export default MainIpad;
