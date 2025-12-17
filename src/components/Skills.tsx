import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import * as SiIcons from "react-icons/si";
import { skills } from "@/data/portfolio";
import { Terminal, Plus } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

const Skills = () => {
  const [openCategory, setOpenCategory] = useState<string | null>("frontend");

  const categories = [
    {
      id: "frontend",
      label: "Frontend Engineering",
      data: skills.filter(s => s.category === "Frontend")
    },
    {
      id: "backend",
      label: "Backend Architecture",
      data: skills.filter(s => s.category === "Backend" || s.category === "Database")
    },
    {
      id: "devops",
      label: "DevOps & Tools",
      data: skills.filter(s => s.category === "Tools & DevOps")
    }
  ];

  const getIcon = (iconName: string) => {
    const Icon = (SiIcons as any)[iconName];
    return Icon ? Icon : Terminal;
  };

  return (
    <section className="relative py-24 md:py-32 bg-[#050505] text-white overflow-hidden min-h-screen flex flex-col justify-center">
      
      {/* Background Elements */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#FFD700]/5 rounded-full blur-[120px] pointer-events-none opacity-20" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-zinc-800/10 rounded-full blur-[120px] pointer-events-none opacity-20" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="mb-20 md:mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-[1px] bg-[#FFD700]" />
              <span className="text-[#FFD700] text-xs font-bold tracking-[0.3em] uppercase">Expertise</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-serif leading-[0.9]">
              Technical <span className="italic text-zinc-600">Arsenal</span>
            </h2>
          </motion.div>
        </div>

        {/* Accordion List */}
        <div className="max-w-5xl mx-auto border-t border-white/10">
          {categories.map((category, index) => (
            <div key={category.id} className="border-b border-white/10">
              <button
                onClick={() => setOpenCategory(openCategory === category.id ? null : category.id)}
                className="w-full py-10 flex items-center justify-between group text-left outline-none"
              >
                <div className="flex items-baseline gap-6 md:gap-12">
                  <span className="text-xs font-mono text-zinc-600 group-hover:text-[#FFD700] transition-colors">
                    0{index + 1}
                  </span>
                  <span 
                    className={`text-3xl md:text-5xl font-serif transition-colors duration-300 ${
                      openCategory === category.id ? 'text-white' : 'text-zinc-500 group-hover:text-zinc-300'
                    }`}
                  >
                    {category.label}
                  </span>
                </div>
                
                <motion.div 
                  animate={{ rotate: openCategory === category.id ? 45 : 0 }}
                  transition={{ duration: 0.3 }}
                  className={`relative w-12 h-12 flex items-center justify-center rounded-full border transition-colors ${
                    openCategory === category.id 
                      ? 'border-[#FFD700] text-[#FFD700]' 
                      : 'border-white/10 text-zinc-500 group-hover:border-white/30 group-hover:text-white'
                  }`}
                >
                  <Plus className="w-6 h-6" />
                </motion.div>
              </button>

              <AnimatePresence>
                {openCategory === category.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="pb-12 pl-0 md:pl-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {category.data.map((skill, idx) => {
                        const Icon = getIcon(skill.icon);
                        return (
                          <Tooltip key={skill.name} delayDuration={0}>
                            <TooltipTrigger asChild>
                              <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.05 }}
                                className="group flex items-center gap-4 p-4 bg-white/[0.02] border border-white/5 hover:border-[#FFD700]/30 transition-all duration-300 cursor-help"
                              >
                                <div className="p-2 bg-white/5 rounded-sm text-zinc-400 group-hover:text-[#FFD700] transition-colors">
                                  <Icon className="w-6 h-6" />
                                </div>
                                <div>
                                  <h4 className="text-sm font-medium text-zinc-200 group-hover:text-white transition-colors">
                                    {skill.name}
                                  </h4>
                                </div>
                              </motion.div>
                            </TooltipTrigger>
                            <TooltipContent side="top" className="bg-[#0A0A0A] border-white/10 text-zinc-300 max-w-[280px] p-3">
                              <p className="text-xs leading-relaxed">{skill.description}</p>
                            </TooltipContent>
                          </Tooltip>
                        );
                      })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
