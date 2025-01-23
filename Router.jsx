import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { FadeLoader } from "react-spinners";

const MainHeader = React.lazy(() => import("./components/header/mainHeader"));
const Footer = React.lazy(() => import("./components/Footer/footer"));
const MainHome = React.lazy(() => import("./pages/Home/mainHome"));
const Store = React.lazy(() => import("./pages/Store/mainStore"));
const MainMac = React.lazy(() => import("./pages/Mac/mainMac"));
const MainIpad = React.lazy(() => import("./pages/Ipad/mainIpad"));
const MainIphone = React.lazy(() => import("./pages/Iphone/mainIphone"));
const MainWatch = React.lazy(() => import("./pages/Watch/mainWatch"));
const MainVision = React.lazy(() => import("./pages/Vision/mainVision"));
const Mainairpod = React.lazy(() => import("./pages/Airpod/mainairpod"));
const MainTvandHome = React.lazy(() => import("./pages/Tv&Home/mainTvandHome"));
const MainEntertainment = React.lazy(() =>
  import("./pages/Entertainment/mainEntertainment")
);
const Mainaccessories = React.lazy(() =>
  import("./pages/accessories/Mainaccessories")
);
const MainSupport = React.lazy(() => import("./pages/Support/mainSupport"));

const AppRouter = () => {
  return (
    <Suspense
      fallback={
        <div className="flex justify-center items-center h-screen">
          <FadeLoader color="black" size={50} />
        </div>
      }
    >
      <Router>
        <MainHeader />
        <Routes>
          <Route path="/" element={<MainHome />} />
          <Route path="/store" element={<Store />} />
          <Route path="/mac" element={<MainMac />} />
          <Route path="/ipad" element={<MainIpad />} />
          <Route path="/iphone" element={<MainIphone />} />
          <Route path="/watch" element={<MainWatch />} />
          <Route path="/vision" element={<MainVision />} />
          <Route path="/airpod" element={<Mainairpod />} />
          <Route path="/Tv_Home" element={<MainTvandHome />} />
          <Route path="/Entertainment" element={<MainEntertainment />} />
          <Route path="/Accessories" element={<Mainaccessories />} />
          <Route path="/Support" element={<MainSupport />} />
        </Routes>
        <Footer />
      </Router>
    </Suspense>
  );
};

export default AppRouter;
