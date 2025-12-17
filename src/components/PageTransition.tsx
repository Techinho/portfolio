import { motion } from "framer-motion";
import { ReactNode } from "react";

interface PageTransitionProps {
  children: ReactNode;
}

// Black Panel (Top Layer)
const blackVariants = {
  initial: { y: "100%" },
  animate: { 
    y: "-100%", 
    transition: { 
      duration: 1.2, 
      ease: [0.87, 0, 0.13, 1] as any, // Very smooth custom easing
    } 
  },
  exit: { 
    y: "0%", 
    transition: { 
      duration: 1.2, 
      ease: [0.87, 0, 0.13, 1] as any,
      delay: 0.2
    } 
  }
};

// Gold Panel (Middle Layer)
const goldVariants = {
  initial: { y: "100%" },
  animate: { 
    y: "-100%", 
    transition: { 
      duration: 1.2, 
      ease: [0.87, 0, 0.13, 1] as any,
      delay: 0.1
    } 
  },
  exit: { 
    y: "0%", 
    transition: { 
      duration: 1.2, 
      ease: [0.87, 0, 0.13, 1] as any
    } 
  }
};

// Content Animation
const contentVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, delay: 0.6, ease: "easeOut" } 
  },
  exit: { 
    opacity: 0,
    y: -20,
    transition: { duration: 0.4, ease: "easeIn" }
  }
};

export const PageTransition = ({ children }: PageTransitionProps) => (
  <div className="relative w-full">
    {/* Transition Curtains */}
    <motion.div
      variants={blackVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="fixed inset-0 z-[60] bg-[#050505] pointer-events-none"
    />
    <motion.div
      variants={goldVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="fixed inset-0 z-[59] bg-gold-400 pointer-events-none"
    />
    
    {/* Main Content */}
    <motion.div
      variants={contentVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="w-full"
    >
      {children}
    </motion.div>
  </div>
);

export default PageTransition;
