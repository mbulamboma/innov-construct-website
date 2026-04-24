import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import appartementImage from '../../imports/Appartement_VisionGreen.png';
import { Building2, Users, Award, TrendingUp } from 'lucide-react';
import { AnimatedCounter } from './AnimatedCounter';
import { useT } from '../i18n';

export function ImpactSection() {
  const t = useT();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });

  const y = useTransform(scrollYProgress, [0, 1], ['20%', '-20%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 0.3]);

  return (
    <section ref={ref} className="relative py-32 overflow-hidden bg-slate-950" style={{ position: 'relative' }}>
      {/* Parallax background */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/80 to-slate-950 z-10"></div>
        <ImageWithFallback
          src={appartementImage}
          alt="Vision Green Complex"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
      </motion.div>

      {/* Grid overlay */}
      <div className="absolute inset-0 z-0 opacity-[0.02]" style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                          linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
        backgroundSize: '50px 50px'
      }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          style={{ opacity }}
          className="text-center mb-20"
        >
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight"
          >
            {t('Notre impact sur les infrastructures', 'Our impact on infrastructure')}
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              {t('de la RDC', 'in the DRC')}
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-blue-200/80 max-w-3xl mx-auto leading-relaxed"
          >
            {t("Des chiffres qui témoignent de notre engagement pour l'excellence", "Numbers that reflect our commitment to excellence")}
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-8">
          {[
            { icon: Building2, value: 15, suffix: '+', label: t('Projets réalisés', 'Projects delivered'), color: 'from-blue-500 to-cyan-500' },
            { icon: Users, value: 15, suffix: '+', label: t('Experts dédiés', 'Dedicated experts'), color: 'from-emerald-500 to-teal-500' },
            { icon: Award, value: 100, suffix: '%', label: t('Satisfaction client', 'Client satisfaction'), color: 'from-purple-500 to-pink-500' },
            { icon: TrendingUp, value: 3, suffix: '+', label: t("Années d'expérience", 'Years of experience'), color: 'from-orange-500 to-red-500' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/[0.02] rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 group-hover:border-white/20 transition-all duration-500">
                <div className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center shadow-2xl mb-6 group-hover:scale-110 transition-transform duration-500`}>
                  <stat.icon className="text-white" size={30} />
                </div>
                <p className="text-5xl font-bold text-white mb-3">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="text-sm text-blue-200/80 font-medium leading-relaxed">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
