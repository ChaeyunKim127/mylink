"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative w-full flex flex-col items-center justify-center pt-24 pb-10 px-4 min-h-screen">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[100px] pointer-events-none" />

      {/* Floating 3D Background Assets (Points on sides) */}
      <motion.div 
        className="absolute top-[15%] left-[5%] md:left-[15%] w-32 h-32 md:w-48 md:h-48 animate-float pointer-events-none opacity-50 mix-blend-screen"
      >
        <Image src="/assets/book-3d.png" alt="3D Books" fill className="object-contain" priority />
      </motion.div>
      
      <motion.div 
        className="absolute bottom-[10%] right-[5%] md:right-[15%] w-40 h-40 md:w-56 md:h-56 animate-float-slow pointer-events-none opacity-50 mix-blend-screen"
      >
        <Image src="/assets/engineering-3d.png" alt="3D Engineering Gear" fill className="object-contain" priority />
      </motion.div>

      <motion.div 
        className="absolute top-[40%] right-[10%] md:top-[30%] md:right-[25%] w-24 h-24 md:w-40 md:h-40 animate-float-reverse pointer-events-none opacity-40 mix-blend-screen -z-10"
      >
        <Image src="/assets/pen-3d.png" alt="3D Pen" fill className="object-contain" priority />
      </motion.div>


      {/* Floating Hanyang Symbol */}
      <motion.div 
        animate={{ y: [0, -15, 0], rotate: [0, 2, -2, 0] }}
        transition={{ duration: 6, ease: "easeInOut", repeat: Infinity }}
        className="relative w-48 h-48 md:w-56 md:h-56 mix-blend-screen mb-8 z-10"
      >
        <Image 
          src="/assets/hanyang-symbol.png" 
          alt="Hanyang University Symbol" 
          fill 
          className="object-contain" 
          priority 
        />
      </motion.div>

      {/* Main Text Content */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="z-10 text-center flex flex-col items-center"
      >
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
          김채윤
        </h1>
        
        <div className="bg-white/10 backdrop-blur-md rounded-2xl px-8 py-3 border border-white/10 flex flex-col items-center gap-1">
          <p className="text-lg md:text-xl text-white font-semibold">
            안녕하세요!
          </p>
          <p className="text-sm md:text-base text-blue-200 tracking-wide">
            한양대학교 26학번 전기공학전공
          </p>
        </div>
      </motion.div>
    </section>
  );
}
