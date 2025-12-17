import { motion } from "framer-motion"
import { Github, Linkedin, Mail } from "lucide-react"
import { personalInfo, socialLinks } from "@/data/portfolio"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#050505] border-t border-white/10 py-8 text-zinc-400 font-sans">
      <div className="max-w-7xl mx-auto px-3 md:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center gap-6"
        >
          <div className="text-center md:text-left">
            <p className="text-zinc-500 text-sm">© {currentYear} {personalInfo.name}. All rights reserved.</p>
            <p className="text-zinc-600 text-xs mt-1">Designed & Developed with React, TypeScript & Tailwind CSS</p>
          </div>

          <div className="flex gap-4">
            <a
              href={socialLinks.find(link => link.name === "GitHub")?.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-zinc-900 border border-white/10 hover:bg-gold-400 hover:text-black flex items-center justify-center transition-all duration-300"
            >
              <Github className="w-5 h-5 text-zinc-400 hover:text-black" />
            </a>
            <a
              href={socialLinks.find(link => link.name === "LinkedIn")?.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-zinc-900 border border-white/10 hover:bg-gold-400 hover:text-black flex items-center justify-center transition-all duration-300"
            >
              <Linkedin className="w-5 h-5 text-zinc-400 hover:text-black" />
            </a>
            <a
              href={socialLinks.find(link => link.name === "Email")?.url}
              className="w-10 h-10 rounded-full bg-zinc-900 border border-white/10 hover:bg-gold-400 hover:text-black flex items-center justify-center transition-all duration-300"
            >
              <Mail className="w-5 h-5 text-zinc-400 hover:text-black" />
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
