import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import pontLowaImage from '../../imports/Participation_aux_études_du_pont_Lowa-1.jpeg';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { useT } from '../i18n';

export function SplitImageSection() {
  const t = useT();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ['10%', '-10%']);
  const contentY = useTransform(scrollYProgress, [0, 1], ['-5%', '5%']);

  return (
    <section ref={ref} className="relative py-32 overflow-hidden bg-gradient-to-b from-white to-slate-50" style={{ position: 'relative' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image side with parallax */}
          <motion.div
            style={{ y: imageY }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <motion.div
                initial={{ scale: 1.2, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2 }}
              >
                <ImageWithFallback
                  src={pontLowaImage}
                  alt="Pont Lowa"
                  className="w-full h-[600px] object-cover"
                />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent"></div>

              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="absolute bottom-8 left-8 bg-white/95 backdrop-blur-md rounded-2xl p-6 shadow-2xl"
              >
                <p className="text-sm text-gray-600 mb-1">{t('Projet phare', 'Flagship project')}</p>
                <p className="text-2xl font-bold text-gray-900">{t('Pont Lowa', 'Lowa Bridge')}</p>
                <p className="text-sm text-blue-600 font-semibold mt-2">{t("Ouvrages d'art", 'Engineering structures')}</p>
              </motion.div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
          </motion.div>

          {/* Content side */}
          <motion.div
            style={{ y: contentY }}
          >
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 mb-6 px-5 py-2.5 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-full border border-blue-100">
                <span className="text-blue-700 font-semibold text-sm">{t('Excellence technique', 'Technical excellence')}</span>
              </div>

              <h2 className="text-5xl font-bold bg-gradient-to-br from-slate-900 via-blue-900 to-slate-700 bg-clip-text text-transparent mb-6 leading-tight">
                {t("Des réalisations qui façonnent l'avenir", 'Projects that shape the future')}
              </h2>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {t(
                  "Notre expertise en ingénierie civile nous permet de relever les défis les plus ambitieux en matière d'infrastructures.",
                  "Our civil engineering expertise allows us to tackle the most ambitious infrastructure challenges."
                )}
              </p>

              <div className="space-y-4 mb-10">
                {[
                  t('Études structurelles avancées', 'Advanced structural studies'),
                  t('Exécution des travaux de génie civil avec professionnalisme', 'Professional civil engineering works execution'),
                  t('Suivi de chantier rigoureux', 'Rigorous site monitoring'),
                  t('Respect des normes internationales', 'Compliance with international standards'),
                  t('Innovation et durabilité', 'Innovation and sustainability')
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-4"
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="text-white" size={20} />
                    </div>
                    <p className="text-gray-700 font-medium text-lg">{item}</p>
                  </motion.div>
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const element = document.getElementById('projets');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="group inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-2xl font-semibold shadow-xl shadow-blue-600/30 hover:shadow-2xl hover:shadow-blue-500/40 transition-all duration-300"
              >
                {t('Voir tous nos projets', 'View all our projects')}
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
