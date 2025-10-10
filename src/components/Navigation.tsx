import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { NavLink, Link } from "react-router-dom"
import ThemeToggle from "@/components/ui/theme-toggle"

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const navItems = [
    { name: "ABOUT", to: "/about" },
    { name: "PROJECTS", to: "/projects" },
    { name: "SKILLS", to: "/skills" },
    { name: "CONTACT", to: "/contact" },
  ]

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <motion.nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/80 dark:bg-black/60 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between h-20 px-6 md:px-16">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <Link
            to="/"
            className="text-3xl md:text-4xl font-jovelle font-bold text-foreground leading-tight"
          >
            <span className="">Ezzaouya</span>
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <motion.div
          className="hidden md:flex items-center space-x-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {navItems.map((item, index) => (
            <NavLink
              key={item.name}
              to={item.to}
              className={({ isActive }) =>
                `relative px-1 text-muted-foreground hover:text-foreground text-sm font-medium tracking-wider transition-all duration-200
                after:absolute after:inset-x-0 after:-bottom-3 after:h-0.5 after:rounded-full after:scale-x-0 after:origin-center after:bg-accent after:transition-transform after:duration-200
                hover:after:scale-x-100 ${
                  isActive ? 'text-accent after:scale-x-100' : ''
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
          
          {/* Theme Toggle */}
          <ThemeToggle />
        </motion.div>

        {/* Mobile Menu Button and Theme Toggle */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            className="text-foreground leading-tight hover:bg-white/10"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden bg-white/95 dark:bg-black/95 backdrop-blur-md border-t border-border"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="py-6 px-6 space-y-4">
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.to}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `block text-muted-foreground hover:text-foreground text-lg font-medium transition-colors duration-200 ${
                      isActive ? 'text-accent' : ''
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navigation
