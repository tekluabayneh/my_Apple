import React from "react";
import laptopImg from "../../assets/macimages/laptop.jpg";
const GiveUsOldSection = () => {
  return (
    <section className="my-32 w-5/6 h-auto flex flex-col  gap-5 shadow-lg bg-white p-12 rounded-lg m-auto">
      <h1 className="text-2xl font-bold text-center">
        Give us old. Save on the New{" "}
      </h1>
      <p className="px-32 text-center xs:hidden md:block">
        with apple tradein in you can get a great value for you current dive and
        applay it toward a new one. if you device isn't eligible for credit, we
        will recycle it for you
      </p>
      <p className="underline text-blue-500 text-center cursor-pointer">
        see what your device is worth
      </p>
      <div className="w-full flex gap-5">
        <img src={laptopImg} alt="" />
      </div>
    </section>
  );
};

export default GiveUsOldSection;
