import React, { useRef, useState } from "react";
import { IoArrowBackCircle, IoBagOutline, IoLanguage } from "react-icons/io5";
import Entertainment from "./headerLinkMenu/Entertainment";
import Accessories from "./headerLinkMenu/Accessories";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { IoSearchOutline } from "react-icons/io5";
import SmallWidthHeader from "./smallWidthHeader";
import AirPods from "./headerLinkMenu/AirPods";
import IPhone from "./headerLinkMenu/iPhone";
import TVHome from "./headerLinkMenu/TV&Home";
import Support from "./headerLinkMenu/Support";
import Vision from "./headerLinkMenu/Vision";
import Basket from "./headerLinkMenu/basket";
import Search from "./headerLinkMenu/Search";
import Store from "./headerLinkMenu/Store";
import Watch from "./headerLinkMenu/Watch";
import { FaApple } from "react-icons/fa";
import IPad from "./headerLinkMenu/iPad";
import { Link } from "react-router-dom";
import Mac from "./headerLinkMenu/Mac";
import clsx from "clsx";
import "../../Style.css";
const MainHeader = () => {
  const [hovering, setHovering] = useState(null);
  const [popoverHeight, setPopoverHeight] = useState(null);
  const [isClosed, setIsclosed] = useState(true);
  const refs = useRef(HTMLElement || null);

  const onMouseEnter = (index, el) => {
    setHovering(index);
    const menuElement = refs.current[index];
    if (menuElement) {
      setPopoverHeight(menuElement.offsetHeight);
    }
  };

  return (
    <>
      <nav
        onMouseLeave={() => setHovering(null)}
        className="group w-full fixed top-0 left-0 bg-[#FFFFFFCC] shadow-sm z-50"
      >
        <ul className="w-full flex justify-center  gap-12 md:gap-5 p-3 xxs:justify-between xs:justify-between">
          <div>
            <Link to="/">
              <FaApple className="cursor-pointer" />
            </Link>
          </div>
          <ul className="flex gap-7 hidden xxs:hidden xs:hidden md:flex lg:gap-9">
            {/* <IoCloseOutline className="" /> */}

            <li
              onMouseEnter={(event) => {
                event.preventDefault();
                setHovering(0);
                onMouseEnter(0, event.currentTarget);
              }}
              className="hover_store text-[12px] text-[#000000CC] cursor-pointer font-medium "
            >
              <Link to={"/store"}>Store</Link>
            </li>

            <li
              onMouseEnter={(event) => {
                event.preventDefault();
                setHovering(1);
                onMouseEnter(1, event.currentTarget);
              }}
              className="hover_mac text-[12px] text-[#000000CC] cursor-pointer font-medium"
            >
              <Link to={"/mac"}>Mac</Link>
            </li>

            <li
              onMouseEnter={(event) => {
                event.preventDefault();
                setHovering(2);
                onMouseEnter(2, event.currentTarget);
              }}
              className="hover_ipad text-[12px] text-[#000000CC] cursor-pointer font-medium"
            >
              <Link to={"/ipad"}>ipad</Link>
            </li>

            <li
              onMouseEnter={(event) => {
                event.preventDefault();
                setHovering(3);
                onMouseEnter(3, event.currentTarget);
              }}
              className="hover_iphone text-[12px] text-[#000000CC] cursor-pointer font-medium"
            >
              <Link to={"/iphone"}>iphone</Link>
            </li>

            <li
              onMouseEnter={(event) => {
                event.preventDefault();
                setHovering(4);
                onMouseEnter(4, event.currentTarget);
              }}
              className="hover_watch text-[12px] text-[#000000CC] cursor-pointer font-medium"
            >
              <Link to={"/watch"}>watch</Link>
            </li>

            <li
              onMouseEnter={(event) => {
                event.preventDefault();
                setHovering(5);
                onMouseEnter(5, event.currentTarget);
              }}
              className="hover_vision text-[12px] text-[#000000CC] cursor-pointer font-medium"
            >
              <Link to={"/vision"}>vision</Link>
            </li>

            <li
              onMouseEnter={(event) => {
                event.preventDefault();
                setHovering(6);
                onMouseEnter(6, event.currentTarget);
              }}
              className="hover_airpods text-[12px] text-[#000000CC] cursor-pointer font-medium"
            >
              <Link to={"/airpod"}>Airpods</Link>
            </li>

            <li
              onMouseEnter={(event) => {
                event.preventDefault();
                setHovering(7);
                onMouseEnter(7, event.currentTarget);
              }}
              className="hover_tvandhoem text-[12px] whitespace-nowrap text-[#000000CC] cursor-pointer font-medium"
            >
              <Link to={"/Tv_Home"}>Tv& Home</Link>
            </li>

            <li
              onMouseEnter={(event) => {
                event.preventDefault();
                setHovering(8);
                onMouseEnter(8, event.currentTarget);
              }}
              className="hover_entertainment text-[12px] text-[#000000CC] cursor-pointer font-medium"
            >
              <Link to={"/Entertainment"}>Entertainment</Link>
            </li>

            <li
              onMouseEnter={(event) => {
                event.preventDefault();
                setHovering(9);
                onMouseEnter(9, event.currentTarget);
              }}
              className="hover_accesory text-[12px] text-[#000000CC] cursor-pointer font-medium"
            >
              <Link to={"/Accessories"}>Accessories</Link>
            </li>

            <li
              onMouseEnter={(event) => {
                event.preventDefault();
                setHovering(10);
                onMouseEnter(10, event.currentTarget);
              }}
              className="hover_suport text-[12px] text-[#000000CC] cursor-pointer font-medium"
            >
              <Link to={"/Support"}>Support</Link>
            </li>
          </ul>
          {/* smalledth header */}
          <SmallWidthHeader setIsclosed={setIsclosed} isClosed={isClosed} />
          {/* end here */}
          <div className="flex gap-5">
            <IoSearchOutline
              onMouseEnter={(event) => {
                event.preventDefault();
                setHovering(11);
                onMouseEnter(11, event.currentTarget);
              }}
              className="cursor-pointer"
            />
            <IoBagOutline
              onMouseEnter={(event) => {
                event.preventDefault();
                setHovering(12);
                onMouseEnter(12, event.currentTarget);
              }}
              className="cursor-pointer"
            />
            <button onClick={() => setIsclosed(false)} className="md:hidden">
              <HiOutlineMenuAlt4 className="cursor-pointer" />
            </button>
          </div>
        </ul>
        <div className="w-full xs:hidden md:block xl:group-hover:h-[0px] h-0 duration-400 ease-in-out-custom group-hover:h-[500px] group-hover:pt-1 bg-gray-100 transition-all">
          {typeof hovering === "number" && (
            <div
              style={{
                height: popoverHeight || 0,
              }}
              className="absolute top-10  left-0  xl:group-hover:h-[0px]  group-hover:h-[500px] transition-all transition-delay 
               duration-400 z-50 ease-in-out-custom   bg-[#fcfcfc]  p-3  rounded w-full"
            >
              {typeof hovering === "number" && (
                <div>
                  <div
                    className={clsx(
                      "absolute  transition-opacity",
                      hovering == 0 ? "opacity-100" : "opacity-0"
                    )}
                  >
                    <Store ref={(element) => (refs.current[0] = element)} />
                  </div>

                  <div
                    className={clsx(
                      "absolute  transition-opacity",
                      hovering == 1 ? "opacity-100" : "opacity-0"
                    )}
                  >
                    <Mac ref={(element) => (refs.current[1] = element)} />
                  </div>

                  <div
                    className={clsx(
                      "absolute  transition-opacity",
                      hovering == 2 ? "opacity-100" : "opacity-0"
                    )}
                  >
                    <IPad ref={(element) => (refs.current[2] = element)} />
                  </div>

                  <div
                    className={clsx(
                      "absolute  transition-opacity",
                      hovering == 3 ? "opacity-100" : "opacity-0"
                    )}
                  >
                    <IPhone ref={(element) => (refs.current[3] = element)} />
                  </div>

                  <div
                    className={clsx(
                      "absolute  transition-opacity",
                      hovering == 4 ? "opacity-100" : "opacity-0"
                    )}
                  >
                    <Watch ref={(element) => (refs.current[4] = element)} />
                  </div>

                  <div
                    className={clsx(
                      "absolute  transition-opacity",
                      hovering == 5 ? "opacity-100" : "opacity-0"
                    )}
                  >
                    <Vision ref={(element) => (refs.current[5] = element)} />
                  </div>

                  <div
                    className={clsx(
                      "absolute  transition-opacity",
                      hovering == 6 ? "opacity-100" : "opacity-0"
                    )}
                  >
                    <AirPods ref={(element) => (refs.current[6] = element)} />
                  </div>

                  <div
                    className={clsx(
                      "absolute  transition-opacity",
                      hovering == 7 ? "opacity-100" : "opacity-0"
                    )}
                  >
                    <TVHome ref={(element) => (refs.current[7] = element)} />
                  </div>

                  <div
                    className={clsx(
                      "absolute  transition-opacity",
                      hovering == 8 ? "opacity-100" : "opacity-0"
                    )}
                  >
                    <Entertainment
                      ref={(element) => (refs.current[8] = element)}
                    />
                  </div>

                  <div
                    className={clsx(
                      "absolute  transition-opacity",
                      hovering == 9 ? "opacity-100" : "opacity-0"
                    )}
                  >
                    <Accessories
                      ref={(element) => (refs.current[9] = element)}
                    />
                  </div>

                  <div
                    className={clsx(
                      "absolute  transition-opacity",
                      hovering == 10 ? "opacity-100" : "opacity-0"
                    )}
                  >
                    <Support ref={(element) => (refs.current[10] = element)} />
                  </div>

                  <div
                    className={clsx(
                      "absolute  transition-opacity",
                      hovering == 11 ? "opacity-100" : "opacity-0"
                    )}
                  >
                    <Search ref={(element) => (refs.current[11] = element)} />
                  </div>

                  <div
                    className={clsx(
                      "absolute  transition-opacity",
                      hovering == 12 ? "opacity-100" : "opacity-0"
                    )}
                  >
                    <Basket ref={(element) => (refs.current[12] = element)} />
                  </div>
                  {/* end */}
                </div>
              )}
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default MainHeader;
