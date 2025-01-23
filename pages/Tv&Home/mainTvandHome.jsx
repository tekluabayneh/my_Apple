import React from "react";
import Header from "./header";
import "../../Style.css";
import Homepage from "./homepage";
import Featuredproducts from "./featured-products";
import Horizontal from "./horizontal";
import Watchsingplayworkout from "./Watchsingplayworkout";

const MainTvandHome = () => {
  return (
    <section className="w-full pt-10 px-10 bg-gray-100">
      <Header />
      <Homepage />
      <Featuredproducts />
      <Horizontal />
      <Watchsingplayworkout />
    </section>
  );
};

export default MainTvandHome;
