"use client"

import { motion, easeInOut } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa"
import { personalInfo, socialLinks } from "@/data/portfolio"
import { useNavigate } from "react-router-dom"

const Hero = () => {
  const navigate = useNavigate()

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
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  return (
  <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden font-medium bg-background">
      {/* Social icons including WhatsApp */}
      <motion.div
        className="fixed right-8 top-1/3 -translate-y-1/2 z-20 hidden lg:flex flex-col gap-6"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <a
          href={socialLinks.find((link) => link.name === "GitHub")?.url}
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-full bg-card hover:bg-accent flex items-center justify-center transition-all duration-300 hover:scale-110"
        >
          <Github className="w-5 h-5 text-foreground" />
        </a>
        <a
          href={socialLinks.find((link) => link.name === "LinkedIn")?.url}
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-full bg-card hover:bg-accent flex items-center justify-center transition-all duration-300 hover:scale-110"
        >
          <Linkedin className="w-5 h-5 text-foreground" />
        </a>
        <a
          href={socialLinks.find((link) => link.name === "Email")?.url}
          className="w-10 h-10 rounded-full bg-card hover:bg-accent flex items-center justify-center transition-all duration-300 hover:scale-110"
        >
          <Mail className="w-5 h-5 text-foreground" />
        </a>
        <a
          href={`https://wa.me/212682146122`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-full bg-card hover:bg-accent flex items-center justify-center transition-all duration-300 hover:scale-110"
        >
          <FaWhatsapp className="w-5 h-5 text-foreground" />
        </a>
      </motion.div>



      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        {/* Left: Content */}
        <div className="space-y-6">

          <motion.div variants={fadeInUp}>
            <h1 className=" text-foreground leading-tight">
              <span className="text-2xl md:text-3xl lg:text-4xl">Hi, I'm Ilyass</span> <br />
              <span className="text-6xl md:text-7xl lg:text-7xl text-accent">Fullstack Web Developer</span>
            </h1>
          </motion.div>
          
          <motion.p variants={fadeInUp} className="text-muted-foreground text-base md:text-lg max-w-lg leading-relaxed">
            {personalInfo.tagline}
          </motion.p>

          <motion.div variants={fadeInUp}>
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-6 text-lg rounded-full shadow-lg shadow-accent/20 hover:shadow-accent/40 transition-all duration-300 hover:scale-105"
              onClick={() => navigate("/contact")}
            >
              Let's Collaborate
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>

        </div>

        {/* Right: Profile Image */}
        <motion.div variants={fadeInUp} className="relative flex items-center justify-center lg:justify-end">
          <div className="relative w-96 h-96 md:w-[450px] md:h-[450px]">
            <div className="relative z-10 w-full h-full rounded-full overflow-hidden border-4 border-white/10 shadow-2xl shadow-accent/30">
              <img src="/profile-image.jpg" alt="Profile" className="w-full h-full object-cover" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  className="w-56 h-14 bg-accent blur-2xl opacity-90"
                  style={{ transform: "rotate(-5deg) translateY(-80px)" }}
                />
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

    
    </section>
  )
}

export default Hero
