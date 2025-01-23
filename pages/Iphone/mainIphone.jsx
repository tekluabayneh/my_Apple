import React from "react";
import TopHorizontalScroll from "../../components/TopHorizontalScroll/TopHorizontalScroll";
import iphoneTopHorizontalContent from "../../data/iphoneHorizontalData.json";
import { first, second, third } from "./img";
import Videos from "../../components/videos";
import MacHorizontal from "../../components/macHorizontalScroll/macHorizontal";
import Takecloserlook from "./Takecloserlook";
import firstHo from "../../data/horizontalScroll.json";
import Small_HorizontalList from "../../components/HorizontalList/SmallHorizntallScroll";
import Ipad_HorizontalList from "../Ipad/horizontalSection";

const MainIphone = () => {
  let url =
    "https://www.apple.com/105/media/us/iphone/family/2024/cf19f185-dd7e-4350-97ff-e44860713b54/anim/welcome/medium.mp4";
  return (
    <section className="pt-9">
      <TopHorizontalScroll
        item={iphoneTopHorizontalContent.first}
        img={first}
      />
      <Videos url={url} title={"iPhone"} subtitle={"Designed to be loved."} />
      <div className="w-full px-5 py-12">
        <h1 className="text-4xl font-bold pl-5">Get to know iPhone.</h1>
        <MacHorizontal
          item={iphoneTopHorizontalContent.second}
          imageUrls={second}
          width={18}
          blackTextIndices={[0,1,2]}
        />
        <div className="w-full py-10">
          <div className="w-full flex justify-between px-5">
            <h1 className="pl-5 text-4xl font-bold">Explore the lineup.</h1>
            <span className="underline text-blue-500"> Compare all models</span>
          </div>
          <Ipad_HorizontalList
            item={iphoneTopHorizontalContent.third}
            imageUrls={third}
            width={27}
            blackTextIndices={[null]}
            NoImage={true}
          />
        </div>
        <Takecloserlook />

        <Small_HorizontalList item={firstHo.third} NoColor={true} />
      </div>
    </section>
  );
};

export default MainIphone;
