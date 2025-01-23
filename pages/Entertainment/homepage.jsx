import React from "react";
import "../../Style.css";
const Homepage = () => {
  return (
    <section className="w-full h-screen bg-black text-white ">
      <h1 className="text-center text-6xl font-bold md:px-10 py-20">
        {" "}
        Meet the A-list of entertainment.
      </h1>{" "}
      <p className="text-xl text-gray-400 font-medium text-center px-12">
        Award‑winning movies. Binge‑worthy shows. Your favorite music mastered
        in Spatial Audio. The most epic collection of mobile games. And the
        world’s largest library of 4K Ultra HD fitness content. The best
        entertainment and experiences live here—only on Apple.
      </p>
      <div className="w-full flex justify-around items-center px-5 bg-slate-900 py-12 mt-14">
        <div>
          <h1 className="text-6xl font-bold">one</h1>
        </div>

        <p className="px-5 text-center">
          Get up to six services in one <br /> subscription with Apple One.
        </p>

        <button className="text-white bg-transparent px-5 py-2 ring-1 ring-white rounded-3xl">
          Learn more
        </button>
      </div>
    </section>
  );
};

export default Homepage;
