import { Target, Lightbulb, Shield, Award, TrendingUp } from 'lucide-react';
import { motion } from 'motion/react';
import { useT } from '../i18n';

export function About() {
  const t = useT();
  const values = [
    {
      icon: Target,
      title: t("Rigueur technique", "Technical rigor"),
      description: t("Des méthodes éprouvées et une expertise pointue pour chaque projet", "Proven methods and sharp expertise for every project")
    },
    {
      icon: Lightbulb,
      title: t("Approche orientée solutions", "Solution-oriented approach"),
      description: t("Innovation et créativité pour résoudre vos défis d'infrastructure", "Innovation and creativity to solve your infrastructure challenges")
    },
    {
      icon: Shield,
      title: t("HSE prioritaire", "HSE priority"),
      description: t("Hygiène, Sécurité et Environnement au cœur de nos interventions", "Health, Safety and Environment at the heart of our work")
    },
    {
      icon: Award,
      title: t("Qualité des livrables", "Quality deliverables"),
      description: t("Excellence et fiabilité dans chaque document et chaque réalisation", "Excellence and reliability in every document and every achievement")
    }
  ];

  return (
    <section id="apropos" className="py-32 bg-white relative overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-white to-purple-50/30"></div>
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `radial-gradient(circle at 2px 2px, rgba(0,0,0,0.15) 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start md:items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-full border border-blue-100">
              <TrendingUp size={16} className="text-blue-600" />
              <span className="text-blue-700 font-semibold text-sm">{t('À propos de nous', 'About us')}</span>
            </div>

            <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-br from-slate-900 via-blue-900 to-slate-700 bg-clip-text text-transparent mb-6 md:mb-8 leading-tight break-words">
              INNOV CONSTRUCT
            </h2>

            <p className="text-base md:text-lg text-gray-600 mb-6 leading-relaxed">
              {t(
                "INNOV CONSTRUCT (INCO) est une société d'ingénierie et de construction basée à Kinshasa, en République Démocratique du Congo.",
                "INNOV CONSTRUCT (INCO) is an engineering and construction company based in Kinshasa, Democratic Republic of Congo."
              )}
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-gradient-to-br from-slate-50 to-slate-100/50 rounded-2xl p-5 border border-slate-200/50">
                <p className="text-sm text-gray-500 mb-1">{t('Statut juridique', 'Legal status')}</p>
                <p className="text-lg font-bold text-gray-900">SARL</p>
              </div>
              <div className="bg-gradient-to-br from-slate-50 to-slate-100/50 rounded-2xl p-5 border border-slate-200/50">
                <p className="text-sm text-gray-500 mb-1">{t('Localisation', 'Location')}</p>
                <p className="text-lg font-bold text-gray-900">Kinshasa (Gombe)</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 mt-4">
              {[
                { src: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=500&q=80', alt: t('Ingénieurs sur le terrain', 'Engineers on site') },
                { src: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=500&q=80', alt: t('Chantier de construction', 'Construction site') },
                { src: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=500&q=80', alt: t('Infrastructure de pont', 'Bridge infrastructure') },
                { src: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=500&q=80', alt: t('Inspection de chantier', 'Site inspection') },
              ].map((photo, i) => (
                <motion.div
                  key={photo.src}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="group overflow-hidden rounded-2xl aspect-[4/3]"
                >
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-10">{t('Nos Valeurs', 'Our Values')}</h3>
            <div className="grid gap-5">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ x: 8 }}
                  className="group flex gap-5 p-7 bg-white rounded-2xl border border-gray-100 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-100/50 transition-all duration-300"
                >
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-600/30 group-hover:shadow-xl group-hover:shadow-blue-600/40 transition-shadow duration-300">
                      <value.icon className="text-white" size={26} />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">{value.title}</h4>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
