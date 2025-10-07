import { motion } from "framer-motion";
import { ReactNode } from "react";

interface PageTransitionProps {
  children: ReactNode;
}

const variants = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] } },
  exit: { opacity: 0, y: -12, transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] } }
};

export const PageTransition = ({ children }: PageTransitionProps) => (
  <motion.main
    variants={variants}
    initial="initial"
    animate="animate"
    exit="exit"
    className="min-h-[80vh]"
  >
    {children}
  </motion.main>
);

export default PageTransition;
