import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { NavLink, Link } from "react-router-dom"
import ThemeToggle from "@/components/ui/theme-toggle"

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  const navItems = [
    { name: "ABOUT", to: "/about" },
    { name: "PROJECTS", to: "/projects" },
    { name: "SKILLS", to: "/skills" },
    { name: "CONTACT", to: "/contact" },
  ]

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY
      
      // Determine if scrolled for background style
      setIsScrolled(currentScrollY > 50)

      // Determine visibility based on scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        // Scrolling down & not at top -> Hide
        setIsVisible(false)
      } else {
        // Scrolling up -> Show
        setIsVisible(true)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", controlNavbar)
    return () => window.removeEventListener("scroll", controlNavbar)
  }, [lastScrollY])

  return (
    <>
      <motion.nav
        className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none"
        initial={{ y: -100, opacity: 0 }}
        animate={{ 
          y: isVisible ? 0 : -150, 
          opacity: isVisible ? 1 : 0 
        }}
        transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
      >
        <div className={`
          pointer-events-auto
          flex items-center justify-between 
          md:justify-center md:gap-12
          px-6 py-3 md:px-8 md:py-4
          rounded-full 
          bg-black/40 backdrop-blur-xl 
          border border-white/10 
          shadow-[0_8px_32px_rgba(0,0,0,0.2)]
          transition-all duration-500
          ${isScrolled ? 'w-full max-w-5xl bg-black/60' : 'w-full max-w-4xl'}
        `}>
          
          {/* Logo */}
          <Link
            to="/"
            className="text-xl md:text-2xl font-serif font-bold text-white tracking-tight hover:text-gold-400 transition-colors"
          >
            Ezzaouya<span className="text-gold-400">.</span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.to}
                className={({ isActive }) =>
                  `relative text-xs font-medium tracking-[0.2em] transition-all duration-300 font-sans uppercase
                  ${isActive ? 'text-gold-400' : 'text-zinc-400 hover:text-white'}
                  `
                }
              >
                {({ isActive }) => (
                  <span className="relative">
                    {item.name}
                    {isActive && (
                      <motion.span
                        layoutId="nav-dot"
                        className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 bg-gold-400 rounded-full"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                  </span>
                )}
              </NavLink>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              className="text-zinc-400 hover:text-white hover:bg-white/5 rounded-full w-10 h-10"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </Button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Full Screen Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-2xl pt-32 px-6 md:hidden"
          >
            <div className="flex flex-col items-center gap-8">
              {navItems.map((item, idx) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <NavLink
                    to={item.to}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={({ isActive }) =>
                      `text-3xl font-serif font-light tracking-tight ${
                        isActive ? 'text-gold-400 italic' : 'text-white'
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navigation
