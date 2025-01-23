import React from "react";
import TopHorizontalScroll from "../../components/TopHorizontalScroll/TopHorizontalScroll";
import Small_HorizontalList from "../../components/HorizontalList/SmallHorizntallScroll";
import MacHorizontal from "../../components/macHorizontalScroll/macHorizontal";
import macTopContent from ".././../data/macHorizontalScrollData.json";
import ItemsContents from "../../data/macHorizontalScrollData.json";
import Significantothers from "./Significantothers";
import GiveUsOldSection from "./giveUsOldSection";
import { macTopImages, second } from "./img";
import Videos from "../../components/videos";
import Explorelineup from "./Explorelineup";
import Helpmechoose from "./Helpmechoose";
import "../../Style.css";
const MainMac = () => {
  let url =
    "https://www.apple.com/105/media/us/mac/family/2024/b0f6d595-f4dd-4393-8316-102be97a5d1b/anim/welcome/medium.mp4#t=3.753092";
  return (
    <main className="w-full h-auto pt-8 px-2 bg-gray-100">
      <TopHorizontalScroll item={macTopContent.first} img={macTopImages} />
      <Videos
        url={url}
        title={"Mac"}
        subtitle={"If you can dream it, <br/> Mac can do it."}
      />
      <div className="pt-12">
        <h1 className="text-[3rem] font-bold pl-10">Get to know Mac.</h1>
        <MacHorizontal
          item={ItemsContents.second}
          imageUrls={second}
          width={19}
          blackTextIndices={[1, 4]}
        />
      </div>
      <Helpmechoose />
      <Explorelineup />
      <GiveUsOldSection />
      <Significantothers />
    </main>
  );
};

export default MainMac;
