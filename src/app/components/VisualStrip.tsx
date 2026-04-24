import { motion } from 'motion/react';
import { Camera } from 'lucide-react';
import { useT } from '../i18n';
import vs1 from '../../imports/WhatsApp Image 2026-04-22 at 6.10.52 PM.jpeg';
import vs2 from '../../imports/WhatsApp Image 2026-04-22 at 6.10.53 PM (1).jpeg';
import vs3 from '../../imports/WhatsApp Image 2026-04-22 at 6.10.55 PM (1).jpeg';
import vs4 from '../../imports/WhatsApp Image 2026-04-22 at 6.10.54 PM.jpeg';
import vs5 from '../../imports/Participation_aux_études_du_pont_Lowa-1.jpeg';

const PHOTOS = [
  { src: vs1, alt_fr: 'Ferraillage Dalot 60T - Terre Jaune', alt_en: 'Rebar works – 60T Culvert, Terre Jaune' },
  { src: vs2, alt_fr: 'Coffrage et armatures Dalot 60T', alt_en: 'Formwork and rebar – 60T Culvert' },
  { src: vs3, alt_fr: 'Dalot 60T – Vue du chantier finalisé', alt_en: '60T Culvert – Completed site view' },
  { src: vs4, alt_fr: 'Armatures avant bétonnage – Dalot 60T', alt_en: 'Rebar before concrete pour – 60T Culvert' },
  { src: vs5, alt_fr: 'Études techniques Pont Lowa', alt_en: 'Technical studies – Lowa Bridge' },
];

export function VisualStrip() {
  const t = useT();

  return (
    <section className="py-14 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-700 font-semibold text-sm border border-blue-100">
          <Camera size={14} />
          <span>{t('Vos chantiers entre les mains des experts', 'Your sites in the hands of experts')}</span>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {PHOTOS.map((photo, i) => (
          <motion.div
            key={photo.src}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="group relative overflow-hidden rounded-2xl aspect-[3/4]"
          >
            <img
              src={photo.src}
              alt={t(photo.alt_fr, photo.alt_en)}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
