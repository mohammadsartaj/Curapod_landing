import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";

const testimonials = [
  {
    title: "A Game-Changer for Joint Pain Relief",
    text: "As a 22-year-old suffering from joint pain, I was skeptical about finding effective relief. However, Curapod has been a game-changer. This non-invasive light therapy device has significantly reduced my pain and inflammation ",
    name: "Durga Prasad",
    role: "Mechanical design engineer",
    videoUrl: "#",
  },
  {
    title: "Finally Found Relief",
    text: "After trying many methods, Curapod gave me real relief from chronic knee pain. I can finally walk comfortably without hesitation.",
    name: "Anjali Mehra",
    role: "Fitness Enthusiast",
    videoUrl: "#",
  },
  {
    title: "No More Stiffness",
    text: "Curapod has made my mornings easier. The stiffness in my joints has reduced and I feel more mobile throughout the day.",
    name: "Ravi Kumar",
    role: "Software Engineer",
    videoUrl: "#",
  },
];

const ReviewSlider = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  return (
    <div className="bg-black py-12 sm:py-16 px-4 sm:px-6 lg:px-10 flex flex-col items-center relative">
      <h2 className="text-white text-xl sm:text-2xl md:text-3xl font-semibold mb-8 sm:mb-10 text-center">
        Watch Curapod in action — from real customers
      </h2>

      {/* Slider */}
      <div className="relative w-full max-w-7xl">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {testimonials.map((t, i) => (
              <Card
                key={i}
                className="flex-shrink-0 mx-2 rounded-2xl overflow-hidden bg-white"
              >
                <CardContent className="flex flex-col h-full p-4 sm:p-6 w-[85vw] sm:w-[360px] md:w-[420px] lg:w-[520px]">
                  {/* Avatar placeholder */}
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gray-200 mb-4" />

                  {/* Video placeholder */}
                  <div className="flex-1 flex items-center justify-center mb-6">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border border-gray-400 flex items-center justify-center cursor-pointer">
                      <Play className="w-8 h-8 sm:w-10 sm:h-10 text-gray-600" />
                    </div>
                  </div>

                  {/* Title & Text */}
                  <h3 className="text-base sm:text-lg font-semibold mb-3">
                    {t.title}
                  </h3>
                  <p className="text-gray-700 text-sm sm:text-base mb-4">
                    {t.text}
                    <a
                      href={t.videoUrl}
                      className="text-blue-500 hover:underline ml-1"
                    >
                      see full video...
                    </a>
                  </p>

                  {/* Signature */}
                  <div className="mt-auto">
                    <p className="font-handwriting text-lg sm:text-xl">
                      — {t.name}
                    </p>
                    <p className="text-gray-500 text-xs sm:text-sm">{t.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Arrows (desktop only) */}
        <button
          onClick={scrollPrev}
          className="hidden md:flex absolute left-[-50px] top-1/2 -translate-y-1/2 bg-white rounded-full shadow-md p-2"
        >
          <ChevronLeft className="w-8 h-8 md:w-10 md:h-10 text-black" />
        </button>
        <button
          onClick={scrollNext}
          className="hidden md:flex absolute right-[-50px] top-1/2 -translate-y-1/2 bg-white rounded-full shadow-md p-2"
        >
          <ChevronRight className="w-8 h-8 md:w-10 md:h-10 text-black" />
        </button>
      </div>
    </div>
  );
};

export default ReviewSlider;
