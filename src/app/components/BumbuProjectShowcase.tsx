import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useT } from '../i18n';
import bumbuCoupe from '../../imports/conc-1.jpeg';
import bumbuFacades from '../../imports/conc-2.jpeg';

export function BumbuProjectShowcase() {
  const t = useT();

  const images = [
    { src: bumbuCoupe, alt: t('Coupe B-B – Immeuble R+2 à Bumbu', 'B-B section – R+2 Building in Bumbu') },
    { src: bumbuFacades, alt: t('Façades principales et latérales – Projet R+2', 'Main and side facades – R+2 project') },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white via-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <p className="inline-block mb-4 px-4 py-2 rounded-full bg-emerald-50 text-emerald-700 font-semibold text-sm border border-emerald-100">
            {t('Etude de cas', 'Case study')}
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 leading-tight mb-4">
            {t('Projet de conception d un immeuble R+2 - Bumbu', 'R+2 Building Design Project - Bumbu')}
          </h2>
          <p className="text-lg text-slate-600 max-w-4xl leading-relaxed">
            {t(
              "Conception architecturale et structurelle d'un immeuble R+2 dans la commune de Bumbu a Kinshasa.",
              'Architectural and structural design of an R+2 building in Bumbu district, Kinshasa.'
            )}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {images.map((image, index) => (
            <motion.figure
              key={image.src}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
            >
              <div className="aspect-[16/10] overflow-hidden bg-slate-100">
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
