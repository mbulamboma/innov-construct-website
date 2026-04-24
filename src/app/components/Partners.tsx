import { motion } from 'motion/react';
import { Handshake } from 'lucide-react';
import { useT } from '../i18n';
import { ImageWithFallback } from './figma/ImageWithFallback';
import visionGreenLogo from '../../imports/image-16.png';
import kibaliLogo from '../../imports/image-17.png';

export function Partners() {
  const t = useT();
  const partners = [
    {
      name: 'Vision Green Engineering',
      description: t("Systèmes solaires fiables, plomberie et ingénierie électrique au Congo", "Reliable solar systems, plumbing and electrical engineering in Congo"),
      logo: visionGreenLogo,
    },
    {
      name: 'Kibali Gold Mine',
      description: t("Société minière d'or en République Démocratique du Congo", "Gold mining company in the Democratic Republic of Congo"),
      logo: kibaliLogo,
    },
  ];

  return (
    <section id="partenaires" className="relative py-24 bg-gradient-to-b from-white via-slate-50 to-white overflow-hidden">
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 mb-6 px-5 py-2.5 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-full border border-blue-100">
            <Handshake size={16} className="text-blue-600" />
            <span className="text-blue-700 font-semibold text-sm">{t('Nos Partenaires', 'Our Partners')}</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-br from-slate-900 via-blue-900 to-slate-700 bg-clip-text text-transparent mb-4 leading-tight">
            {t('Ils nous font confiance', 'They trust us')}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t(
              "Nous collaborons avec des acteurs de référence pour livrer des projets à la hauteur de leurs ambitions.",
              "We work with leading partners to deliver projects that match their ambitions."
            )}
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
          {partners.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="group relative bg-white rounded-3xl p-8 border border-gray-100 hover:border-blue-200 shadow-sm hover:shadow-2xl hover:shadow-blue-100/50 transition-all duration-500 overflow-hidden"
            >
              <div className="absolute -top-12 -right-12 w-40 h-40 bg-blue-500/5 rounded-full blur-2xl group-hover:bg-blue-500/10 transition-all" />
              <div className="relative h-20 mb-6 flex items-center justify-start">
                <ImageWithFallback
                  src={p.logo}
                  alt={p.name}
                  className="h-full w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="relative text-xl font-bold text-gray-900 mb-2">{p.name}</h3>
              <p className="relative text-gray-600 leading-relaxed">{p.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
