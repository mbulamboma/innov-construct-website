import { Mail, Phone, MapPin, ArrowUp } from 'lucide-react';
import { motion } from 'motion/react';
import { useMemo } from 'react';
import { Link } from 'react-router';
import logo from '../../imports/logo-1.png';
import { useT } from '../i18n';

export function Footer() {
  const t = useT();
  const particles = useMemo(
    () =>
      Array.from({ length: 30 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        size: Math.random() * 2.5 + 1,
        duration: Math.random() * 12 + 10,
        delay: Math.random() * 10,
        drift: (Math.random() - 0.5) * 80,
        hue: Math.random() > 0.5 ? 'bg-blue-300/40' : 'bg-cyan-200/30',
      })),
    []
  );

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navItems = [
    { to: '/', label: t('Accueil', 'Home') },
    { to: '/apropos', label: t('À propos', 'About') },
    { to: '/services', label: t('Services', 'Services') },
    { to: '/projets', label: t('Projets', 'Projects') },
    { to: '/equipe', label: t('Équipe', 'Team') },
    { to: '/contact', label: t('Contact', 'Contact') },
  ];

  const servicesList = [
    t('Assistance terrain', 'Field assistance'),
    t('Suivi et contrôle', 'Monitoring & control'),
    t('Études techniques', 'Technical studies'),
    t('Calcul de structures', 'Structural calculations'),
    t('Études routières', 'Road studies'),
    t('Exécution des travaux de génie civil', 'Civil engineering works execution'),
  ];

  return (
    <footer className="relative bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className={`absolute rounded-full ${p.hue}`}
            style={{
              left: `${p.left}%`,
              width: p.size,
              height: p.size,
              bottom: -10,
              boxShadow: '0 0 4px rgba(147, 197, 253, 0.4)',
            }}
            animate={{
              y: [0, -600],
              x: [0, p.drift],
              opacity: [0, 0.8, 0.8, 0],
            }}
            transition={{
              duration: p.duration,
              delay: p.delay,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-5">
              <div className="inline-flex items-center justify-center p-3 bg-white rounded-2xl shadow-xl shadow-blue-900/30">
                <img src={logo} alt="INCO — INNOV CONSTRUCT SARL" className="h-20 w-auto object-contain" />
              </div>
            </div>
            <p className="text-blue-200/80 text-sm leading-relaxed">
              {t(
                "Votre partenaire technique d'excellence pour les projets d'infrastructures en RDC",
                "Your technical partner of excellence for infrastructure projects in the DRC"
              )}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="font-bold mb-5 text-white">Navigation</h4>
            <ul className="space-y-3 text-sm">
              {navItems.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="text-blue-200/80 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="font-bold mb-5 text-white">Services</h4>
            <ul className="space-y-3 text-sm text-blue-200/80">
              {servicesList.map((s) => <li key={s}>{s}</li>)}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="font-bold mb-5 text-white">Contact</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3 text-blue-200/80 hover:text-white transition-colors group">
                <MapPin className="flex-shrink-0 mt-0.5 text-blue-400 group-hover:text-white transition-colors" size={16} />
                <span className="leading-relaxed">5390 Avenue Tabu Ley, Gombe, Kinshasa</span>
              </li>
              <li className="flex items-center gap-3 text-blue-200/80 hover:text-white transition-colors group">
                <Phone className="flex-shrink-0 text-blue-400 group-hover:text-white transition-colors" size={16} />
                <span>+243 828 449 460</span>
              </li>
              <li className="flex items-center gap-3 group">
                <Mail className="flex-shrink-0 text-blue-400 group-hover:text-white transition-colors" size={16} />
                <a href="mailto:contact@innovconst.com" className="text-blue-200/80 hover:text-white transition-colors">
                  contact@innovconst.com
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        <div className="border-t border-blue-900/30 pt-10 mt-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm">
            <div className="text-center md:text-left">
              <p className="text-blue-200/80 mb-2">&copy; 2026 INNOV CONSTRUCT SARL. {t('Tous droits réservés.', 'All rights reserved.')}</p>
              <p className="text-xs text-blue-300/60">RCCM: CD/KNG/RCCM/25-B-02557 | ID NAT: 01-F4200-N78104Z | {t('N° Impôt', 'Tax ID')}: A2548853E</p>
            </div>
            <div className="flex items-center gap-6">
              <button className="text-blue-200/80 hover:text-white transition-colors">{t('Mentions légales', 'Legal notice')}</button>
              <button className="text-blue-200/80 hover:text-white transition-colors">{t('Confidentialité', 'Privacy')}</button>
              <motion.button
                whileHover={{ scale: 1.1, rotate: 360 }}
                whileTap={{ scale: 0.9 }}
                onClick={scrollToTop}
                className="w-10 h-10 bg-blue-600 hover:bg-blue-500 rounded-xl flex items-center justify-center shadow-lg shadow-blue-600/30 transition-colors"
              >
                <ArrowUp size={20} />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
