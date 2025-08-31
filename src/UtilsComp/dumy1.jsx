import React from "react";
import curapodimg from "../assets/image.png";

const dumy1 = () => {
  return (
    <div className="min-h-[515px] flex items-center justify-between bg-gray-800 text-white shadow-xl border-b border-gray-700">
      <div className="max-w-[35%] ml-20">
        <img
          src={curapodimg}
          alt="product-img"
          className="hover:shadow-amber-300"
        />
      </div>
      <div className="max-w-[75%] ml-10">
        <p className="text-[50px] font-medium mb-6 leading-[80px]">
          Users experience up to{" "}
          <span className="bg-red-300 py-2 px-4  rounded-[20px] text-[#FF0000]">
            80% faster
          </span>{" "}
          pain relief after using Curapod for targeted muscle recovery.
        </p>
      </div>
    </div>
  );
};

export default dumy1;
