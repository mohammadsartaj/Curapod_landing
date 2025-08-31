import React from "react";
import Nav from "../UtilsComp/nav";
import Footer from "../UtilsComp/Footer";
import HeroSection from "../UtilsComp/HeroSection";
import TopBox from "../UtilsComp/Topbox";
import PainSection from "../UtilsComp/painSection";
import Dummy1 from "../UtilsComp/dumy1";
import Ad1 from "../UtilsComp/Ad1";
import Footertop from "../UtilsComp/footertop";
import Dummy2 from "../UtilsComp/dummy2";
import Team from "../UtilsComp/Team";
import Banner from "../UtilsComp/banner";
import Review from "../UtilsComp/Review";
import Story from "../UtilsComp/store";
const LandingPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white ">
      <TopBox />
      <Nav />
      <div className="flex-grow">
        <HeroSection />
        <PainSection />
        <Dummy1 />
        <Ad1 />
        <Banner />
        <Review />
        <Story />
        <Team />
        <Dummy2 />
        <Footertop />
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;
