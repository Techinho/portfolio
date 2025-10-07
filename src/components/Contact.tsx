import { useState } from "react"
import { motion } from "framer-motion"
import { Send, Mail, MapPin, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { personalInfo } from "@/data/portfolio"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Replace with your form submission logic, e.g., using Formspree or Netlify Forms
    window.location.href = `mailto:${personalInfo.email}?subject=Contact from ${formData.name}&body=${formData.message}`;
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  }

  return (
  <section id="contact" className="py-32 bg-background relative overflow-hidden">
      {/* Decorative gradient blob */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-6 md:px-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20 space-y-6"
        >
          <div className="inline-block">
            <span className="text-accent text-sm font-semibold tracking-widest uppercase">Get in Touch</span>
            <div className="h-0.5 w-16 bg-accent mt-2 mx-auto" />
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
            Let's Work <br />
            <span className="text-muted-foreground">Together</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <p className="text-muted-foreground text-lg leading-relaxed">
              {personalInfo.description}
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="text-muted-foreground text-sm">Email</p>
                  <p className="text-foreground text-lg">{personalInfo.email}</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                  <Phone className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="text-muted-foreground text-sm">Phone</p>
                  <p className="text-foreground text-lg">{personalInfo.phone}</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="text-muted-foreground text-sm">Location</p>
                  <p className="text-foreground text-lg">{personalInfo.location}</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <Input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="h-14 px-6 bg-card border-border text-foreground placeholder:text-muted-foreground focus:border-accent rounded-xl"
              />

              <Input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="h-14 px-6 bg-card border-border text-foreground placeholder:text-muted-foreground focus:border-accent rounded-xl"
              />

              <Textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="px-6 py-4 bg-card border-border text-foreground placeholder:text-muted-foreground focus:border-accent resize-none rounded-xl"
              />

              <Button
                type="submit"
                className="w-full h-14 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold rounded-xl shadow-lg shadow-accent/20 hover:shadow-accent/40 transition-all duration-300"
              >
                <Send className="h-5 w-5 mr-2" />
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
