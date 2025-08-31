import React from "react";

const Dummy2 = () => {
  return (
    <div className="min-h-[550px] flex flex-col md:flex-row items-center justify-center bg-gray-800 text-white shadow-xl border-b border-gray-700 p-6 md:p-12">
      {/* Image Section */}
      <div className="w-full md:w-1/2 flex justify-center md:justify-end mb-6 md:mb-0">
        <img
          src="https://placehold.co/400x400"
          alt="placeholder"
          className="w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px] rounded-[30px] object-cover border bg-white"
        />
      </div>

      {/* Text Section */}
      <div className="w-full md:w-1/2 flex justify-center md:justify-start text-center md:text-left">
        <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold leading-relaxed max-w-[600px]">
          Join thousands on the road to recovery. Get exclusive offers, updates,
          and recovery tips.
        </p>
      </div>
    </div>
  );
};

export default Dummy2;
