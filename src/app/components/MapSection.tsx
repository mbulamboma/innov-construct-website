import { motion } from 'motion/react';
import { Navigation, ExternalLink } from 'lucide-react';
import { useT } from '../i18n';

export function MapSection() {
  const t = useT();
  const latitude = -4.3048752;
  const longitude = 15.3149823;
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;
  const embedUrl = `https://www.google.com/maps?q=${latitude},${longitude}&z=16&output=embed`;

  return (
    <section className="relative py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 mb-6 px-5 py-2.5 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-full border border-blue-100">
            <Navigation size={16} className="text-blue-600" />
            <span className="text-blue-700 font-semibold text-sm">{t('Notre localisation', 'Our location')}</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-br from-slate-900 via-blue-900 to-slate-700 bg-clip-text text-transparent mb-4">
            {t('Visitez-nous à Kinshasa', 'Visit us in Kinshasa')}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('Au cœur de Gombe, nous sommes à votre disposition pour discuter de vos projets', 'In the heart of Gombe, we are available to discuss your projects')}
          </p>
        </motion.div>

        {/* Embedded Google Map */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-200"
        >
          <iframe
            src={embedUrl}
            title="Carte de localisation INNOV CONSTRUCT"
            className="w-full h-[500px] lg:h-[600px] border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </motion.div>

        {/* Quick directions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 text-center"
        >
          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold transition-colors group"
          >
            <Navigation size={20} className="group-hover:translate-x-1 transition-transform" />
            {t("Obtenir l'itinéraire sur Google Maps", "Get directions on Google Maps")}
            <ExternalLink size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
