import React from "react";
import "../../Style.css";
import banner1 from "../../assets/access_home_banner.png";

const Homepage = () => {
  return (
    <section className="w-full h-96 flex justify-between items-center gap-32 bg-gray-100 px-12 mb-8">
      <div className="flex flex-col gap-5">
        <h1 className="text-6xl font-black">
          Mix. Match. <br />
        </h1>
        <p className="text-gray-400 text-xl">
          {" "}
          MagSafe. Snap on a case, wallet, or <br /> wireless charger.
        </p>
        <span className="underline text-blue-500 cursor-pointer">
          Shop MagSafe
        </span>
      </div>
      <div className="w-full h-full hidden md:block">
        <img
          className="w-full h-full bg-contain bg-center object-cover bg-left-top"
          src={banner1}
          alt=""
        />
      </div>
    </section>
  );
};

export default Homepage;
