import { motion } from "framer-motion";
import * as Icons from "react-icons/si";

const Skills = () => {
  const skillsList = [
    // Frontend
    { name: "React", icon: "SiReact" },
    { name: "TypeScript", icon: "SiTypescript" },
    { name: "Next.js", icon: "SiNextdotjs" },
    { name: "Tailwind CSS", icon: "SiTailwindcss" },
    { name: "JavaScript", icon: "SiJavascript" },
    
    // Backend
    { name: "Node.js", icon: "SiNodedotjs" },
    { name: "Laravel", icon: "SiLaravel" },
    { name: "PHP", icon: "SiPhp" },
    { name: "Express.js", icon: "SiExpress" },
    
    // Database
    { name: "MongoDB", icon: "SiMongodb" },
    { name: "MySQL", icon: "SiMysql" },
    { name: "PostgreSQL", icon: "SiPostgresql" },
    
    // Tools
    { name: "Git", icon: "SiGit" },
    { name: "Docker", icon: "SiDocker" },
    { name: "AWS", icon: "SiAmazonaws" },
    { name: "Vercel", icon: "SiVercel" }
  ];

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
        staggerChildren: 0.05,
        delayChildren: 0.2
      }
    }
  };

  return (
    <section id="skills" className="py-20 ">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full border border-slate-200 dark:border-slate-700 bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm mb-6">
            <span className="text-slate-600 dark:text-slate-300 text-sm font-medium tracking-wide font-inter">
              SKILLS
            </span>
          </div>

          <h2 className="font-inter text-3xl sm:text-4xl md:text-5xl font-light text-slate-900 dark:text-slate-100 leading-tight tracking-tight mb-6">
            Technologies &
            <span className="block font-medium">Tools</span>
          </h2>

          <p className="font-inter text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Modern web development stack for building scalable applications
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {skillsList.map((skill, index) => {
            const IconComponent = (Icons as any)[skill.icon] || Icons.SiReact;
            
            return (
              <motion.div
                key={skill.name}
                variants={fadeInUp}
                className="group"
              >
                <div className="flex flex-col items-center p-4 bg-white dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700/50 hover:border-slate-300 dark:hover:border-slate-600 transition-all duration-300 hover:shadow-md dark:hover:shadow-slate-900/20 hover:-translate-y-1">
                  <div className="w-10 h-10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 transition-transform duration-300" />
                  </div>
                  <span className="font-inter text-xs font-medium text-slate-700 dark:text-slate-300 text-center leading-tight">
                    {skill.name}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;