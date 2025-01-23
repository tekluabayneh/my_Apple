import React from "react";
import TopHorizontalScroll from "../../components/TopHorizontalScroll/TopHorizontalScroll";
import SmallHorizontallscroll from "../../components/infiniteScroller/smallHorizontallscroll";
import content from "../../data/Entertainmentdata.json";
import Trillercontainer from "./trillercontainer";
import { Headerimges } from "./img";
import Homepage from "./homepage";
import banner1 from "../../assets/entertainmentimg/banner1.jpg";
import banner2 from "../../assets/entertainmentimg/banner2.jpg";
import banner3 from "../../assets/entertainmentimg/banner3.jpg";
import banner4 from "../../assets/entertainmentimg/banner4.jpg";
import "../../Style.css";
import One from "./One";
const MainEntertainment = () => {
  let data = {
    first: [
      {
        title: "Apple TV+",
        subtitle: "stream award-winning Apple Originals on every screen.",
      },
    ],
    second: [
      {
        title: "Apple Music ",
        subtitle:
          "Listen to music you love in Spatial Audio with Dolby Atmos.2",
      },
    ],
    third: [
      {
        title: "Apple Arcade ",
        subtitle: "Best collection of mobile games for every player.",
      },
    ],
    four: [
      {
        title: "Apple Fitness+ ",
        subtitle: "From HIIT to Meditation, there’s something for everyone.",
      },
    ],
  };
  return (
    <section className="w-full pt-10">
      <TopHorizontalScroll
        item={content.first}
        img={Headerimges}
        bgColor={true}
      />
      <Homepage />
      <Trillercontainer img={banner1} content={data.first} />
      <div className="py-5">
        <SmallHorizontallscroll />
      </div>
      <Trillercontainer img={banner2} content={data.second} />
      <Trillercontainer img={banner3} content={data.third} />
      <Trillercontainer img={banner4} content={data.four} />
      <One />
    </section>
  );
};

export default MainEntertainment;
