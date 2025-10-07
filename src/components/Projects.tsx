import { motion, easeInOut } from "framer-motion"
import { ExternalLink, Github, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { projects as portfolioProjects } from "@/data/portfolio"
import { useNavigate } from "react-router-dom"

const Projects = () => {
  const navigate = useNavigate();

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
  <section id="projects" className="py-32 bg-background relative overflow-hidden">
      {/* Decorative gradient blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 md:px-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20 space-y-6"
        >
          <div className="inline-block">
            <span className="text-accent text-sm font-semibold tracking-widest uppercase">Selected Works</span>
            <div className="h-0.5 w-16 bg-accent mt-2 mx-auto" />
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
            Featured &nbsp;
            <span className="text-muted-foreground">Projects</span>
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-24"
        >
          {portfolioProjects.map((project, index) => (
            <>
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
                className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-12 items-center bg-gray-100 dark:bg-card border border-border rounded-2xl shadow-lg shadow-accent/10 p-8 md:p-12 transition-colors duration-300`}
              >
              {/* Project Image */}
              <div className="flex-1 w-full">
                <div className="group relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-105 shadow-2xl"
                  />
                </div>
              </div>

              {/* Project Content */}
              <div className="flex-1 space-y-6">
                <h3 className="text-3xl md:text-4xl font-bold text-foreground">{project.title}</h3>

                <p className="text-muted-foreground text-lg leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-3">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 text-sm bg-card border border-border rounded-full text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 pt-4">
                  <Button
                    className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-6 py-6 rounded-full shadow-lg shadow-accent/20 hover:shadow-accent/40 transition-all duration-300"
                    asChild
                  >
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-5 w-5 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    className="border-2 border-border text-foreground leading-tight   hover:shadow-md px-6 py-6 rounded-full transition-all duration-300 bg-transparent"
                    asChild
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-5 w-5 mr-2" />
                      Code
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
              {index !== portfolioProjects.length - 1 && (
                <div className="w-full flex justify-center my-12">
                  <div className="h-px w-3/4 bg-border dark:bg-border/60 transition-colors duration-300" />
                </div>
              )}
            </>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-20 pt-16 border-t border-border"
        >
          <Button
            asChild
            className="bg-card hover:bg-accent/5 text-foreground border border-border font-semibold px-8 py-6 rounded-full transition-all duration-300"
          >
            <a
              href="https://github.com/Techinho?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
            >
              View All Projects
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
