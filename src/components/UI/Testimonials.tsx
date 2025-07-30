"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSwipeable } from "react-swipeable";

const testimoni = [
  {
    image: "/images/sara.svg",
    name: "Clara Walker",
    description:
      "This trip was exactly what I needed to unwind. The views were stunning, the service was exceptional, and I came home feeling completely refreshed. I’m already planning my next getaway with them!",
  },
  {
    image: "/images/couple.svg",
    name: "Benjamin & Melissa",
    description:
      "Our honeymoon was absolutely magical. From the moment we arrived, everything was perfectly taken care of. We made unforgettable memories, and the sunsets were breathtaking!",
  },
  {
    image: "/images/family.svg",
    name: "The Sellers Family",
    description:
      "Traveling with kids can be stressful, but this experience was smooth and joyful from start to finish. The activities were fun for all ages, and the staff made us feel like family.",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  // Auto slide
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimoni.length);
    }, 9000);
    return () => clearInterval(timer);
  }, []);

  // Swipe handler
  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => setIndex((prev) => (prev + 1) % testimoni.length),
    onSwipedRight: () =>
      setIndex((prev) => (prev - 1 + testimoni.length) % testimoni.length),
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  return (
    <div className="flex flex-col items-center py-10 lg:hidden gap-8 ">
        <h1 className="text-white text-4xl font-extralight">Our Testimonials</h1>
      <div
        {...swipeHandlers}
        className="w-[400px] h-[450px] relative overflow-hidden flex justify-center items-center"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="absolute w-4/5 h-full bg-white/5 backdrop-blur-md border border-white/20 p-6 shadow-lg text-white flex flex-col items-center gap-5"
          >
            <img
              src={testimoni[index].image}
              alt={testimoni[index].name}
              className="w-full h-[178px]"
            />
            <p className="text-[18px] text-center">{testimoni[index].description}</p>
            <p className="text-[18px] text-center font-semibold">
              {testimoni[index].name}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Dots */}
      <div className="flex mt-4 gap-2">
        {testimoni.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full ${
              index === i ? "bg-white" : "bg-white/30"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
}