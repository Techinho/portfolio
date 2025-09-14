import { motion } from "framer-motion";
import { useState } from "react";
import * as Icons from "react-icons/si";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { skills } from "@/data/portfolio";

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  // Group skills by category
  const skillsByCategory = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof skills>);

  const categories = [
    { name: "Frontend", color: "from-blue-500 to-cyan-500" },
    { name: "Backend", color: "from-green-500 to-emerald-500" },
    { name: "Database", color: "from-purple-500 to-pink-500" },
    { name: "Tools & DevOps", color: "from-orange-500 to-red-500" }
  ];

  const getIconComponent = (iconName: string) => {
    return (Icons as any)[iconName] || Icons.SiReact;
  };

  return (
    <section id="skills" className="py-20 bg-gradient-subtle">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            My <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
          <div className="w-24 h-1 bg-gradient-purple mx-auto mt-6"></div>
        </motion.div>

        <div className="space-y-12">
          {categories.map((category, categoryIndex) => {
            const categorySkills = skillsByCategory[category.name] || [];
            
            if (categorySkills.length === 0) return null;

            return (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="card-interactive">
                  <CardHeader className="pb-6">
                    <CardTitle className="flex items-center space-x-3 text-2xl">
                      <div className={`h-4 w-4 rounded-full bg-gradient-to-r ${category.color}`}></div>
                      <span>{category.name}</span>
                      <Badge variant="secondary" className="ml-auto">
                        {categorySkills.length} skills
                      </Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                      {categorySkills.map((skill, skillIndex) => {
                        const IconComponent = getIconComponent(skill.icon);
                        const isHovered = hoveredSkill === `${category.name}-${skill.name}`;
                        
                        return (
                          <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ 
                              duration: 0.5, 
                              delay: categoryIndex * 0.1 + skillIndex * 0.05 
                            }}
                            viewport={{ once: true }}
                            className="relative group"
                          >
                            <div
                              className="flex flex-col items-center p-4 rounded-lg bg-card border border-border transition-all duration-300 hover:shadow-medium hover:-translate-y-1 cursor-pointer"
                              onMouseEnter={() => setHoveredSkill(`${category.name}-${skill.name}`)}
                              onMouseLeave={() => setHoveredSkill(null)}
                            >
                              <motion.div
                                className="mb-3"
                                whileHover={{ scale: 1.1 }}
                                transition={{ type: "spring", stiffness: 300 }}
                              >
                                <IconComponent 
                                  className="w-8 h-8 transition-colors duration-300"
                                  style={{ 
                                    color: isHovered 
                                      ? skill.color 
                                      : 'hsl(var(--muted-foreground))' 
                                  }}
                                />
                              </motion.div>
                              
                              <h4 className="text-sm font-medium text-center text-foreground mb-1">
                                {skill.name}
                              </h4>
                              
                              {/* Tooltip */}
                              <motion.div
                                className={`absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-card border border-border rounded-lg shadow-lg z-10 w-48 ${
                                  isHovered ? 'opacity-100 visible' : 'opacity-0 invisible'
                                }`}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ 
                                  opacity: isHovered ? 1 : 0, 
                                  y: isHovered ? 0 : 10 
                                }}
                                transition={{ duration: 0.2 }}
                              >
                                <p className="text-xs text-muted-foreground text-center">
                                  {skill.description}
                                </p>
                                <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-border"></div>
                              </motion.div>
                            </div>
                          </motion.div>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Methodologies Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <Card className="card-interactive">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-foreground mb-6 text-center">
                Methodologies & Practices
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {["Agile", "Scrum", "CI/CD", "DevOps"].map((methodology, index) => (
                  <motion.div
                    key={methodology}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                    className="p-4 bg-gradient-to-r from-primary/10 to-primary-light/10 rounded-lg text-center border border-primary/20 transition-all duration-300 hover:shadow-medium"
                  >
                    <span className="text-primary font-semibold">{methodology}</span>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;