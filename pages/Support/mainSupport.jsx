import React from "react";
import "../../Style.css";
import banner1 from "../../assets/supportimges/banner1.jpg";
import Designing from "./Designin";
const MainSupport = () => {
  return (
    <section className="w-full pt-10">
      <div
        style={{ backgroundImage: `url(${banner1})` }}
        className="hidden md:block w-full h-screen bg-center bg-cover object-cover"
      ></div>
      <div className="w-full py-10">
        <h1 className="text-center text-5xl font-medium">Apple Support</h1>
      </div>
      <Designing />
    </section>
  );
};

export default MainSupport;
