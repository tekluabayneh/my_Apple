import React from "react";
import banner from "../../assets/TvAndHomeImg/banner1.jpg";

const Homepage = () => {
  return (
    <section className="w-full flex flex-col gap-5 py-10">
      <div className="w-full">
        <img
          className="m-auto w-4/6 bg-bottom bg-cover object-cover"
          src={banner}
          alt=""
        />
      </div>

      <div className="w-full text-center flex flex-col gap-5  md:px-20">
        <h1 className="text-6xl font-bold">The future hits home.</h1>
        <p className="text-lg font-medium text-gray-400">
          Simply connect your favorite devices and transform your house into a
          remarkably smart, convenient, and entertaining home. Elevate movie
          night with theater-like picture and sound. Play any song, in any room,
          from anywhere. And control lights, locks, and thermostats using Siri.
          All with the security and privacy of Apple.
        </p>
      </div>
    </section>
  );
};

export default Homepage;
