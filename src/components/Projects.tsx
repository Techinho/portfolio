"use client"

import { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { projects as portfolioProjects } from "@/data/portfolio";
import ProjectCard from "./ProjectCard";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Projects = () => {
  const navigate = useNavigate();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  return (
    <section id="projects" ref={containerRef} className="relative py-24 md:py-32 bg-[#050505] text-white overflow-hidden">
      
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FFD700]/5 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <div className="mb-20 md:mb-32">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-[1px] bg-[#FFD700]" />
              <span className="text-[#FFD700] text-xs font-bold tracking-[0.3em] uppercase">Selected Works</span>
            </div>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif leading-[1.1]">
              Digital <br />
              <span className="italic text-zinc-600">Masterpieces</span> & <br />
              Experiments.
            </h2>
          </motion.div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-16 md:gap-24 max-w-6xl mx-auto">
          {portfolioProjects.map((project, index) => (
            <ProjectCard
              key={index}
              index={index}
              {...project}
            />
          ))}
        </div>

        {/* View More Button */}
        <div className="mt-24 md:mt-32 flex justify-center">
            <a 
              href="https://github.com/Techinho"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-8 py-4 bg-white text-black overflow-hidden"
            >
              <div className="absolute inset-0 bg-[#FFD700] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
              <span className="relative flex items-center gap-2 text-xs font-bold tracking-widest uppercase group-hover:text-black transition-colors">
                View Full Archive <ArrowRight className="w-4 h-4" />
              </span>
            </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
