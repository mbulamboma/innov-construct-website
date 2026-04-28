import { ArrowRight, Building2, Shield, Award, Sparkles, Play, Clock, HardHat } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { AnimatedCounter } from './AnimatedCounter';
import { KinshasaSkyline } from './KinshasaSkyline';
import { CongoFlag } from './CongoFlag';
import bureauImage from '../../imports/Bureaux_Vision_Green.png';
import { useT } from '../i18n';

export function Hero() {
  const t = useT();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start']
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section ref={ref} id="accueil" className="relative min-h-screen flex items-center overflow-hidden bg-slate-950 text-white" style={{ position: 'relative' }}>
      {/* Base gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 z-0"></div>

      {/* Parallax infrastructure image */}
      <motion.div
        style={{ y, scale }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-slate-950/70 to-slate-950/95 z-10"></div>
        <ImageWithFallback
          src={bureauImage}
          alt="INNOV CONSTRUCT Infrastructure"
          className="absolute inset-0 w-full h-full object-cover opacity-[0.05] mix-blend-luminosity"
        />
      </motion.div>

      {/* Technical blueprint grid pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.08]" style={{
        backgroundImage: `
          linear-gradient(rgba(59,130,246,0.3) 1px, transparent 1px),
          linear-gradient(90deg, rgba(59,130,246,0.3) 1px, transparent 1px),
          linear-gradient(rgba(59,130,246,0.15) 1px, transparent 1px),
          linear-gradient(90deg, rgba(59,130,246,0.15) 1px, transparent 1px)
        `,
        backgroundSize: '100px 100px, 100px 100px, 20px 20px, 20px 20px'
      }}></div>

      {/* Architectural line patterns */}
      <div className="absolute inset-0 z-0 opacity-[0.06]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="blueprint" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
              <circle cx="100" cy="100" r="80" fill="none" stroke="rgba(59,130,246,0.3)" strokeWidth="0.5"/>
              <circle cx="100" cy="100" r="50" fill="none" stroke="rgba(59,130,246,0.3)" strokeWidth="0.5"/>
              <line x1="0" y1="100" x2="200" y2="100" stroke="rgba(59,130,246,0.2)" strokeWidth="0.5"/>
              <line x1="100" y1="0" x2="100" y2="200" stroke="rgba(59,130,246,0.2)" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#blueprint)"/>
        </svg>
      </div>

      {/* Dynamic gradient orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-blue-600 to-cyan-500 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute bottom-0 left-0 w-[700px] h-[700px] bg-gradient-to-br from-purple-600 to-blue-600 rounded-full blur-3xl"
      />

      {/* Congo flag subtle element */}
      <CongoFlag />

      {/* Kinshasa skyline */}
      <KinshasaSkyline />

      {/* Animated construction lines */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-px bg-gradient-to-r from-transparent via-blue-400/20 to-transparent"
          style={{
            top: `${15 + i * 12}%`,
            left: 0,
            right: 0,
          }}
          animate={{
            opacity: [0.1, 0.4, 0.1],
            scaleX: [0.7, 1, 0.7],
          }}
          transition={{
            duration: 5 + i * 0.5,
            repeat: Infinity,
            delay: i * 0.3,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Diagonal measurement lines (like architectural plans) */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`diag-${i}`}
          className="absolute w-px h-full bg-gradient-to-b from-transparent via-cyan-400/15 to-transparent"
          style={{
            left: `${30 + i * 20}%`,
            transform: 'rotate(75deg)',
            transformOrigin: 'top left',
          }}
          animate={{
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            delay: i * 0.8,
          }}
        />
      ))}

      <motion.div
        style={{ opacity }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative z-10"
      >
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 mb-6 px-6 py-3 bg-gradient-to-r from-blue-600/30 to-purple-600/30 backdrop-blur-xl rounded-full border border-blue-400/30 shadow-2xl shadow-blue-500/20"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles size={18} className="text-yellow-400" />
            </motion.div>
            <span className="text-white text-sm font-semibold tracking-wide">🇨🇩 {t('KINSHASA · RÉPUBLIQUE DÉMOCRATIQUE DU CONGO', 'KINSHASA · DEMOCRATIC REPUBLIC OF CONGO')}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-8 leading-[1.1]"
          >
            <span className="bg-gradient-to-br from-white via-blue-50 to-blue-100 bg-clip-text text-transparent">
              {t('Votre partenaire technique', 'Your technical partner')}
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
              {t("pour l'excellence", 'for excellence')}
            </span>
            <br />
            <span className="bg-gradient-to-br from-white via-blue-50 to-blue-100 bg-clip-text text-transparent">
              {t('en infrastructure', 'in infrastructure')}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-blue-100/90 mb-4 leading-relaxed font-light"
          >
            <span className="text-cyan-300 font-semibold">{t('Innovation', 'Innovation')}</span> · <span className="text-blue-200 font-semibold">{t('Expertise', 'Expertise')}</span> · <span className="text-purple-300 font-semibold">{t('Qualité', 'Quality')}</span> · <span className="text-cyan-300 font-semibold">{t('Performance', 'Performance')}</span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg text-blue-200/70 mb-10 max-w-2xl italic"
          >
            {t('Bâtissons ensemble les infrastructures qui transforment la RDC', "Let's build together the infrastructure that transforms the DRC")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 mb-16"
          >
            <button
              onClick={() => scrollToSection('services')}
              className="group relative bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white px-10 py-5 rounded-2xl font-semibold flex items-center justify-center gap-3 transition-all duration-300 shadow-xl shadow-blue-600/30 hover:shadow-2xl hover:shadow-blue-500/40 hover:-translate-y-0.5"
            >
              <span>{t('Découvrir nos services', 'Discover our services')}</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="group relative bg-white/5 hover:bg-white/10 backdrop-blur-md text-white px-10 py-5 rounded-2xl font-semibold border border-white/10 hover:border-white/20 transition-all duration-300"
            >
              {t('Nous contacter', 'Contact us')}
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
          >
            {[
              { icon: Building2, value: 15, suffix: "+", label: t("Experts qualifiés", "Qualified experts"), color: "from-blue-500 to-cyan-500" },
              { icon: Shield, value: 100, suffix: "%", label: t("Conformité HSE", "HSE compliance"), color: "from-emerald-500 to-teal-500" },
              { icon: Clock, staticValue: t("Lun–Ven", "Mon–Fri"), label: t("8h00 – 17h00", "8:00 – 17:00"), color: "from-purple-500 to-pink-500" },
              { icon: HardHat, value: 3, suffix: "+", label: t("Années d'expérience", "Years of experience"), color: "from-orange-500 to-amber-500" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -8 }}
                className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl rounded-3xl p-8 border border-white/20 hover:border-white/30 transition-all duration-500 overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
                <div className={`absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br ${stat.color} opacity-10 rounded-full blur-2xl group-hover:opacity-30 transition-opacity duration-500`}></div>
                <div className="relative">
                  <div className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center shadow-2xl mb-6 group-hover:scale-110 transition-transform duration-500`}>
                    <stat.icon className="text-white" size={30} />
                  </div>
                  <div>
                    <p className="text-3xl sm:text-4xl font-bold text-white mb-2">
                      {stat.staticValue ? stat.staticValue : <AnimatedCounter value={stat.value!} suffix={stat.suffix} />}
                    </p>
                    <p className="text-sm text-blue-200/90 font-medium">{stat.label}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs text-white/60 uppercase tracking-wider">Scroll</span>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-white/60 rounded-full"
            ></motion.div>
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white via-white/80 to-transparent z-10 pointer-events-none"></div>
    </section>
  );
}
