import { motion } from 'motion/react';
import { useLang } from '../i18n';

export function LanguageToggle({ compact = false }: { compact?: boolean }) {
  const { lang, setLang } = useLang();

  return (
    <div
      className={`relative inline-flex items-center bg-gray-100 rounded-full p-1 ${compact ? 'text-xs' : 'text-sm'}`}
      role="group"
      aria-label="Langue"
    >
      {(['fr', 'en'] as const).map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => setLang(l)}
          className={`relative z-10 px-3 py-1 font-semibold uppercase tracking-wider transition-colors ${
            lang === l ? 'text-white' : 'text-gray-600 hover:text-blue-700'
          }`}
          aria-pressed={lang === l}
        >
          {lang === l && (
            <motion.span
              layoutId="lang-pill"
              className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full shadow-md shadow-blue-600/30"
              transition={{ type: 'spring', stiffness: 400, damping: 30 }}
            />
          )}
          <span className="relative">{l}</span>
        </button>
      ))}
    </div>
  );
}
