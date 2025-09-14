import { motion } from "framer-motion";
import { MapPin, Calendar, Mail, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { personalInfo, languages, education } from "@/data/portfolio";

const About = () => {
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
                <Calendar className="h-5 w-5 text-primary" />
                <span className="text-foreground">{personalInfo.age} years old</span>
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

          {/* Right Column - Additional Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Languages */}
            <Card className="card-interactive">
              <CardContent className="p-6">
                <h4 className="text-xl font-semibold text-foreground mb-4">Languages</h4>
                <div className="space-y-3">
                  {languages.map((lang, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-foreground">{lang.name}</span>
                      <span className="text-primary font-medium">{lang.level}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Education Highlight */}
            <Card className="card-interactive">
              <CardContent className="p-6">
                <h4 className="text-xl font-semibold text-foreground mb-4">Current Education</h4>
                <div className="space-y-2">
                  <h5 className="font-medium text-foreground">{education[0].degree}</h5>
                  <p className="text-muted-foreground">{education[0].institution}</p>
                  <p className="text-sm text-primary">{education[0].period}</p>
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                className="text-center p-4 rounded-lg bg-secondary"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-2xl font-bold text-primary">10+</div>
                <div className="text-sm text-muted-foreground">Certificates</div>
              </motion.div>
              <motion.div
                className="text-center p-4 rounded-lg bg-secondary"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-2xl font-bold text-primary">3+</div>
                <div className="text-sm text-muted-foreground">Major Projects</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;