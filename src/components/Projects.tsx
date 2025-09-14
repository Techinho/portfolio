import { motion } from "framer-motion";
import { ExternalLink, Github, Calendar, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/data/portfolio";

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-background">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A collection of projects that showcase my skills and passion for creating innovative solutions
          </p>
          <div className="w-24 h-1 bg-gradient-purple mx-auto mt-6"></div>
        </motion.div>

        <div className="grid lg:grid-cols-1 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="card-interactive overflow-hidden">
                <div className={`grid lg:grid-cols-2 gap-8 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                  {/* Project Image */}
                  <div className={`relative group ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary-light/20 rounded-lg overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={`${project.title} screenshot`}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-primary/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                      <div className="flex space-x-4">
                        <Button size="sm" variant="secondary">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Live Demo
                        </Button>
                        <Button size="sm" variant="secondary">
                          <Github className="h-4 w-4 mr-2" />
                          Code
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className={`flex flex-col justify-center space-y-6 p-6 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                    <div>
                      <div className="flex items-center space-x-2 mb-2">
                        <Badge variant="secondary" className="bg-primary/10 text-primary">
                          {project.category}
                        </Badge>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                        {project.longDescription}
                      </p>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <motion.span
                            key={tech}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: techIndex * 0.05 }}
                            viewport={{ once: true }}
                          >
                            <Badge variant="outline" className="border-primary/30 text-primary">
                              {tech}
                            </Badge>
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    {/* Features */}
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Key Features:</h4>
                      <ul className="space-y-1">
                        {project.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex space-x-4">
                      <Button className="btn-hero">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </Button>
                      <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                        <Github className="h-4 w-4 mr-2" />
                        View Code
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* More Projects CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground mb-6">
            Want to see more of my work?
          </p>
          <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            <Github className="h-4 w-4 mr-2" />
            View All Projects on GitHub
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;