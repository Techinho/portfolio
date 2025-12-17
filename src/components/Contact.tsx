import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { personalInfo, socialLinks } from "@/data/portfolio"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Send form to serverless endpoint
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: `Portfolio contact from ${formData.name}`,
          message: formData.message,
        }),
      });

      if (res.ok) {
        alert('Message sent — thank you!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        const json = await res.json().catch(() => ({}));
        alert('Failed to send message. ' + (json.error || 'Please try again later.'));
      }
    } catch (error) {
      console.error('Contact submit error', error);
      alert('An error occurred while sending your message.');
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden py-24 md:py-32 bg-[#050505] text-white">
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-32 items-start">
          
          {/* Left: Text & Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-16"
          >
            <div className="space-y-6">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-[1px] bg-[#FFD700]" />
                <span className="text-[#FFD700] text-xs font-bold tracking-[0.3em] uppercase">Contact</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-serif leading-[0.9]">
                Let's start a <br />
                <span className="italic text-zinc-600">Conversation</span>
              </h2>
              <p className="text-zinc-400 text-lg font-light max-w-md leading-relaxed border-l border-white/10 pl-6">
                Interested in working together? Fill out the form or send me an email directly. I'm always open to discussing new projects and opportunities.
              </p>
            </div>

            <div className="space-y-10">
              <div className="space-y-2">
                <p className="text-xs uppercase tracking-widest text-zinc-500 font-semibold">Email</p>
                <a href={`mailto:${personalInfo.email}`} className="block text-2xl md:text-3xl font-serif hover:text-[#FFD700] transition-colors">
                  {personalInfo.email}
                </a>
              </div>

              <div className="space-y-2">
                <p className="text-xs uppercase tracking-widest text-zinc-500 font-semibold">Socials</p>
                <div className="flex flex-wrap gap-6">
                   {socialLinks.map((link, idx) => (
                     <a 
                        key={idx} 
                        href={link.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-zinc-400 hover:text-white transition-colors text-sm uppercase tracking-widest"
                     >
                        {link.name}
                     </a>
                   ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white/[0.02] border border-white/5 p-8 md:p-12"
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="space-y-2">
                <label htmlFor="name" className="text-xs uppercase tracking-widest text-zinc-500">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b border-white/10 py-4 text-white focus:border-[#FFD700] focus:outline-none transition-colors"
                  placeholder="Your Name"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-xs uppercase tracking-widest text-zinc-500">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b border-white/10 py-4 text-white focus:border-[#FFD700] focus:outline-none transition-colors"
                  placeholder="youremail@example.com"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-xs uppercase tracking-widest text-zinc-500">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full bg-transparent border-b border-white/10 py-4 text-white focus:border-[#FFD700] focus:outline-none transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                className="group w-full relative px-8 py-4 bg-white text-black overflow-hidden mt-8"
              >
                <div className="absolute inset-0 bg-[#FFD700] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                <span className="relative flex items-center justify-center gap-2 text-xs font-bold tracking-widest uppercase group-hover:text-black transition-colors">
                  Send Message <ArrowRight className="w-4 h-4" />
                </span>
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default Contact
