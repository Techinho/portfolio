import { motion } from "framer-motion";
import { 
  Code, 
  Server, 
  Database, 
  Wrench,
  Star
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { skills } from "@/data/portfolio";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Code,
      skills: skills.frontend,
      gradient: "from-primary to-primary-light"
    },
    {
      title: "Backend Development", 
      icon: Server,
      skills: skills.backend,
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Database Technologies",
      icon: Database,
      skills: skills.database,
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Tools & Technologies",
      icon: Wrench,
      skills: skills.tools,
      gradient: "from-green-500 to-emerald-500"
    }
  ];

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

        <div className="grid lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="card-interactive h-full">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center space-x-3 text-xl">
                    <div className={`p-2 rounded-lg bg-gradient-to-r ${category.gradient}`}>
                      <category.icon className="h-5 w-5 text-white" />
                    </div>
                    <span>{category.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ 
                        duration: 0.6, 
                        delay: categoryIndex * 0.1 + skillIndex * 0.05 
                      }}
                      viewport={{ once: true }}
                      className="space-y-2"
                    >
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-foreground">{skill.name}</span>
                        <div className="flex items-center space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-3 w-3 ${
                                i < Math.floor(skill.level / 20)
                                  ? 'text-yellow-400 fill-yellow-400'
                                  : 'text-gray-300'
                              }`}
                            />
                          ))}
                          <span className="text-sm text-muted-foreground ml-2">
                            {skill.level}%
                          </span>
                        </div>
                      </div>
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        transition={{ 
                          duration: 1, 
                          delay: categoryIndex * 0.1 + skillIndex * 0.1,
                          ease: "easeOut"
                        }}
                        viewport={{ once: true }}
                      >
                        <Progress 
                          value={skill.level} 
                          className="h-2"
                        />
                      </motion.div>
                    </motion.div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Card className="card-interactive max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-foreground mb-4">
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
                    className="p-3 bg-primary/10 rounded-lg text-primary font-medium"
                  >
                    {methodology}
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