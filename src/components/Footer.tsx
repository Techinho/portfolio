import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { personalInfo } from "@/data/portfolio";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className=" border-t border-border py-8">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center space-y-4"
        >
       
          
          <div className="text-xs text-muted-foreground">
            Designed & Developed with React, TypeScript, Tailwind CSS & Framer Motion
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;