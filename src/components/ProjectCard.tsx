import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

type TProps = {
  title: string;
  description: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
  image: string;
  image2?: string;
  className?: string;
  index: number;
  summary?: string;
  role?: string;
};

export default function ProjectCard({
  title,
  description,
  technologies,
  image2,
  image,
  className,
  index,
  summary,
}: TProps) {
  const navigate = useNavigate();
  
  const handleClick = () => {
    const slug = title.toLowerCase().replace(/\s+/g, "-");
    navigate(`/project/${slug}`);
    window.scrollTo(0, 0);
  };

  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className={`relative flex flex-col lg:flex-row gap-8 lg:gap-16 items-center ${
        !isEven ? "lg:flex-row-reverse" : ""
      } ${className}`}
    >
      {/* Image Section */}
      <div 
        onClick={handleClick}
        className="w-full lg:w-[55%] group cursor-pointer"
      >
        <div className="relative overflow-hidden border border-white/10 bg-zinc-900 aspect-video">
          <div className="absolute inset-0 bg-zinc-800 animate-pulse" /> {/* Loading placeholder */}
          <img
            src={image}
            alt={title}
            loading="lazy"
            className="relative w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
          />
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
          
          {/* Corner Badge */}
          <div className="absolute top-0 left-0 bg-[#050505] border-r border-b border-white/10 px-4 py-2 z-10">
            <span className="text-[#FFD700] font-mono text-xs tracking-wider">0{index + 1}</span>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="w-full lg:w-[45%] flex flex-col items-start">
        <div className="flex items-center gap-3 mb-6">
          <span className="h-[1px] w-8 bg-[#FFD700]" />
          <span className="text-[#FFD700] font-mono text-xs tracking-widest uppercase">Featured Work</span>
        </div>

        <h3 
          onClick={handleClick}
          className="text-3xl md:text-4xl font-serif text-white mb-6 cursor-pointer hover:text-[#FFD700] transition-colors leading-tight"
        >
          {title}
        </h3>

        {summary && (
          <p className="text-zinc-300 font-light italic mb-6 text-sm border-l border-[#FFD700] pl-4">
            {summary}
          </p>
        )}

        <p className="text-zinc-400 text-base leading-relaxed mb-8 font-light line-clamp-3">
          {description}
        </p>

        <div className="flex flex-wrap gap-3 mb-8">
          {technologies.slice(0, 4).map((tech) => (
            <span 
              key={tech}
              className="text-xs font-mono text-zinc-500 border border-white/10 px-3 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        <button 
          onClick={handleClick}
          className="group flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-white hover:text-[#FFD700] transition-colors"
        >
          View Case Study <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
        </button>
      </div>
    </motion.div>
  );
}
