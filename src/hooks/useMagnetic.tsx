import { useState, useEffect, useRef } from "react";
import { useMotionValue, useSpring, useTransform } from "framer-motion";

export function useMagnetic() {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15, mass: 0.1 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15, mass: 0.1 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current!.getBoundingClientRect();
    
    // Calculate distance from center
    const xVal = clientX - (left + width / 2);
    const yVal = clientY - (top + height / 2);
    
    // Move the element towards mouse (magnetic effect)
    x.set(xVal * 0.3); // 0.3 is the magnetic strength
    y.set(yVal * 0.3);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return { ref, x: mouseXSpring, y: mouseYSpring, handleMouseMove, handleMouseLeave };
}
