import React from "react";
import bgvideo from "../assets/curapod1.mp4";
import { ArrowUpRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={bgvideo}
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Dark overlay for better contrast */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-6 md:px-12 max-w-4xl">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight drop-shadow-lg">
          Experience Pain Relief with{" "}
          <span className="text-orange-400">Curapod</span>
        </h1>

        <p className="mt-6 text-base md:text-lg lg:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
          Discover how Curapod’s innovative light therapy helps reduce pain and
          inflammation naturally.
        </p>

        {/* CTA Button */}
        <div className="mt-8 flex justify-center">
          <button className="bg-white text-black px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold text-base md:text-lg flex items-center gap-2 hover:bg-gray-200 transition-all duration-300 shadow-lg">
            Get Relief Now <ArrowUpRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Scroll/Explore Section */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center z-10">
        <h3 className="text-sm md:text-base text-white">
          <a href="#how-it-works" className="hover:underline">
            See How Curapod Works
          </a>
        </h3>
      </div>
    </section>
  );
};

export default HeroSection;
