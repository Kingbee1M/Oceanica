"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSwipeable } from "react-swipeable";

const choices = [
  {
    image: "/images/palmtree.svg",
    name: "Punta Monita",
    description: "Discover a tranquil paradise with golden sands, swaying palms, and crystal-clear waters. Perfect for relaxation and coastal adventure.",
    price: "from $399 pp",
  },
  {
    image: "/images/island-breeze.jpg",
    name: "Island Breeze",
    description: "Feel the warm breeze on your skin as you explore vibrant island life, exotic cuisine, and breathtaking ocean views.",
    price: "from $499 pp",
  },
  {
    image: "/images/Ocean-whisper.jpg",
    name: "Ocean Whisper",
    description: "Immerse yourself in a serene escape where the sound of the sea guides you through hidden coves and unforgettable sunsets.",
    price: "from $599 pp",
  },
];
export default function Choices() {
  const [index, setIndex] = useState(0);

  // Auto slide
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % choices.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Swipe handler
  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => setIndex((prev) => (prev + 1) % choices.length),
    onSwipedRight: () =>
      setIndex((prev) => (prev - 1 + choices.length) % choices.length),
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  return (
    <div className="flex flex-col items-center py-10 lg:hidden">
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
              src={choices[index].image}
              alt={choices[index].name}
              className="w-full h-[178px]"
            />
            <h3 className="text-[28px] text-center">{choices[index].name}</h3>
            <p className="text-[18px] text-center">{choices[index].description}</p>
            <p className="text-[18px] text-center font-semibold">
              {choices[index].price}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Dots */}
      <div className="flex mt-4 gap-2">
        {choices.map((_, i) => (
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


                //                 <div className="w-full flex flex-col items-center gap-5 text-white bg-white/5 backdrop-blur-md border border-white/20 p-6 shadow-lg">
                //     <img src="/images/palmtree.svg" alt="spring" className="w-full h-auto" />
                //     <h2 className="text-[36px] text-center">Punta Monita</h2>
                //     <p className="w-4/5 text-[21px] text-center">
                //     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                //     </p>
                //     <p className="w-4/5 text-[21px] text-center">from $399 pp</p>
                // </div>