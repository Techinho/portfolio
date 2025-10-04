import { motion } from "framer-motion";
import { Download, Heart, Coffee, Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import { personalInfo } from "@/data/portfolio";

const About = () => {
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
    <section id="about" className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
        {/* Section Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center px-4 py-2 rounded-full border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/60 backdrop-blur-sm mb-6"
          >
            <span className="text-slate-600 dark:text-slate-300 text-sm font-medium tracking-wide font-inter">
              ABOUT ME
            </span>
          </motion.div>

          <motion.h2
            variants={fadeInUp}
            className="font-inter text-3xl sm:text-4xl md:text-5xl font-light text-slate-900 dark:text-slate-100 leading-tight tracking-tight mb-8"
          >
            About Me
          </motion.h2>

          <motion.div
            variants={fadeInUp}
            className="space-y-6 max-w-3xl mx-auto"
          >
            <p className="font-inter text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              I'm a passionate Full Stack Developer based in Rabat, Morocco, 
              with a genuine love for creating meaningful digital experiences. My journey 
              in web development began with curiosity and has evolved into a dedicated 
              pursuit of crafting solutions that make a real impact.
            </p>
            
            <p className="font-inter text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              I specialize in the MERN stack and Laravel, bringing both technical expertise 
              and creative problem-solving to every project. What drives me most is the 
              opportunity to transform ideas into applications that users genuinely enjoy 
              and find valuable.
            </p>
          </motion.div>
        </motion.div>

       
        {/* Professional CTA Section */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="text-center space-y-8"
        >
         

          {/* CTA Buttons */}
          <motion.div variants={fadeInUp} className="flex justify-center items-center gap-4 flex-wrap">
            <Button
              className="font-inter font-medium bg-slate-900 hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-slate-200 text-white px-8 py-6 text-base transition-all duration-300 shadow-sm hover:shadow-md"
              asChild
            >
              <a href="./public/CV__Ilyass_Ezzaouya.pdf" download>
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </a>
            </Button>
            <Button
              variant="outline"
              className="font-inter font-medium border-slate-300 dark:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 px-8 py-6 text-base transition-all duration-300"
              asChild
            >
              <a href="#contact">Get In Touch</a>
            </Button>
          </motion.div>

          {/* Professional Availability Status */}
         
        </motion.div>
      </div>
    </section>
  );
};

export default About;