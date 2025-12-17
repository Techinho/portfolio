"use client"

import { motion } from "framer-motion"
import { ArrowRight, Globe } from "lucide-react"
import AboutBackground from "./AboutBackground"
import { useNavigate } from "react-router-dom"

export default function About() {
  const navigate = useNavigate()

  return (
    <section className="relative min-h-screen w-full bg-[#050505] text-white overflow-hidden py-24">
      <AboutBackground />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Left: Content */}
          <div className="lg:col-span-7 space-y-10 order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-[1px] bg-[#FFD700]" />
                  <span className="text-[#FFD700] text-xs font-bold tracking-[0.3em] uppercase">About</span>
                </div>
                <h2 className="text-4xl md:text-6xl font-serif leading-[1.1]">Ilyass Ezzaouya</h2>
                <p className="mt-4 text-lg md:text-xl text-zinc-400 font-light leading-relaxed max-w-2xl">
                  Full Stack Developer with a strong front-end focus. I design and build clean, accessible web
                  experiences and ship production-ready features.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="border border-white/10 bg-white/[0.02] p-5">
                  <p className="text-[11px] text-zinc-500 uppercase tracking-widest">Based in</p>
                  <p className="text-sm text-zinc-200 mt-1">Rabat, Morocco</p>
                </div>
                <div className="border border-white/10 bg-white/[0.02] p-5">
                  <p className="text-[11px] text-zinc-500 uppercase tracking-widest">Stack</p>
                  <p className="text-sm text-zinc-200 mt-1">React • Next.js • TypeScript • MERN • Laravel</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-[1px] bg-white/10" />
                <p className="text-xs font-bold tracking-[0.3em] uppercase text-zinc-500">What I Do</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="border border-white/10 bg-white/[0.02] p-6">
                  <p className="text-white font-serif text-xl">UI & Front‑End</p>
                  <p className="mt-2 text-sm text-zinc-400 font-light leading-relaxed">
                    Responsive interfaces, smooth interactions, accessibility, and performance.
                  </p>
                </div>
                <div className="border border-white/10 bg-white/[0.02] p-6">
                  <p className="text-white font-serif text-xl">Full‑Stack Features</p>
                  <p className="mt-2 text-sm text-zinc-400 font-light leading-relaxed">
                    Auth, dashboards, admin tools, APIs, and clean state management.
                  </p>
                </div>
                <div className="border border-white/10 bg-white/[0.02] p-6">
                  <p className="text-white font-serif text-xl">Integrations</p>
                  <p className="mt-2 text-sm text-zinc-400 font-light leading-relaxed">
                    Payments, email, calendars, realtime, and third‑party APIs.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <button
                onClick={() => navigate("/contact")}
                className="group relative px-8 py-4 bg-white text-black overflow-hidden"
              >
                <div className="absolute inset-0 bg-[#FFD700] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                <span className="relative flex items-center gap-2 text-xs font-bold tracking-widest uppercase group-hover:text-black transition-colors">
                  Start Project <ArrowRight className="w-4 h-4" />
                </span>
              </button>
            </motion.div>
          </div>

          {/* Right: Image */}
          <div className="lg:col-span-5 lg:sticky lg:top-24 mt-6 lg:mt-0 order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="border border-white/10 bg-white/[0.02]"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src="/profile-image.jpg"
                  alt="Ilyass Ezzaouya"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-xs font-mono text-[#FFD700] tracking-[0.3em] uppercase">Full‑Stack Developer</p>
                  <p className="mt-2 text-white font-serif text-2xl">Web apps with premium UI</p>
                  <div className="mt-4 flex items-center justify-between">
                    <p className="text-sm text-zinc-300 font-light">Rabat, Morocco</p>
                    <Globe className="w-5 h-5 text-white/30" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}
