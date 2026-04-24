import { Menu, X } from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';
import { NavLink, Link, useNavigate } from 'react-router';
import logo from '../../imports/logo-2.png';
import { useT } from '../i18n';
import { LanguageToggle } from './LanguageToggle';

export function Header() {
  const t = useT();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const navItems = [
    { to: '/', label: t('Accueil', 'Home'), end: true },
    { to: '/apropos', label: t('À propos', 'About') },
    { to: '/services', label: t('Services', 'Services') },
    { to: '/projets', label: t('Projets', 'Projects') },
    { to: '/equipe', label: t('Équipe', 'Team') },
    { to: '/certificats', label: t('Certificats', 'Certificates') },
  ];

  const close = () => setIsMenuOpen(false);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-xl border-b border-gray-100 shadow-sm z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" onClick={close} className="flex items-center gap-3 group">
            <motion.div whileHover={{ scale: 1.04 }} className="flex items-center gap-3">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-400/20 rounded-2xl blur-lg group-hover:blur-xl transition-all" />
                <img
                  src={logo}
                  alt="INCO — INNOV CONSTRUCT SARL"
                  className="relative h-12 w-auto object-contain drop-shadow-sm"
                />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-2xl font-bold tracking-tight bg-gradient-to-br from-blue-900 via-blue-700 to-cyan-600 bg-clip-text text-transparent">
                  INCO
                  <span className="text-xs align-super ml-1 text-blue-500 font-semibold tracking-widest">SARL</span>
                </span>
                <span className="text-[10px] text-gray-500 font-semibold tracking-[0.22em] uppercase">
                  Innov Construct
                </span>
              </div>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                className={({ isActive }) =>
                  `relative px-4 py-2 font-medium transition-colors rounded-lg ${
                    isActive ? 'text-blue-700 bg-blue-50' : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/contact')}
              className="ml-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2.5 rounded-xl font-semibold hover:from-blue-500 hover:to-blue-600 transition-all shadow-lg shadow-blue-600/30 hover:shadow-xl hover:shadow-blue-500/40"
            >
              {t('Contact', 'Contact')}
            </motion.button>
            <div className="ml-3">
              <LanguageToggle />
            </div>
          </nav>

          {/* Mobile controls */}
          <div className="md:hidden flex items-center gap-3">
            <LanguageToggle compact />
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700" aria-label="Menu">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.end}
                  onClick={close}
                  className={({ isActive }) =>
                    `px-3 py-2 rounded-lg transition-colors ${
                      isActive ? 'text-blue-700 bg-blue-50 font-semibold' : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
              <Link
                to="/contact"
                onClick={close}
                className="mt-2 bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:bg-blue-700 transition-colors text-center font-semibold"
              >
                Contact
              </Link>
            </div>
          </nav>
        )}
      </div>
    </motion.header>
  );
}
