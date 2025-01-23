import React from "react";
import MacHorizontal from "../../components/macHorizontalScroll/macHorizontal";
import banner1 from "../../assets/airpodsImages/banner1.jpg";
import banner2 from "../../assets/airpodsImages/banner2.jpg";
import data from "../../data/airpodsdata.json";
import Homesection from "./homesection";
import WhichAirPod from "./WhichAirPod";
import Header from "./header";
import "../../Style.css";
import { Timg } from "./img";
const Mainairpod = () => {
  const content = {
    first: [
      {
        head: "AirPods 4",
        title: "he next evolution of sound and comfort.",
        subtitle: "Starting at $129 With Active Noise Cancellation $179",
      },
    ],
    second: [
      {
        head: "AirPods Pro 2",
        title: "The world’s first all-in-one hearing health experience.2",
        subtitle: "$249 Features available with a free software update.",
      },
    ],
  };

  return (
    <section className="pt-9 px-5">
      <Header />
      <Homesection
        img={banner1}
        head={content.first[0].head}
        title={content.first[0].title}
        subtitle={content.first[0].subtitle}
      />
      <Homesection
        img={banner2}
        head={content.second[0].head}
        title={content.second[0].title}
        subtitle={content.second[0].subtitle}
        bgColor={true}
      />
      <WhichAirPod />
      <div className="w-full my-10">
        <h1 className="text-6xl font-medium text-center">
          Get to know AirPods.
        </h1>
        <MacHorizontal
          item={data.product_three}
          imageUrls={Timg}
          width={19}
          blackTextIndices={[0, 1, 2, 3]}
        />
      </div>
    </section>
  );
};

export default Mainairpod;
