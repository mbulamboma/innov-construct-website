import { motion } from 'motion/react';

export function CongoFlag() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 0.15, scale: 1 }}
      transition={{ duration: 2, delay: 1 }}
      className="absolute top-20 right-20 z-0"
    >
      <svg width="120" height="120" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
        {/* Subtle star from DRC flag */}
        <motion.path
          d="M60,20 L64,45 L87,45 L68,58 L75,82 L60,68 L45,82 L52,58 L33,45 L56,45 Z"
          fill="rgba(251,191,36,0.3)"
          stroke="rgba(251,191,36,0.4)"
          strokeWidth="1"
          animate={{
            opacity: [0.2, 0.4, 0.2],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        {/* Diagonal stripe suggestion */}
        <motion.line
          x1="30"
          y1="30"
          x2="90"
          y2="90"
          stroke="rgba(220,38,38,0.2)"
          strokeWidth="3"
          animate={{
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
          }}
        />
      </svg>
    </motion.div>
  );
}
