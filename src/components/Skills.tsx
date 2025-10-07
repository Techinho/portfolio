import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import * as Icons from "react-icons/si"
import { TbRefresh, TbUsers, TbApi } from "react-icons/tb"
import { useState } from "react"

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("All")

  const categories = ["All", "Frontend", "Backend", "Database", "DevOps & Tools", "Methodologies"]

  const skillsList = [
    { name: "React.js", icon: "SiReact", category: "Frontend" },
    { name: "Next.js", icon: "SiNextdotjs", category: "Frontend" },
    { name: "Bootstrap", icon: "SiBootstrap", category: "Frontend" },
    { name: "Tailwind CSS", icon: "SiTailwindcss", category: "Frontend" },
    { name: "JavaScript", icon: "SiJavascript", category: "Frontend" },
    { name: "TypeScript", icon: "SiTypescript", category: "Frontend" },
    { name: "HTML5", icon: "SiHtml5", category: "Frontend" },
    { name: "CSS3", icon: "SiCss3", category: "Frontend" },
    { name: "Node.js", icon: "SiNodedotjs", category: "Backend" },
    { name: "Express", icon: "SiExpress", category: "Backend" },
    { name: "Laravel", icon: "SiLaravel", category: "Backend" },
    { name: "PHP", icon: "SiPhp", category: "Backend" },
    { name: "Python", icon: "SiPython", category: "Backend" },
    { name: "REST API", icon: "TbApi", category: "Backend" },
    { name: "MongoDB", icon: "SiMongodb", category: "Database" },
    { name: "MySQL", icon: "SiMysql", category: "Database" },
    { name: "PostgreSQL", icon: "SiPostgresql", category: "Database" },
    { name: "Supabase", icon: "SiSupabase", category: "Database" },
    { name: "phpMyAdmin", icon: "SiPhpmyadmin", category: "Database" },
    { name: "SQL", icon: "SiMysql", category: "Database" },
    { name: "NoSQL", icon: "SiMongodb", category: "Database" },
    { name: "Docker", icon: "SiDocker", category: "DevOps & Tools" },
    { name: "GitHub Actions", icon: "SiGithubactions", category: "DevOps & Tools" },
    { name: "GitLab CI", icon: "SiGitlab", category: "DevOps & Tools" },
    { name: "Git", icon: "SiGit", category: "DevOps & Tools" },
    { name: "GitHub", icon: "SiGithub", category: "DevOps & Tools" },
    { name: "GitLab", icon: "SiGitlab", category: "DevOps & Tools" },
    { name: "VS Code", icon: "SiVisualstudiocode", category: "DevOps & Tools" },
    { name: "Figma", icon: "SiFigma", category: "DevOps & Tools" },
    { name: "Jira", icon: "SiJira", category: "DevOps & Tools" },
    { name: "SonarQube", icon: "SiSonarqube", category: "DevOps & Tools" },
    { name: "Agile", icon: "TbRefresh", category: "Methodologies" },
    { name: "Scrum", icon: "TbUsers", category: "Methodologies" },
  ]

  const filteredSkills =
    activeCategory === "All" ? skillsList : skillsList.filter((skill) => skill.category === activeCategory)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.04,
        delayChildren: 0.1,
      },
    },
  }

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0 opacity-30 pointer-events-none"
        animate={{
          background: [
            "radial-gradient(circle at 20% 50%, hsl(var(--primary)/0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 50%, hsl(var(--primary)/0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 20% 50%, hsl(var(--primary)/0.1) 0%, transparent 50%)",
          ],
        }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-block mb-4"
          >
            <span className="text-sm font-semibold tracking-wider uppercase text-primary">Technical Expertise</span>
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">Skills & Technologies</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2.5 rounded-full font-medium text-sm transition-all duration-300 relative overflow-hidden ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/10"
                  : "text-foreground hover:text-primary bg-card border border-border hover:border-primary/50"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <span className="relative z-10">{category}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          key={activeCategory}
        >
          {filteredSkills.map((skill, index) => {
            const IconComponent = (Icons as any)[skill.icon] || Icons.SiReact

            return <SkillCard key={skill.name} skill={skill} IconComponent={IconComponent} index={index} />
          })}
        </motion.div>
      </div>
    </section>
  )
}

// Separate component for individual skill cards with magnetic effect
const SkillCard = ({ skill, IconComponent, index }: any) => {
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 20 })
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 20 })

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7.5deg", "-7.5deg"])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7.5deg", "7.5deg"])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top
    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5
    x.set(xPct)
    y.set(yPct)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  const getIconComponent = () => {
    if (skill.icon.startsWith("Tb")) {
      if (skill.icon === "TbRefresh") return TbRefresh
      if (skill.icon === "TbUsers") return TbUsers
      if (skill.icon === "TbApi") return TbApi
    }
    return (Icons as any)[skill.icon] || Icons.SiReact
  }

  const IconComp = getIconComponent()

  return (
    <motion.div
      variants={{
        hidden: {
          opacity: 0,
          scale: 0.8,
          rotateX: -15,
          y: 20,
        },
        visible: {
          opacity: 1,
          scale: 1,
          rotateX: 0,
          y: 0,
          transition: {
            type: "spring",
            stiffness: 100,
            damping: 12,
            duration: 0.6,
          },
        },
      }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.2 },
      }}
      className="relative group"
    >
      {/* Glow effect on hover */}
      <motion.div
        className="absolute -inset-0.5 bg-gradient-to-r from-primary to-primary/50 rounded-2xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-500"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 0.6 }}
      />

      <div
        className="relative flex flex-col items-center justify-center p-3 md:p-4 bg-card rounded-2xl border border-border group-hover:border-primary/50 transition-all duration-300 h-full"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Icon with 3D transform */}
        <motion.div
          className="mb-2"
          style={{ transform: "translateZ(20px)" }}
          whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
          transition={{ duration: 0.4 }}
        >
          <IconComp className="w-8 h-8 md:w-10 md:h-10 text-foreground group-hover:text-primary transition-colors duration-300" />
        </motion.div>

        {/* Name */}
        <motion.span
          className="text-xs md:text-sm font-semibold text-foreground text-center"
          style={{ transform: "translateZ(10px)" }}
        >
          {skill.name}
        </motion.span>

        {/* Animated border on hover */}
        <motion.div
          className="absolute inset-0 rounded-2xl"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <motion.rect
              x="0"
              y="0"
              width="100%"
              height="100%"
              rx="16"
              fill="none"
              stroke="hsl(var(--primary))"
              strokeWidth="2"
              strokeDasharray="300"
              strokeDashoffset="300"
              initial={{ strokeDashoffset: 300 }}
              whileHover={{
                strokeDashoffset: 0,
                transition: { duration: 0.6, ease: "easeInOut" },
              }}
            />
          </svg>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Skills