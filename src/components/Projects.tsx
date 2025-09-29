import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight, Eye, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/data/portfolio";
import { Link } from "react-router-dom";

const Projects = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8, 
        ease: [0.25, 0.1, 0.25, 1] 
      }
    }
  };

  const slideInFromLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        duration: 0.8, 
        ease: [0.25, 0.1, 0.25, 1] 
      }
    }
  };

  const slideInFromRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        duration: 0.8, 
        ease: [0.25, 0.1, 0.25, 1] 
      }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const featuredProjects = projects.slice(0, 3); // First two as featured
  // const regularProjects = projects.slice(2, 6); // Next 4 projects

  return (
    <section id="projects" className="py-24  ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-24"
        >
          <div className="inline-flex items-center px-6 py-3 rounded-full border border-slate-200/60 dark:border-slate-700/60 bg-white/80 dark:bg-slate-800/80 backdrop-blur-md mb-8 shadow-sm">
            <Code2 className="h-4 w-4 mr-2 text-slate-600 dark:text-slate-300" />
            <span className="text-slate-600 dark:text-slate-300 text-sm font-medium tracking-wide font-inter">
              SELECTED WORKS
            </span>
          </div>

          <h2 className="font-inter text-4xl sm:text-5xl md:text-6xl font-light text-slate-900 dark:text-slate-100 leading-tight tracking-tight mb-8">
            <span >Creative&nbsp;</span>
            <span className="font-medium bg-gradient-to-r from-slate-900 via-slate-700 to-slate-600 dark:from-slate-100 dark:via-slate-300 dark:to-slate-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
        </motion.div>

        {/* Featured Projects - Split Layout */}
        <div className="space-y-32 mb-32">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-20`}
            >
              {/* Project Image */}
              <motion.div
                variants={index % 2 === 0 ? slideInFromLeft : slideInFromRight}
                className="flex-1 w-full"
              >
                <div className="group relative transition-all duration-700 hover:-translate-y-2">
                  <div className="aspect-[4/3] relative">
                    <img 
                      src={project.image} 
                      alt={`${project.title} preview`}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110zz"
                      loading={index === 0 ? "eager" : "lazy"}
                    />
                    
                   
                  </div>
                </div>
              </motion.div>

              {/* Project Content */}
              <motion.div
                variants={index % 2 === 0 ? slideInFromRight : slideInFromLeft}
                className="flex-1 space-y-8"
              >
                <div className="space-y-6">
                 
                  <h3 className="font-inter text-3xl lg:text-4xl font-bold text-slate-900 dark:text-slate-100 leading-tight">
                    {project.title}
                  </h3>
                  
                  <p className="font-inter text-md font-light text-slate-600 dark:text-slate-400 leading-relaxed max-w-xl">
                    {project.description}
                  </p>
                </div>
                
                {/* Tech Stack */}
                <div className="space-y-4">
                  <h4 className="font-inter text-sm font-semibold text-slate-900 dark:text-slate-100 uppercase tracking-wider">
                    Technology Stack
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {project.technologies.map((tech) => (
                      <Badge 
                        key={tech}
                        variant="outline" 
                        className="px-2 py-1 text-sm font-inter border-2 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm hover:border-slate-300 dark:hover:border-slate-600 hover:bg-white dark:hover:bg-slate-800 transition-all duration-200"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                {/* Action Buttons */}
                <div className="flex space-x-4 pt-4">
                  <Button 
                    className="bg-slate-900 hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-slate-200 text-white px-8 py-6 text-base font-inter font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                    asChild
                  >
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-5 w-5 mr-3" />
                      Live Demo
                    </a>
                  </Button>
                  <Button 
                    variant="outline"
                    className="border-2 border-slate-200 dark:border-slate-700 text-slate-700 hover:text-slate-900 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 px-8 py-6 text-base font-inter font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                    asChild
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-5 w-5 mr-3" />
                      View Code
                    </a>
                  </Button>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Additional Projects - Masonry-style Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true }}
          className="text-center mt-20 pt-16 border-t border-slate-200 dark:border-slate-800"
        >
          <div className="space-y-6">
            <h3 className="font-inter text-xl font-medium text-slate-900 dark:text-slate-100">
              Explore More Work
            </h3>
            <p className="font-inter text-slate-600 dark:text-slate-400 max-w-md mx-auto">
              View detailed case studies and additional projects in my full portfolio
            </p>
            <Button 
              className="font-inter font-medium bg-slate-900 hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-slate-200 text-white px-8 py-6 text-base transition-all duration-300 shadow-sm hover:shadow-md"
              asChild
            >
              <Link to="/projects">
                <ArrowUpRight className="h-4 w-4 mr-2" />
                View All Projects
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;