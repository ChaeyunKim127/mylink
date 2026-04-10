"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function PortfolioSection() {
  return (
    <section className="relative w-full py-32 px-4 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col gap-24">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              Works & <br /> <span className="text-gradient">Records</span>
            </h2>
            <p className="text-gray-400 max-w-lg">
              책과 필기구처럼 차곡차곡 쌓아올린 지식과 산출물들을 기록하는 공간입니다.
            </p>
          </div>
        </motion.div>

        {/* Content Layout */}
        <div className="relative w-full border-t border-white/10 pt-16">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 relative z-10">
            {/* Left Big Panel */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="md:col-span-8 glass-panel rounded-3xl p-8 md:p-12 min-h-[500px] flex flex-col justify-end relative overflow-hidden group cursor-pointer"
            >
              <div className="absolute top-0 right-0 w-[400px] h-[400px] translate-x-1/4 -translate-y-1/4 opacity-40 mix-blend-screen group-hover:scale-105 transition-transform duration-700 ease-out">
                <Image src="/assets/book-3d.png" alt="Books" fill className="object-contain animate-float-slow" />
              </div>
              
              <div className="relative z-10 mt-auto">
                <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center mb-6 text-white group-hover:bg-white group-hover:text-black transition-colors duration-300">
                  <ArrowUpRight size={24} />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold mb-4">Academic Journey & Studies</h3>
                <p className="text-gray-400 max-w-md line-clamp-2">
                  지속적인 배움을 통해 얻은 인사이트와 전공 프로젝트들을 정리한 아카이브입니다.
                </p>
              </div>
            </motion.div>

            {/* Right Side Stack */}
            <div className="md:col-span-4 flex flex-col gap-8">
              
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="glass-panel p-8 rounded-3xl flex-1 flex flex-col justify-between relative overflow-hidden group cursor-pointer"
              >
                <div className="absolute -top-10 -right-10 w-48 h-48 opacity-60 mix-blend-screen group-hover:rotate-12 transition-transform duration-500">
                  <Image src="/assets/pen-3d.png" alt="Pen" fill className="object-contain animate-float-reverse" />
                </div>
                <div className="mt-24 z-10">
                  <h4 className="text-xl font-bold mb-2">Writing & Logs</h4>
                  <p className="text-sm text-gray-400">개발 일지 및 회고록</p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="glass-card p-8 rounded-3xl flex-1 flex flex-col justify-end group cursor-pointer relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <h4 className="text-xl font-bold mb-2 relative z-10">Upcoming Projects</h4>
                <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center mt-4 group-hover:border-white transition-colors relative z-10">
                  <ArrowUpRight size={18} />
                </div>
              </motion.div>

            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
