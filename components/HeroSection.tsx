"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export default function HeroSection() {
  const { scrollY } = useScroll();
  
  // Parallax effects
  const yText = useTransform(scrollY, [0, 500], [0, 150]);
  const yBook = useTransform(scrollY, [0, 500], [0, -100]);
  const yEngineering = useTransform(scrollY, [0, 500], [0, -50]);
  const yPen = useTransform(scrollY, [0, 500], [0, -150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[100px] pointer-events-none" />

      {/* Floating 3D Elements */}
      <motion.div 
        style={{ y: yBook }}
        className="absolute top-1/4 left-1/4 w-48 h-48 md:w-72 md:h-72 animate-float pointer-events-none opacity-80 mix-blend-screen"
      >
        <Image src="/assets/book-3d.png" alt="3D Books" fill className="object-contain" priority />
      </motion.div>
      
      <motion.div 
        style={{ y: yEngineering }}
        className="absolute bottom-1/4 left-[10%] w-56 h-56 md:w-80 md:h-80 animate-float-slow pointer-events-none opacity-90 mix-blend-screen"
      >
        <Image src="/assets/engineering-3d.png" alt="3D Engineering Gear" fill className="object-contain" priority />
      </motion.div>

      <motion.div 
        style={{ y: yPen }}
        className="absolute top-1/3 right-[10%] w-40 h-40 md:w-64 md:h-64 animate-float-reverse pointer-events-none opacity-90 mix-blend-screen"
      >
        <Image src="/assets/pen-3d.png" alt="3D Pen" fill className="object-contain" priority />
      </motion.div>

      {/* Main Text Content */}
      <motion.div 
        style={{ y: yText, opacity }}
        className="z-10 text-center px-4"
      >
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-6xl md:text-8xl lg:text-[10rem] font-bold tracking-tighter"
        >
          <span className="text-white">김채</span>
          <span className="text-gradient-primary">윤</span>
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-6 flex flex-col items-center gap-2"
        >
          <p className="text-xl md:text-2xl text-gray-400 font-medium tracking-wide">
            EXPLORING THE BOUNDARIES
          </p>
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-purple-500 to-transparent mt-4" />
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div 
        style={{ opacity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs tracking-widest text-gray-500 uppercase">Scroll to explore</span>
        <div className="w-px h-12 bg-gradient-to-b from-gray-500 to-transparent" />
      </motion.div>
    </section>
  );
}
