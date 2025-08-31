import React from "react";
import bannerimg from "../assets/banner.PNG";
const banner = () => {
  return (
    <div className="h-[600px]">
      <img src={bannerimg} alt="" className="w-full h-full" />
    </div>
  );
};

export default banner;
