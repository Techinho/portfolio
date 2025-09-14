import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { personalInfo } from "@/data/portfolio";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border py-8">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center space-y-4"
        >
          <div className="flex items-center justify-center space-x-2 text-muted-foreground">
            <span>Built with</span>
            <Heart className="h-4 w-4 text-red-500 fill-red-500" />
            <span>by {personalInfo.name}</span>
          </div>
          
          <div className="text-sm text-muted-foreground">
            © {currentYear} {personalInfo.name}. All rights reserved.
          </div>
          
          <div className="text-xs text-muted-foreground">
            Designed & Developed with React, TypeScript, Tailwind CSS & Framer Motion
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;