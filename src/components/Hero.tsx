"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { useNavigate } from "react-router-dom"
import Hero3D from "./Hero3D"

const Hero = () => {
  const navigate = useNavigate()

  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#050505] text-white">
      {/* 3D Background Layer */}
      <Hero3D />

      {/* UI Overlay */}
      <div className="relative z-10 h-full w-full px-6 md:px-12 pb-12 pt-32 flex flex-col justify-between pointer-events-none container mx-auto">
        
        {/* Header Row */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex justify-between items-start"
        >
          <div className="pointer-events-auto">
            <h1 className="text-2xl md:text-3xl font-serif font-bold tracking-tight text-white">
              ILYASS EZZAOUYA
            </h1>
            <div className="flex items-center gap-3 mt-2">
              <div className="w-8 h-[1px] bg-[#FFD700]" />
              <p className="text-[10px] font-sans tracking-[0.2em] text-[#FFD700] uppercase">
                Portfolio
              </p>
            </div>
          </div>

          <div className="hidden md:block text-right pointer-events-auto">
            <p className="text-[10px] font-sans tracking-[0.2em] text-zinc-500 uppercase mb-2">
              Current Status
            </p>
            <div className="flex items-center justify-end gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FFD700] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FFD700]"></span>
              </span>
              <span className="text-xs font-medium text-zinc-300">Available for new projects</span>
            </div>
          </div>
        </motion.div>

        {/* Footer Row */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-12">
          
          {/* Role & Description */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="max-w-2xl space-y-6 pointer-events-auto"
          >
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-serif leading-[0.9]">
              Full Stack <br />
              <span className="italic text-zinc-600">Developer</span>
            </h2>
            <p className="text-sm md:text-base text-zinc-400 leading-relaxed font-light max-w-md border-l border-white/10 pl-6">
              Crafting scalable digital infrastructure and immersive user experiences. 
              Specialized in modern web technologies and performance optimization.
            </p>
          </motion.div>

          {/* Navigation */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex flex-col items-start md:items-end gap-6 pointer-events-auto"
          >
            <button 
              onClick={() => navigate("/projects")}
              className="group flex items-center gap-4 text-sm font-bold tracking-widest uppercase text-white hover:text-[#FFD700] transition-colors"
            >
              Selected Works
              <span className="flex items-center justify-center w-8 h-8 border border-white/20 rounded-full group-hover:border-[#FFD700] transition-colors">
                <ArrowRight className="w-4 h-4 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
              </span>
            </button>
            
            <button 
              onClick={() => navigate("/contact")}
              className="group flex items-center gap-4 text-sm font-bold tracking-widest uppercase text-zinc-500 hover:text-white transition-colors"
            >
              Get in Touch
              <span className="flex items-center justify-center w-8 h-8 border border-white/10 rounded-full group-hover:border-white transition-colors">
                <ArrowRight className="w-4 h-4 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
              </span>
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default Hero;
