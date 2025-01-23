import React from "react";
import banner from "../../assets/supportimges/10004.png";
import banner2 from "../../assets/supportimges/10001.png";
import AccountImg from "../../assets/supportimges/1.svg";
import repairImg from "../../assets/supportimges/2.svg";
import billingImg from "../../assets/supportimges/3.svg";
import { IoSearch } from "react-icons/io5";
import "../../Style.css";

const Designing = () => {
  return (
    <section className="w-full grid xs:grid-cols-1 md:grid-cols-3 gap-5 px-10">
      <div className="w-full  md:col-span-3 xs:flex-col flex md:flex-row gap-10">
        <div className="w-full rounded-3xl shadow-lg hover:scale-105 transition-all cursor-pointer flex flex-col gap-2 items-center justify-center p-5">
          <img src={AccountImg} alt="" />
          <span className="text-sm text-blue-500 underline">
            Forgot Apple Account password
          </span>
        </div>

        <div className="w-full rounded-3xl shadow-lg hover:scale-105 transition-all cursor-pointer flex flex-col gap-2 items-center justify-center p-5">
          <img src={repairImg} alt="" />
          <span className="text-sm text-blue-500 underline">Apple Repair</span>
        </div>

        <div className="w-full rounded-3xl shadow-lg hover:scale-105 transition-all cursor-pointer flex flex-col gap-2 items-center justify-center p-5">
          <img src={billingImg} alt="" />
          <span className="text-sm text-blue-500 underline">
            Billing and subscriptions
          </span>
        </div>
      </div>

      <div className="w-full flex flex-col gap-5 shadow-md  md:col-span-3 my-10 rounded-xl">
        <h1 className="text-center text-4xl font-medium py-5 ">
          Search for more topics
        </h1>
        <div className="w-5/6 ml-16 rounded-2xl m-3 flex gap-2 border py-5">
          <samp className="pl-2 cursor-pointer">
            <IoSearch className="text-gray-500 text-2xl" />
          </samp>
          <input
            className="w-full h-full outline-none border-none"
            type="text"
            placeholder="search Support"
          />
        </div>
      </div>

      <div className="w-full md:col-span-3 shadow-custom p-10 rounded-3xl">
        <h1 className="text-2xl text-center">
          {" "}
          AppleCareApple Support on YouTube{" "}
        </h1>
        <p className="text-center md:px-20">
          Check out our official YouTube channel to get the most out of the
          latest features, devices, and services.
        </p>
        <span className="flex justify-center cursor-pointer hover:underline text-blue-500">
          Visit Apple Support on YouTube
        </span>
        <img className="w-full bg-center bg-cover" src={banner2} alt="" />
      </div>
      <div className="shadow-custom p-10 rounded-xl flex flex-col gap-5 md:col-span-3">
        <h1 className="text-2xl text-center">My Support</h1>
        <p className="text-center text-lg md:px-10">
          Get warranty information, check your coverage status, or look up an
          existing repair.
        </p>
        <span className="flex justify-center cursor-pointer hover:underline text-blue-500">
          Sign in with your Apple Account
        </span>
      </div>
      <div className="w-full md:col-span-3 shadow-custom p-10 rounded-3xl">
        <h1 className="text-2xl text-center"> AppleCare+ </h1>
        <p className="text-center md:px-20">
          Get unlimited repairs for accidental damage protection, 24/7 priority
          access to Apple experts, and more.
        </p>
        <span className="flex justify-center cursor-pointer hover:underline text-blue-500">
          learn more
        </span>
        <img className="w-full bg-center bg-cover" src={banner} alt="" />
      </div>
      <div className="shadow-custom p-10 rounded-xl flex flex-col gap-5 md:col-span-3">
        <h1 className="text-2xl text-center  ">Designing for longevity</h1>
        <p>
          At Apple, we are always working to create the best experience for our
          customers, which is why we design products that last. Designing for
          longevity is a company-wide effort, informing our earliest decisions
          long before the first prototype is built and guided by historical
          customer-use data and predictions on future usage. It requires
          striking a balance between durability and repairability while not
          compromising on safety, security, and privacy.
        </p>
        <p>
          {" "}
          Learn more about Apple's approach to designing for longevity, which
          includes access to safe and reliable repairs. View (PDF)
        </p>
      </div>

      <div className=" shadow-custom p-10 flex flex-col gap-5 rounded-xl md:col-span-2">
        <h1 className="text-2xl text-center">Beware of counterfeit parts</h1>
        <p>
          Some counterfeit and third party power adapters and batteries may not
          be designed properly and could result in safety issues. To ensure you
          receive a genuine Apple battery during a battery replacement, we
          recommend visiting an Apple Store or Apple Authorized Service
          Provider. If you need a replacement adapter to charge your Apple
          device, we recommend getting an Apple power adapter.
        </p>
        <p>
          Also non-genuine replacement displays may have compromised visual
          quality and may fail to work correctly. Apple-certified screen repairs
          are performed by trusted experts who use genuine Apple parts.
        </p>
      </div>

      <div className=" shadow-custom p-10 rounded-xl md:col-span-1">
        <h1 className="text-2xl text-center">Be aware of gift card scams</h1>
        <p>
          Be aware of scams involving Apple Gift Cards, App Store & iTunes Gift
          Cards, and Apple Store Gift Cards.
        </p>
        <span className="cursor-pointer hover:underline text-blue-500">
          learn more{" "}
        </span>
      </div>
    </section>
  );
};

export default Designing;
