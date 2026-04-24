import { motion } from 'motion/react';

/**
 * Décor "chantier" discret : treillis bleu, plans quadrillés, marques d'architecte.
 * Très transparent — ornement, pas distraction.
 */
export function SiteOverlay({ variant = 'light' }: { variant?: 'light' | 'dark' }) {
  const stroke = variant === 'dark' ? 'rgba(147,197,253,0.10)' : 'rgba(30,64,175,0.08)';
  const strokeFaint = variant === 'dark' ? 'rgba(147,197,253,0.04)' : 'rgba(30,64,175,0.035)';

  return (
    <div
      className="absolute inset-0 pointer-events-none overflow-hidden z-[1]"
      style={{ mixBlendMode: variant === 'dark' ? 'screen' : 'multiply' }}
    >
      {/* Grille de plan */}
      <div
        className="absolute inset-0 opacity-[0.25]"
        style={{
          backgroundImage: `
            linear-gradient(${strokeFaint} 1px, transparent 1px),
            linear-gradient(90deg, ${strokeFaint} 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Treillis / croix d'armature dans les coins */}
      <svg className="absolute top-0 left-0 w-64 h-64 opacity-40" viewBox="0 0 200 200" fill="none">
        <path d="M0 0 L200 200 M0 50 L150 200 M50 0 L200 150 M0 100 L100 200 M100 0 L200 100" stroke={stroke} strokeWidth="0.6" />
        <path d="M0 200 L200 0 M0 150 L150 0 M50 200 L200 50 M0 100 L100 0 M100 200 L200 100" stroke={stroke} strokeWidth="0.6" />
      </svg>

      <svg className="absolute bottom-0 right-0 w-80 h-80 opacity-30" viewBox="0 0 200 200" fill="none">
        <path d="M0 0 L200 200 M0 50 L150 200 M50 0 L200 150" stroke={stroke} strokeWidth="0.5" />
        <path d="M0 200 L200 0 M0 150 L150 0 M50 200 L200 50" stroke={stroke} strokeWidth="0.5" />
        <circle cx="100" cy="100" r="70" stroke={stroke} strokeWidth="0.5" strokeDasharray="4 4" />
      </svg>

      {/* Côte / mesure d'architecte */}
      <svg className="absolute top-12 right-12 w-40 h-16 opacity-50" viewBox="0 0 200 60" fill="none">
        <line x1="5" y1="30" x2="195" y2="30" stroke={stroke} strokeWidth="0.8" />
        <line x1="5" y1="20" x2="5" y2="40" stroke={stroke} strokeWidth="0.8" />
        <line x1="195" y1="20" x2="195" y2="40" stroke={stroke} strokeWidth="0.8" />
        <line x1="100" y1="22" x2="100" y2="38" stroke={stroke} strokeWidth="0.6" />
        <text x="95" y="18" fill={stroke} fontSize="8">A</text>
      </svg>

      {/* Ligne de cadre subtile animée — pulsation de projecteur */}
      <motion.div
        animate={{ opacity: [0.08, 0.18, 0.08] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute inset-x-8 top-8 h-px"
        style={{ background: `linear-gradient(90deg, transparent, ${stroke}, transparent)` }}
      />
      <motion.div
        animate={{ opacity: [0.08, 0.18, 0.08] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
        className="absolute inset-x-8 bottom-8 h-px"
        style={{ background: `linear-gradient(90deg, transparent, ${stroke}, transparent)` }}
      />
    </div>
  );
}
