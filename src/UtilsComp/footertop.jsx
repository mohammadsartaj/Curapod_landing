import React from "react";
import bgimg from "../assets/footertopbg.jpg";
import logo from "../assets/image.png";
import { ArrowUpRight } from "lucide-react";

const Footertop = () => {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center text-white text-center bg-black " //shadow-[0_-20px_30px_white]"
      style={{
        backgroundImage: `url(${bgimg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-b from-white/40 to-transparent"></div>
      {/* Centered Product Image */}
      <img
        src={logo}
        alt="Curapod"
        className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] hover:scale-105 transition-transform "
      />

      {/* Text */}
      <div className="mt-6 space-y-3">
        <h2 className="text-xl md:text-2xl font-semibold">
          Ready to Take Control of Your Pain?
        </h2>
        <p className="text-sm md:text-lg max-w-2xl mx-auto">
          Experience non-invasive, clinically-backed recovery — powered by
          light.
        </p>
      </div>

      {/* Button */}
      <div className="mt-6">
        <button className="px-6 py-3 bg-white text-black rounded-full font-semibold shadow-lg hover:bg-gray-200 transition flex items-center gap-2 cursor-pointer">
          Order Now{" "}
          <span className="text-lg">
            <ArrowUpRight />
          </span>
        </button>
      </div>
    </section>
  );
};

export default Footertop;
