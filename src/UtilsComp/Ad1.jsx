import React from "react";
import img from "../assets/ad1.jpg";

const Ad1 = () => {
  return (
    <div className="min-h-[400px] flex flex-col lg:flex-row items-center justify-between bg-black text-white shadow-md border-b border-gray-800 p-6 lg:p-12">
      {/* Left Text Section */}
      <div className="w-full lg:w-1/2 text-[40px] sm:text-[60px] md:text-[80px] lg:text-[100px] font-medium flex flex-col space-y-2 sm:space-y-4 items-center lg:items-start justify-center opacity-80 text-center lg:text-left">
        <h1>LIGHT</h1>
        <h1>BASED</h1>
        <h1 className="text-[#FF4040]">PAIN</h1>
        <h1>THERAPY</h1>
      </div>

      {/* Right Image Section */}
      <div className="w-full lg:w-1/2 flex justify-center mt-6 lg:mt-0">
        <img
          src={img}
          alt="img"
          className="w-full max-w-[450px] rounded-xl object-cover"
        />
      </div>
    </div>
  );
};

export default Ad1;
