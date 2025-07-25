// src/components/SpeechGrid.tsx
"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function SpeechGrid() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px 0px" });

  return (
    <div className="w-3/5 mx-auto"> {/* %60 width, centered */}
      <div className="grid grid-cols-2 items-start gap-6">
        {/* Yukarıdan kayarak gelen konuşma balonu */}
        <motion.div
          ref={ref}
          initial={{ y: -200, opacity: 0, rotate: 0 }}
          animate={
            inView
              ? {
                  y: 0,
                  opacity: 1,
                  rotate: [0, 15, -15, 10, -10, 0], // keyframes ile sallanma
                }
              : {}
          }
          transition={{
            y: {
              type: "spring",
              stiffness: 25,    // ne kadar düşük o kadar yavaş ve esnek
              damping: 20,
            },
            opacity: { duration: 0.8 },
            rotate: {
              duration: 1.5,    // sallanma süresi
              ease: "easeInOut",
            },
          }}
          className="speech-bubble w-full"
        >
          Bu birinci cümledir. Bu ikinci cümledir. Bu üçüncü cümledir. Bu dördüncü cümledir.
          Bu beşinci cümledir. Bu altıncı cümledir. Bu yedinci cümledir. Bu sekizinci cümledir.
          Bu dokuzuncu cümledir. Bu onuncu cümledir.
        </motion.div>

        {/* Sabit kutu */}
        <div className="w-full bg-rose-200 text-black p-6 rounded-lg shadow-md">
          Bu birinci cümledir. Bu ikinci cümledir. Bu üçüncü cümledir. Bu dördüncü cümledir.
          Bu beşinci cümledir. Bu altıncı cümledir. Bu yedinci cümledir. Bu sekizinci cümledir.
          Bu dokuzuncu cümledir. Bu onuncu cümledir.
        </div>
      </div>
    </div>
  );
}
