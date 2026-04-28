import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useT } from '../i18n';
import d01 from '../../imports/WhatsApp Image 2026-04-22 at 6.10.52 PM.jpeg';
import d02 from '../../imports/WhatsApp Image 2026-04-22 at 6.10.53 PM (1).jpeg';
import d03 from '../../imports/WhatsApp Image 2026-04-22 at 6.10.53 PM (2).jpeg';
import d04 from '../../imports/WhatsApp Image 2026-04-22 at 6.10.53 PM.jpeg';
import d05 from '../../imports/WhatsApp Image 2026-04-22 at 6.10.54 PM (1).jpeg';
import d06 from '../../imports/WhatsApp Image 2026-04-22 at 6.10.54 PM (2).jpeg';
import d07 from '../../imports/WhatsApp Image 2026-04-22 at 6.10.54 PM.jpeg';
import d08 from '../../imports/WhatsApp Image 2026-04-22 at 6.10.55 PM (1).jpeg';
import d09 from '../../imports/WhatsApp Image 2026-04-22 at 6.10.55 PM.jpeg';
import d10 from '../../imports/WhatsApp Image 2026-04-22 at 6.16.04 PM.jpeg';

export function DalotProjectShowcase() {
  const t = useT();

  const images = [
    { src: d01, alt: t('Ferraillage et mise en place des armatures', 'Rebar assembly and reinforcement setup') },
    { src: d02, alt: t('Coffrage et vue intérieure du dalot', 'Formwork and interior culvert view') },
    { src: d03, alt: t('Exécution des murs de soutènement', 'Retaining walls execution') },
    { src: d04, alt: t('Vue d ensemble du chantier', 'Overall site view') },
    { src: d05, alt: t('Vue frontale du dalot en cours', 'Front view of culvert under construction') },
    { src: d07, alt: t('Détails des armatures avant béton', 'Reinforcement details before concrete casting') },
    { src: d06, alt: t('Ouvrage finalisé avec accès routier', 'Completed structure with road access') },
    { src: d08, alt: t('Ouvrage et remblaiement latéral', 'Structure and side backfilling') },
    { src: d09, alt: t('Ouvrage après coulage de béton', 'Structure after concrete casting') },
    { src: d10, alt: t('Détails des armatures', 'Reinforcement details') },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <p className="inline-block mb-4 px-4 py-2 rounded-full bg-blue-50 text-blue-700 font-semibold text-sm border border-blue-100">
            {t('Etude de cas', 'Case study')}
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 leading-tight mb-4">
            {t('Dalot 60 tonnes - Kinshasa / Terre Jaune', '60-ton Culvert - Kinshasa / Terre Jaune')}
          </h2>
          <p className="text-lg text-slate-600 max-w-4xl leading-relaxed">
            {t(
              "Conception, dimensionnement et suivi des travaux de construction d'un dalot 60 tonnes pour la Ville de Kinshasa.",
              'Design, structural sizing and site supervision for the construction of a 60-ton culvert for the City of Kinshasa.'
            )}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {images.map((image, index) => (
            <motion.figure
              key={image.src}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.04 }}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <ImageWithFallback
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <figcaption className="px-4 py-3 text-sm text-slate-600 leading-relaxed">
                {image.alt}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
