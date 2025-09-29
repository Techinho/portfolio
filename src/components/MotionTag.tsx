import { motion } from "framer-motion";
import { useIsMobile } from "../hooks/use-mobile";
import React, { useRef } from "react";

// Supported motion tags
const motionTags = {
  div: motion.div,
  section: motion.section,
  span: motion.span,
  header: motion.header,
  main: motion.main,
  footer: motion.footer,
  nav: motion.nav,
  article: motion.article,
  aside: motion.aside,
};

/**
 * MotionTag component for animated wrappers
 * @param {Object} props
 * @param {string} props.tag - HTML tag to use (e.g., 'div', 'section')
 * @param {any} props.variants - Framer Motion variants
 * @param {any} props.initial - Initial animation state
 * @param {any} props.animate - Animate state
 * @param {string} [props.className] - Additional classes
 * @param {boolean} [props.once] - Animate only once
 * @param {any} [props.transition] - Transition config
 * @param {any} [props.style] - Inline styles
 * @param {React.ReactNode} props.children - Children
 */
export default function MotionTag({
  tag = "div",
  children,
  variants,
  initial,
  animate,
  className = "",
  once = true,
  transition = { duration: 0.3 },
  style = {},
  ...props
}) {
  const isMobile = useIsMobile();
  const ref = useRef(null);

  // Pick the correct motion tag
  const Tag = motionTags[tag] || motion.div;

  // Only animate if in view (for demo, always animate)
  return (
    <Tag
      ref={ref}
      variants={variants}
      initial={initial}
      animate={animate}
      className={className}
      transition={transition}
      style={style}
      {...props}
    >
      {children}
    </Tag>
  );
}
