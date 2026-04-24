import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

interface ImageRevealProps {
  src: string;
  alt: string;
  className?: string;
  direction?: 'left' | 'right' | 'up' | 'down';
}

export function ImageReveal({ src, alt, className = '', direction = 'up' }: ImageRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const variants = {
    hidden: {
      opacity: 0,
      x: direction === 'left' ? -100 : direction === 'right' ? 100 : 0,
      y: direction === 'up' ? 100 : direction === 'down' ? -100 : 0,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (
    <div ref={ref} className="relative overflow-hidden">
      <motion.div
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        variants={variants}
        className="relative overflow-hidden rounded-3xl"
      >
        <motion.img
          src={src}
          alt={alt}
          className={`w-full h-full object-cover ${className}`}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.6 }}
        />
        <motion.div
          initial={{ x: '-100%' }}
          animate={isInView ? { x: '100%' } : { x: '-100%' }}
          transition={{ duration: 1, delay: 0.2 }}
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
        />
      </motion.div>
    </div>
  );
}
