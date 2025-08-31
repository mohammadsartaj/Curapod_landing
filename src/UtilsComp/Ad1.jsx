import React from "react";
import img from "../assets/ad1.jpg";

const Ad1 = () => {
  return (
    <div className="min-h-[515px] flex items-center justify-between bg-black text-white shadow-md border-b border-gray-800">
      <div className="max-w-[50%]  text-[100px] font-medium  flex flex-col ml-[100px] mr-[30px] space-y-4 items-start justify-center opacity-[80%]">
        <h1>LIGHT</h1>
        <h1>BASED</h1>
        <h1 className="text-[#FF4040]">PAIN</h1>
        <h1>THERAPY</h1>
      </div>
      <div>
        <img src={img} alt="img" className="" />
      </div>
    </div>
  );
};

export default Ad1;
