import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    title: "Truly Pain Management Device",
    text: "The CURAPOD was bought 8 weeks back has reduced my painful right knee to the extent of 90% and as on today I have no issue of limping while walking steps...",
    name: "Dayanand Baburao Kamat",
    date: "07/02/2025",
    rating: 5,
  },
  {
    title: "Life Changing Experience",
    text: "After using CURAPOD, I can now walk longer distances without pain. Truly a revolutionary device!",
    name: "Anita Sharma",
    date: "12/01/2025",
    rating: 5,
  },
  {
    title: "Highly Effective",
    text: "CURAPOD helped me recover much faster than expected. I recommend it to everyone suffering from knee pain.",
    name: "Rajesh Gupta",
    date: "28/12/2024",
    rating: 4,
  },
  {
    title: "Very Useful Device",
    text: "My mobility has improved drastically. I feel more confident and energetic every day.",
    name: "Suresh Kumar",
    date: "20/01/2025",
    rating: 5,
  },
];

const Review = () => {
  return (
    <div className="min-h-screen bg-black text-white px-4 sm:px-8 md:px-12 py-16 overflow-hidden relative">
      {/* Inline custom keyframes */}
      <style>
        {`
          @keyframes scrollLeft {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          @keyframes scrollRight {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0); }
          }
          .scroll-left {
            animation: scrollLeft 30s linear infinite;
            animation-play-state: running;
          }
          .scroll-right {
            animation: scrollRight 30s linear infinite;
            animation-play-state: running;
          }
          .scroll-wrapper:hover .scroll-left,
          .scroll-wrapper:hover .scroll-right {
            animation-play-state: paused;
          }
          /* Fade edges */
          .fade-mask::before,
          .fade-mask::after {
            content: "";
            position: absolute;
            top: 0;
            width: 80px;
            height: 100%;
            pointer-events: none;
            z-index: 10;
          }
          .fade-mask::before {
            left: 0;
            background: linear-gradient(to right, black, transparent);
          }
          .fade-mask::after {
            right: 0;
            background: linear-gradient(to left, black, transparent);
          }
        `}
      </style>

      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12">
        “Curapod Stories from Real Users”
      </h1>

      {/* Row 1 - scrolls left */}
      <div className="relative w-full overflow-hidden scroll-wrapper cursor-pointer fade-mask mb-10">
        <div className="flex w-max scroll-left">
          {[...testimonials, ...testimonials].map((t, i) => (
            <Card
              key={`row1-${i}`}
              className="flex-shrink-0 mx-3 sm:mx-4 rounded-2xl shadow-lg bg-white text-black"
              style={{
                width: "300px",
                height: "auto",
              }}
            >
              <CardContent className="flex flex-col h-full p-4 sm:p-6">
                <h2 className="text-base sm:text-lg md:text-xl font-semibold mb-3">
                  {t.title}
                </h2>
                <p className="text-sm sm:text-base text-gray-700 mb-3 flex-grow">
                  {t.text}
                </p>
                <div>
                  <p className="font-medium text-sm sm:text-base">{t.name}</p>
                  <p className="text-xs text-gray-500">{t.date}</p>
                  <div className="flex mt-2">
                    {Array.from({ length: t.rating }).map((_, idx) => (
                      <Star
                        key={idx}
                        className="text-yellow-400 fill-yellow-400 w-4 h-4 sm:w-5 sm:h-5"
                      />
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Row 2 - scrolls right */}
      <div className="relative w-full overflow-hidden scroll-wrapper cursor-pointer fade-mask">
        <div className="flex w-max scroll-right">
          {[...testimonials, ...testimonials].map((t, i) => (
            <Card
              key={`row2-${i}`}
              className="flex-shrink-0 mx-3 sm:mx-4 rounded-2xl shadow-lg bg-white text-black"
              style={{
                width: "300px",
                height: "auto",
              }}
            >
              <CardContent className="flex flex-col h-full p-4 sm:p-6">
                <h2 className="text-base sm:text-lg md:text-xl font-semibold mb-3">
                  {t.title}
                </h2>
                <p className="text-sm sm:text-base text-gray-700 mb-3 flex-grow">
                  {t.text}
                </p>
                <div>
                  <p className="font-medium text-sm sm:text-base">{t.name}</p>
                  <p className="text-xs text-gray-500">{t.date}</p>
                  <div className="flex mt-2">
                    {Array.from({ length: t.rating }).map((_, idx) => (
                      <Star
                        key={idx}
                        className="text-yellow-400 fill-yellow-400 w-4 h-4 sm:w-5 sm:h-5"
                      />
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Review;
