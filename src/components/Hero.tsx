import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import BasicCarousel from "@/components/carousel-1";

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

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

  return (
    <section id="home" className="relative min-h-[90vh] md:min-h-[95vh] w-full flex items-start md:items-center justify-center overflow-hidden   ">
      {/* Minimal animated background */}
      <motion.div
        className="absolute top-20 -left-20 w-80 h-80 rounded-full bg-slate-100 dark:bg-slate-800/20 blur-3xl opacity-30"
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-64 h-64 rounded-full bg-slate-200 dark:bg-slate-700/20 blur-3xl opacity-20"
        animate={{ 
          scale: [1, 0.9, 1],
          opacity: [0.15, 0.3, 0.15]
        }}
        transition={{ 
          duration: 10, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 1
        }}
      />

      <motion.div 
        className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-16 w-full max-w-7xl px-6 md:px-16 pt-20 md:pt-24 pb-20 items-center"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        {/* Left: Professional introduction */}
        <div className="flex flex-col items-start text-left space-y-6">
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center px-2 py-[2px] rounded-full border border-slate-200 dark:border-slate-700 bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm"
          >
            <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3 animate-pulse"></div>
            <span className="text-slate-600 dark:text-slate-300 text-xs tracking-wide">
              available for open work
            </span>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="font-inter text-4xl sm:text-5xl md:text-6xl font-light text-slate-900 dark:text-slate-100 leading-tight tracking-tight"
          >
            <span className="block text-lg sm:text-xl font-normal text-slate-500 dark:text-slate-400 mb-3 tracking-wide uppercase">
              Hello, I'm Ilyass
            </span>
            <span className="font-medium">
              Full-Stack
            </span>
            <br />
            <span className="font-medium text-slate-700 dark:text-slate-200">
              Developer
            </span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="font-inter text-md  text-light text-slate-600 dark:text-slate-300 max-w-xl leading-relaxed font-light"
          >
            I craft modern web applications with clean code and thoughtful design. 
            Focused on delivering scalable solutions that enhance user experience 
            and drive business results.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <Button
              onClick={scrollToProjects}
              className="font-inter font-medium bg-slate-900 hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-slate-200 text-white px-8 py-6 text-base transition-all duration-300 shadow-sm hover:shadow-md"
            >
              View Projects
            </Button>
            <Button
              variant="outline"
              className="font-inter font-medium hover:text-slate-900 border-slate-300 dark:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 px-8 py-6 text-base transition-all duration-300"
              asChild
            >
              <a href="#contact">Get In Touch</a>
            </Button>
          </motion.div>

          {/* <motion.div
            variants={fadeInUp}
            className="flex items-center gap-6 text-sm text-slate-500 dark:text-slate-400 pt-4 font-inter"
          >
            <div className="flex items-center gap-2">
              <span className="font-medium">Based in Morocco</span>
            </div>
            <div className="w-px h-4 bg-slate-300 dark:bg-slate-600"></div>
            <div className="flex items-center gap-2">
              <span className="font-medium">Open to Remote</span>
            </div>
          </motion.div> */}
        </div>

        {/* Right: Profile Image */}
        <motion.div
          variants={fadeInUp}
          className="w-full max-w-lg md:max-w-2xl mx-auto"
        >
          <div className="relative h-96 md:h-[500px] flex items-center justify-center">
            {/* Central element - Profile Image */}
            <div className="relative z-10 w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800">
              <img
                src="/profile-image.jpg"
                alt="Ilyass Ezzaouya - Full Stack Developer"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;