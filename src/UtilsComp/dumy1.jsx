import React from "react";
import curapodimg from "../assets/image.png";

const Dumy1 = () => {
  return (
    <div className="min-h-[400px] flex flex-col lg:flex-row items-center justify-between bg-gray-800 text-white shadow-xl border-b border-gray-700 px-6 lg:px-20 py-10">
      {/* Image Section */}
      <div className="w-full lg:w-1/3 flex justify-center mb-6 lg:mb-0">
        <img
          src={curapodimg}
          alt="product-img"
          className="w-full max-w-[300px] lg:max-w-full rounded-xl hover:shadow-amber-300"
        />
      </div>

      {/* Text Section */}
      <div className="w-full lg:w-2/3 lg:ml-10">
        <p className="text-2xl sm:text-3xl lg:text-[50px] font-medium leading-relaxed lg:leading-[70px] text-center lg:text-left">
          Users experience up to{" "}
          <span className="bg-red-300 py-1 px-3 rounded-[20px] text-[#FF0000]">
            80% faster
          </span>{" "}
          pain relief after using Curapod for targeted muscle recovery.
        </p>
      </div>
    </div>
  );
};

export default Dumy1;
