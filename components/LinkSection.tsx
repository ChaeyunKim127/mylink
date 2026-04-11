"use client";

import { motion } from "framer-motion";
import { Globe, Mail, Link as LinkIcon, ExternalLink } from "lucide-react";

interface LinkItem {
  id: number;
  title: string;
  url: string;
  icon: React.ReactNode;
}

const links: LinkItem[] = [
  { id: 1, title: "GitHub", url: "https://github.com/ChaeyunKim127", icon: <Globe size={20} /> },
  { id: 2, title: "Email", url: "mailto:example@hanyang.ac.kr", icon: <Mail size={20} /> },
  { id: 3, title: "Instagram", url: "https://instagram.com", icon: <LinkIcon size={20} /> },
  { id: 4, title: "Notion Resume", url: "#", icon: <ExternalLink size={20} /> },
];

export default function LinkSection() {
  return (
    <section className="w-full max-w-lg mx-auto px-4 flex flex-col gap-4 relative z-10 pb-20">
      {links.map((link, index) => (
        <motion.a
          key={link.id}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="group relative flex items-center justify-between p-4 rounded-2xl glass-card overflow-hidden hover:bg-white/5 border border-white/5"
        >
          {/* Hover Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <div className="flex items-center gap-4 relative z-10">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-blue-200 group-hover:scale-110 transition-transform duration-300">
              {link.icon}
            </div>
            <span className="text-lg font-semibold text-white tracking-wide">
              {link.title}
            </span>
          </div>
          
          <div className="relative z-10 text-white/50 group-hover:text-white group-hover:translate-x-1 transition-all duration-300">
            <ExternalLink size={18} />
          </div>
        </motion.a>
      ))}
    </section>
  );
}
