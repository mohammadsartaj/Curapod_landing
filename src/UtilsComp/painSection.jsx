/* eslint-disable no-unused-vars */
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import neckPainImg from "../assets/pain1.jpg";
import backPainImg from "../assets/pain2.jpg";
import shoulderPainImg from "../assets/pain3.jpg";

const PainSection = () => {
  const cards = [
    {
      img: neckPainImg,
      title: "Neck stiffness?",
      desc: "Too many hours at the desk strain your neck. Curapod soothes it in minutes.",
    },
    {
      img: backPainImg,
      title: "Back pain from sitting too long?",
      desc: "Long desk hours lead to lower back stress. Curapod melts it away in just 30 minutes.",
    },
    {
      img: shoulderPainImg,
      title: "Shoulder soreness?",
      desc: "Workout strain or posture issues? Curapod relieves shoulder tension effectively.",
    },
  ];

  const cardRefs = useRef([]);

  useEffect(() => {
    cardRefs.current.forEach((card) => {
      if (!card) return;

      const overlay = card.querySelector(".gradient-overlay");
      const text = card.querySelector(".text-overlay");

      gsap.set(overlay, { opacity: 0, y: 20 });
      gsap.set(text, { opacity: 0, y: 20 });

      const hoverTimeline = gsap.timeline({ paused: true });
      hoverTimeline.to(overlay, { opacity: 1, y: 0, duration: 0.4 }, 0);
      hoverTimeline.to(text, { opacity: 1, y: 0, duration: 0.4 }, 0);

      const shadowTween = gsap.to(card, {
        boxShadow: "0px 20px 40px rgba(255, 0, 0, 0.5)",
        duration: 0.4,
        paused: true,
      });

      const scaleTween = gsap.to(card, {
        scale: 1.07,
        duration: 0.4,
        paused: true,
      });

      const resetTilt = () => {
        gsap.to(card, {
          rotateX: 0,
          rotateY: 0,
          x: 0,
          y: 0,
          duration: 0.6,
        });
      };

      const onEnter = () => {
        scaleTween.play();
        shadowTween.play();
        hoverTimeline.play();
      };

      const onLeave = () => {
        scaleTween.reverse();
        shadowTween.reverse();
        hoverTimeline.reverse();
        resetTilt();
      };

      const onMove = (e) => {
        const rect = card.getBoundingClientRect();
        const cardWidth = rect.width;
        const cardHeight = rect.height;
        const centerX = rect.left + cardWidth / 2;
        const centerY = rect.top + cardHeight / 2;

        const mouseX = e.clientX - centerX;
        const mouseY = e.clientY - centerY;

        const rotateX = (-mouseY / (cardHeight / 2)) * 15;
        const rotateY = (mouseX / (cardWidth / 2)) * 15;

        const translateX = (mouseX / (cardWidth / 2)) * 10;
        const translateY = (mouseY / (cardHeight / 2)) * 10;

        gsap.to(card, {
          rotateX,
          rotateY,
          x: translateX,
          y: translateY,
          duration: 0.3,
        });
      };

      card.addEventListener("mouseenter", onEnter);
      card.addEventListener("mouseleave", onLeave);
      card.addEventListener("mousemove", onMove);

      return () => {
        card.removeEventListener("mouseenter", onEnter);
        card.removeEventListener("mouseleave", onLeave);
        card.removeEventListener("mousemove", onMove);
      };
    });
  }, []);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white px-4 sm:px-6 lg:px-12">
      {/* Title */}
      <h1 className="text-center text-3xl sm:text-4xl lg:text-5xl font-bold">
        Where Does It Hurt the Most?
      </h1>
      <h3 className="text-center mt-3 text-base sm:text-lg lg:text-xl max-w-3xl">
        Whether it’s neck stiffness, back pain from sitting all day, or soreness
        after workouts — Curapod is made to relieve it all.
      </h3>

      {/* Grid Section */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {cards.map((card, index) => (
          <div
            key={index}
            ref={(el) => (cardRefs.current[index] = el)}
            className="relative w-full max-w-sm aspect-[4/5] rounded-2xl shadow-md overflow-hidden cursor-pointer mx-auto"
            style={{
              boxShadow: "0px 4px 4px 0px #00000040",
            }}
          >
            <img
              src={card.img}
              alt={card.title}
              className="w-full h-full object-cover rounded-2xl"
              draggable={false}
            />

            <div className="gradient-overlay absolute inset-0 rounded-2xl bg-gradient-to-b from-transparent via-transparent to-red-600/60 pointer-events-none"></div>

            <div className="text-overlay absolute bottom-0 p-4 sm:p-5 text-left text-white pointer-events-none">
              <h3 className="text-lg font-bold">{card.title}</h3>
              <p className="text-sm mt-1">{card.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Button */}
      <div className="mt-10 mb-12 text-center">
        <button className="border-red-600 border-2 px-6 py-2 rounded-full cursor-pointer text-white font-bold hover:bg-red-600 hover:text-black transition duration-300">
          See How Curapod Relieves Each Type Of Pain
        </button>
      </div>
    </section>
  );
};

export default PainSection;
