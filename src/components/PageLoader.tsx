import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

interface PageLoaderProps {
  isLoading?: boolean;
}

export default function PageLoader({ isLoading: externalLoading }: PageLoaderProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Counter animation
    const counterInterval = setInterval(() => {
      setCount((prev) => {
        if (prev >= 100) {
          clearInterval(counterInterval);
          return 100;
        }
        return prev + 2;
      });
    }, 25);

    // Exit animation
    const timer = setTimeout(() => {
      setCount(100);
      setTimeout(() => setIsLoading(false), 600);
    }, 2000);

    return () => {
      clearInterval(counterInterval);
      clearTimeout(timer);
    };
  }, []);

  const showLoader = externalLoading !== undefined ? externalLoading : isLoading;

  return (
    <AnimatePresence mode="wait">
      {showLoader && (
        <>
          {/* Split Screen Curtain */}
          <motion.div
            className="fixed inset-0 z-[9999] flex"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Left Panel */}
            <motion.div
              className="w-1/2 h-full bg-black relative overflow-hidden"
              initial={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            >
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px]" />
              
              {/* Left glow */}
              <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-gold-400/10 blur-[100px]" />
            </motion.div>

            {/* Right Panel */}
            <motion.div
              className="w-1/2 h-full bg-black relative overflow-hidden"
              initial={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            >
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px]" />
              
              {/* Right glow */}
              <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-gold-400/10 blur-[100px]" />
            </motion.div>

            {/* Center Content (over curtains) */}
            <motion.div
              className="absolute inset-0 flex flex-col items-center justify-center"
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
            >
              {/* Large Counter */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="relative"
              >
                <h1 className="text-[120px] md:text-[180px] font-serif font-bold text-white leading-none tabular-nums">
                  {count}
                  <span className="text-gold-400">%</span>
                </h1>
                
                {/* Underline */}
                <motion.div
                  className="h-1 bg-gold-400 mt-4"
                  initial={{ width: "0%" }}
                  animate={{ width: `${count}%` }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                />
              </motion.div>

              {/* Tagline */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="mt-8 text-sm md:text-base text-zinc-400 tracking-[0.3em] uppercase font-medium"
              >
                Preparing Portfolio
              </motion.p>

              {/* Animated dots */}
              <div className="flex gap-2 mt-6">
                {[0, 1, 2, 3, 4].map((i) => (
                  <motion.div
                    key={i}
                    className="w-1.5 h-1.5 bg-gold-400 rounded-full"
                    animate={{
                      opacity: [0.2, 1, 0.2],
                      scale: [1, 1.3, 1],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      delay: i * 0.15,
                      ease: "easeInOut",
                    }}
                  />
                ))}
              </div>
            </motion.div>

            {/* Vertical center line */}
            <motion.div
              className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-full bg-gradient-to-b from-transparent via-gold-400/30 to-transparent"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            />
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
