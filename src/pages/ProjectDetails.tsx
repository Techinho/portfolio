import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Github, ArrowUpRight, Code2, Layers, CheckCircle2, Calendar, Monitor, X } from "lucide-react";
import { projects, skills } from "@/data/portfolio";
import * as SiIcons from "react-icons/si";
import PageTransition from "@/components/PageTransition";

export default function ProjectDetails() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Find the project based on the slug
  const project = projects.find(
    (p) => p.title.toLowerCase().replace(/\s+/g, "-") === slug
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) return (
    <div className="min-h-screen flex items-center justify-center bg-[#050505] text-white">
      <div className="text-center space-y-6">
        <h1 className="text-4xl font-serif text-[#FFD700]">Project Not Found</h1>
        <button 
           onClick={() => navigate("/projects")} 
           className="text-sm uppercase tracking-widest border-b border-[#FFD700] pb-1 hover:text-[#FFD700] transition-colors"
        >
          Back to Archive
        </button>
      </div>
    </div>
  );

  const getTechIcon = (techName: string) => {
    const skill = skills.find(s => s.name === techName);
    if (skill && skill.icon.startsWith("Si")) {
      const IconComponent = SiIcons[skill.icon as keyof typeof SiIcons];
      return IconComponent ? <IconComponent className="w-5 h-5" /> : <Code2 className="w-5 h-5" />;
    }
    return <Code2 className="w-5 h-5" />;
  };

  // Prepare screenshots array (using previewImages if available, or falling back to main images)
  const screenshots = project.previewImages || [project.image, project.image2].filter(Boolean);

  return (
    <PageTransition>
      <div className="min-h-screen bg-[#050505] text-white selection:bg-[#FFD700] selection:text-black overflow-x-hidden">
        
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-6 flex justify-between items-center pointer-events-none">
          <motion.button 
             initial={{ opacity: 0, x: -20 }}
             animate={{ opacity: 1, x: 0 }}
             onClick={() => navigate(-1)} 
             className="pointer-events-auto group flex items-center gap-3 text-xs font-bold tracking-widest uppercase mix-blend-difference text-white hover:text-[#FFD700] transition-colors"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> 
            <span>Back</span>
          </motion.button>

          {/* Top Right Actions */}
          <div className="pointer-events-auto flex items-center gap-4">
            {project.liveUrl && (
              <a 
                href={project.liveUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-[#FFD700] text-black text-xs font-bold tracking-widest uppercase hover:bg-white transition-colors shadow-[0_0_20px_-5px_#FFD700]"
              >
                <span>Live Demo</span>
                <ArrowUpRight size={14} />
              </a>
            )}
            {project.githubUrl && (
              <a 
                href={project.githubUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-white/10 bg-black/50 backdrop-blur-md hover:border-[#FFD700] hover:text-[#FFD700] transition-colors"
                title="View Source Code"
              >
                <Github size={18} />
              </a>
            )}
          </div>
        </nav>

        {/* Hero Section */}
        <header className="relative min-h-screen flex items-center pt-20 px-6">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
            
            <div className="container mx-auto max-w-7xl grid lg:grid-cols-2 gap-8 lg:gap-16 items-center relative z-10">
                {/* Text Content */}
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="space-y-8"
                >
                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-[1px] bg-[#FFD700]" />
                            <span className="text-[#FFD700] font-mono text-xs tracking-[0.3em] uppercase">Case Study</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-serif leading-[0.9] tracking-tight">
                            {project.title}
                        </h1>
                        <p className="text-lg text-zinc-400 max-w-lg font-light leading-relaxed">
                            {project.summary || project.description}
                        </p>

                        {project.note && (
                            <div className="mt-6 p-4 border border-[#FFD700]/30 bg-[#FFD700]/5 rounded-sm max-w-lg">
                                <p className="text-xs text-[#FFD700] font-mono tracking-wide uppercase mb-1">Notice</p>
                                <p className="text-sm text-zinc-300 italic">
                                    {project.note}
                                </p>
                            </div>
                        )}
                    </div>
                </motion.div>

                {/* Hero Image */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9, x: 50 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  transition={{ duration: 1, delay: 0.2 }}
                  className="relative"
                >
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#FFD700]/20 to-transparent blur-[100px] rounded-full opacity-60" />
                    <img 
                        src={project.image2 } 
                        alt={project.title} 
                        className="relative z-10 w-full h-auto object-contain drop-shadow-2xl transform hover:scale-[1.02] transition-transform duration-700" 
                    />
                </motion.div>
            </div>
        </header>

        {/* Meta Info Bar */}
        <section className="border-y border-white/10 bg-white/[0.02] backdrop-blur-sm">
            <div className="container mx-auto max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/10">
                    
                    <div className="p-6 space-y-2">
                        <div className="flex items-center gap-2 text-zinc-500 text-xs font-bold tracking-widest uppercase">
                            <Layers size={14} />
                            <span>Role</span>
                        </div>
                        <p className="font-serif text-lg text-white">{project.role || "Full Stack Dev"}</p>
                    </div>

                    {/* <div className="p-6 space-y-2">
                        <div className="flex items-center gap-2 text-zinc-500 text-xs font-bold tracking-widest uppercase">
                            <Calendar size={14} />
                            <span>Timeline</span>
                        </div>
                        <p className="font-serif text-lg text-white">2024</p>
                    </div> */}

                    <div className="p-6 space-y-2 lg:col-span-2">
                        <div className="flex items-center gap-2 text-zinc-500 text-xs font-bold tracking-widest uppercase">
                            <Monitor size={14} />
                            <span>Tech Stack</span>
                        </div>
                        <div className="flex flex-wrap gap-2 pt-1">
                            {project.technologies.map((tech) => (
                                <div key={tech} className="flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] text-zinc-300 hover:border-[#FFD700]/50 transition-colors cursor-default">
                                    {getTechIcon(tech)}
                                    <span>{tech}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>

        {/* Main Content */}
        <section className="py-20 px-6">
            <div className="container mx-auto max-w-4xl space-y-20">
                
                {/* The Challenge */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="space-y-6"
                >
                    <h2 className="text-3xl md:text-4xl font-serif text-white">
                        <span className="text-[#FFD700]">01.</span> The Challenge
                    </h2>
                    <div className="prose prose-invert prose-lg max-w-none">
                        <p className="text-lg text-zinc-400 font-light leading-relaxed">
                            {project.context || "Context not available."}
                        </p>
                        <p className="text-lg text-zinc-400 font-light leading-relaxed mt-4">
                            {project.problem || "Problem statement not available."}
                        </p>
                    </div>
                </motion.div>

                {/* The Approach */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="space-y-6"
                >
                    <h2 className="text-3xl md:text-4xl font-serif text-white">
                        <span className="text-[#FFD700]">02.</span> The Approach
                    </h2>
                    <p className="text-lg text-zinc-400 font-light leading-relaxed">
                        {project.approach || "Approach details not available."}
                    </p>
                </motion.div>

                {/* Key Features Grid */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="space-y-12"
                >
                    <h2 className="text-3xl md:text-4xl font-serif text-white">
                        <span className="text-[#FFD700]">03.</span> Key Features
                    </h2>
                    <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
                        {project.features?.map((feature, i) => (
                            <div key={i} className="group flex items-start gap-6">
                                <span className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full border border-white/10 bg-white/[0.02] text-sm font-serif text-[#FFD700] group-hover:bg-[#FFD700] group-hover:text-black transition-all duration-500">
                                    {String(i + 1).padStart(2, '0')}
                                </span>
                                <div className="space-y-2 pt-2">
                                    <p className="text-lg text-zinc-300 font-light leading-relaxed group-hover:text-white transition-colors">
                                        {feature}
                                    </p>
                                    <div className="h-[1px] w-0 bg-[#FFD700] group-hover:w-12 transition-all duration-500 ease-out" />
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>

            </div>
        </section>

        {/* Screenshots Section */}
        {screenshots.length > 0 && (
          <section className="py-20 px-6 border-t border-white/5 bg-white/[0.02]">
            <div className="container mx-auto max-w-7xl space-y-12">
              <div className="text-center space-y-4">
                <h2 className="text-3xl md:text-4xl font-serif text-white">
                  Project Gallery
                </h2>
                <div className="w-16 h-[1px] bg-[#FFD700] mx-auto" />
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {screenshots.map((shot, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => setSelectedImage(shot)}
                    className="group relative aspect-video overflow-hidden rounded-sm border border-white/10 bg-black cursor-zoom-in"
                  >
                    <div className="absolute inset-0 bg-[#FFD700]/0 group-hover:bg-[#FFD700]/10 transition-colors duration-500 z-10" />
                    <img 
                      src={shot} 
                      alt={`Screenshot ${index + 1}`} 
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
              className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md p-4 cursor-zoom-out"
            >
              <button 
                className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors z-50"
                onClick={() => setSelectedImage(null)}
              >
                <X size={32} />
              </button>
              <motion.img
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                src={selectedImage}
                alt="Project Screenshot"
                className="max-w-full max-h-[90vh] object-contain rounded-sm shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Next Project Navigation */}
        <section className="py-20 border-t border-white/10 bg-black">
          <div className="container mx-auto px-6 text-center">
            <p className="text-zinc-500 text-[10px] font-bold tracking-widest uppercase mb-6">Ready for more?</p>
            <button 
               onClick={() => navigate("/projects")}
              className="group relative inline-block"
            >
              <span className="text-4xl md:text-6xl font-serif text-white group-hover:text-[#FFD700] transition-colors duration-500">
                View Archive
              </span>
              <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-[#FFD700] group-hover:w-full transition-all duration-500" />
            </button>
          </div>
        </section>

      </div>
    </PageTransition>
  );
}
