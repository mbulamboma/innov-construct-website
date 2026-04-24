import { motion } from 'motion/react';
import { ReactNode } from 'react';

export function PageHero({ title, subtitle, icon }: { title: string; subtitle: string; icon?: ReactNode }) {
  return (
    <section className="relative pt-36 pb-20 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white overflow-hidden">
      <div className="absolute inset-0 opacity-[0.08]" style={{
        backgroundImage: `linear-gradient(rgba(59,130,246,0.4) 1px, transparent 1px),
                          linear-gradient(90deg, rgba(59,130,246,0.4) 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} />
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute -top-20 -right-20 w-[500px] h-[500px] bg-blue-600 rounded-full blur-3xl"
      />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {icon && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 shadow-xl shadow-blue-600/40 mb-6"
          >
            {icon}
          </motion.div>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold bg-gradient-to-br from-white via-blue-50 to-blue-200 bg-clip-text text-transparent mb-4"
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-lg md:text-xl text-blue-100/80 max-w-2xl mx-auto"
        >
          {subtitle}
        </motion.p>
      </div>
    </section>
  );
}
