"use client"

import { motion, easeInOut } from "framer-motion"
import { Download } from "lucide-react"
import { Button } from "@/components/ui/button"

const About = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: easeInOut,
      },
    },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  return (
  <section id="about" className="py-32 bg-background relative overflow-hidden">
      {/* Decorative gradient blob */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-6 md:px-16 relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-12"
        >
          <motion.div variants={fadeInUp} className="space-y-6">
            <div className="inline-block">
              <span className="text-accent text-sm font-semibold tracking-widest uppercase">About Me</span>
              <div className="h-0.5 w-16 bg-accent mt-2" />
            </div>

            <h2 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
              Crafting Digital <br />
              <span className="text-muted-foreground">Experiences</span>
            </h2>
          </motion.div>

          <motion.div variants={fadeInUp} className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <p className="text-muted-foreground text-lg leading-relaxed">
                I'm a passionate Full Stack Developer based in Rabat, Morocco, with a genuine love for creating
                meaningful digital experiences. My journey in web development began with curiosity and has evolved into
                a dedicated pursuit of crafting solutions that make a real impact.
              </p>

              <p className="text-muted-foreground text-lg leading-relaxed">
                I specialize in the MERN stack and Laravel, bringing both technical expertise and creative
                problem-solving to every project.
              </p>
            </div>

            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-2 h-2 bg-accent rounded-full" />
                  <span className="text-foreground leading-tight text-lg">Full Stack Development</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-2 h-2 bg-accent rounded-full" />
                  <span className="text-foreground leading-tight text-lg">UI/UX Design</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-2 h-2 bg-accent rounded-full" />
                  <span className="text-foreground leading-tight text-lg">Modern Web Technologies</span>
                </div>
              </div>

              <Button 
                className="bg-accent hover:bg-accent/90 text-white font-semibold px-8 py-6 rounded-full shadow-lg shadow-accent/20 hover:shadow-accent/40 transition-all duration-300"
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = '/CV__Ilyass_Ezzaouya.pdf';
                  link.download = 'CV_Ilyass_Ezzaouya.pdf';
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
              >
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
