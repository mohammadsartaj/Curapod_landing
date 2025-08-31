import React from "react";
import bannerimg from "../assets/banner.PNG";

const Banner = () => {
  return (
    <div className="w-full">
      <img
        src={bannerimg}
        alt="banner"
        className="w-full h-[250px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-fill"
      />
    </div>
  );
};

export default Banner;
