import { motion } from "framer-motion";
import { MapPin, Mail, Download, Code, Coffee, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { personalInfo } from "@/data/portfolio";

const About = () => {
  // Floating code snippets for animation
  const codeSnippets = [
    "const dev = 'passionate'",
    "function build() { return 'amazing' }",
    "npm run create-magic",
    "git commit -m 'another feature'",
    "const skills = ['React', 'Node']",
    "while(learning) { grow() }"
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-purple mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Personal Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Full Stack Developer & Tech Enthusiast
              </h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {personalInfo.description}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-primary" />
                <span className="text-foreground">{personalInfo.location}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary" />
                <a 
                  href={`mailto:${personalInfo.email}`}
                  className="text-primary hover:text-primary-light transition-colors link-animated"
                >
                  {personalInfo.email}
                </a>
              </div>
            </div>

            <Button className="btn-hero">
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </Button>
          </motion.div>

          {/* Right Column - Animated Dev Component */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Main Dev Card */}
            <Card className="card-interactive relative overflow-hidden">
              <CardContent className="p-8">
                <div className="text-center space-y-6">
                  <motion.div
                    className="relative mx-auto w-24 h-24 bg-gradient-purple rounded-full flex items-center justify-center"
                    animate={{ 
                      rotate: [0, 360],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ 
                      rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                      scale: { duration: 2, repeat: Infinity }
                    }}
                  >
                    <Code className="h-10 w-10 text-white" />
                  </motion.div>
                  
                  <div className="space-y-4">
                    <h4 className="text-xl font-semibold text-foreground">
                      Coding Journey
                    </h4>
                    
                    {/* Animated Stats */}
                    <div className="grid grid-cols-3 gap-4">
                      <motion.div
                        className="text-center p-3 rounded-lg bg-secondary"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <motion.div 
                          className="text-2xl font-bold text-primary flex items-center justify-center"
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          transition={{ delay: 0.5, type: "spring" }}
                        >
                          <Coffee className="h-5 w-5 mr-1" />
                          ∞
                        </motion.div>
                        <div className="text-xs text-muted-foreground">Coffee</div>
                      </motion.div>
                      
                      <motion.div
                        className="text-center p-3 rounded-lg bg-secondary"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <motion.div 
                          className="text-2xl font-bold text-primary flex items-center justify-center"
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          transition={{ delay: 0.7, type: "spring" }}
                        >
                          <Zap className="h-5 w-5 mr-1" />
                          24/7
                        </motion.div>
                        <div className="text-xs text-muted-foreground">Learning</div>
                      </motion.div>
                      
                      <motion.div
                        className="text-center p-3 rounded-lg bg-secondary"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <motion.div 
                          className="text-2xl font-bold text-primary"
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          transition={{ delay: 0.9, type: "spring" }}
                        >
                          10+
                        </motion.div>
                        <div className="text-xs text-muted-foreground">Certificates</div>
                      </motion.div>
                    </div>
                  </div>
                </div>
                
                {/* Floating code snippets */}
                {codeSnippets.map((snippet, index) => (
                  <motion.div
                    key={index}
                    className="absolute text-xs font-mono text-primary/30 pointer-events-none"
                    style={{
                      top: `${20 + (index * 12)}%`,
                      left: `${10 + (index * 15)}%`,
                    }}
                    animate={{
                      y: [0, -10, 0],
                      opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                      duration: 3 + index,
                      repeat: Infinity,
                      delay: index * 0.5,
                    }}
                  >
                    {snippet}
                  </motion.div>
                ))}
              </CardContent>
            </Card>

            {/* Floating elements around the card */}
            <motion.div
              className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full opacity-20"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            <motion.div
              className="absolute -bottom-4 -left-4 w-6 h-6 border-2 border-primary rounded-full opacity-30"
              animate={{
                y: [0, -15, 0],
                x: [0, 10, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;