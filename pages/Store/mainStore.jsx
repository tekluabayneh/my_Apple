import React from "react";
import TopTitle from "./TopTitle";
import "../../Style.css";
import { Sections } from "./sectionsData";

const Section = ({ title, subtitle, Component, props }) => (
  <div className="mt-10">
    <h1 className="text-2xl md:leading-3 text-gray-400 font-semibold">
      <span className="text-black">{title}</span> {subtitle}
    </h1>
    <Component {...props} />
  </div>
);
const Store = () => {
  return (
    <main className="pt-20 p-8 bg-[#fafafc]">
      <TopTitle />
      {Sections.map((section, index) => (
        <Section
          key={index}
          title={section.title}
          subtitle={section.subtitle}
          Component={section.component}
          props={section.props}
        />
      ))}
    </main>
  );
};

export default Store;
