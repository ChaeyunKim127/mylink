"use client";

import { motion } from "framer-motion";
import { Cpu, Code, Lightbulb, PenTool } from "lucide-react";
import Image from "next/image";

const skills = [
  { icon: Cpu, title: "Engineering", desc: "복잡한 시스템 분석 및 최적화" },
  { icon: Code, title: "Software", desc: "안정적이고 확장 가능한 코드 작성" },
  { icon: Lightbulb, title: "Problem Solving", desc: "창의적이고 직관적인 해결책 제시" },
  { icon: PenTool, title: "Design", desc: "사용자 중심의 경험 설계" },
];

export default function SkillsSection() {
  return (
    <section className="relative w-full py-32 px-4 md:px-12 lg:px-24 max-w-7xl mx-auto min-h-screen flex items-center">
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left: Text & Skills */}
        <div className="order-2 lg:order-1 flex flex-col gap-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Engineering <br />
              <span className="text-gradient">Core Capabilities</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed max-w-md">
              공학적 사고방식을 바탕으로 구조적인 문제를 해결하며, 창의적인 영감을 기술로 구현하는 데에 집중합니다.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card p-6 rounded-2xl cursor-pointer"
              >
                <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center mb-4 text-purple-400">
                  <skill.icon size={24} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{skill.title}</h3>
                <p className="text-gray-400 text-sm">{skill.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right: 3D Visualization */}
        <div className="order-1 lg:order-2 relative h-[500px] w-full flex items-center justify-center">
          <div className="absolute inset-0 bg-blue-500/10 blur-[100px] rounded-full" />
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative w-[120%] h-[120%] animate-float-slow mix-blend-screen"
          >
            <Image 
              src="/assets/engineering-3d.png" 
              alt="Engineering Concept" 
              fill 
              className="object-contain" 
            />
          </motion.div>
          
          {/* Floating badges */}
          <motion.div 
            className="absolute top-1/4 -right-10 glass-panel px-6 py-3 rounded-full hidden md:block"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="text-sm font-medium text-blue-200">System Architecture</span>
          </motion.div>
          
          <motion.div 
            className="absolute bottom-1/4 -left-10 glass-panel px-6 py-3 rounded-full hidden md:block"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          >
            <span className="text-sm font-medium text-purple-200">Logic & Analysis</span>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
