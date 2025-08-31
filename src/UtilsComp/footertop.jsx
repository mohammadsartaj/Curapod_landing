import React from "react";
import bgimg from "../assets/footertopbg.jpg";
import logo from "../assets/image.png";
import { ArrowUpRight } from "lucide-react";

const Footertop = () => {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center text-white text-center bg-black px-4 sm:px-6 lg:px-8"
      style={{
        backgroundImage: `url(${bgimg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Top Gradient Border */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-b from-white/40 to-transparent"></div>

      {/* Centered Product Image */}
      <img
        src={logo}
        alt="Curapod"
        className="w-[180px] h-[180px] sm:w-[250px] sm:h-[250px] md:w-[320px] md:h-[320px] lg:w-[400px] lg:h-[400px] hover:scale-105 transition-transform duration-300"
      />

      {/* Text */}
      <div className="mt-6 space-y-3 max-w-xl px-2">
        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold leading-snug">
          Ready to Take Control of Your Pain?
        </h2>
        <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-200">
          Experience non-invasive, clinically-backed recovery — powered by
          light.
        </p>
      </div>

      {/* Button */}
      <div className="mt-6">
        <button className="px-5 sm:px-6 lg:px-8 py-2 sm:py-3 bg-white text-black rounded-full font-semibold shadow-lg hover:bg-gray-200 transition flex items-center gap-2 text-sm sm:text-base">
          Order Now{" "}
          <span className="text-base sm:text-lg">
            <ArrowUpRight />
          </span>
        </button>
      </div>
    </section>
  );
};

export default Footertop;
