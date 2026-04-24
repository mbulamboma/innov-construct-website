import { motion } from 'motion/react';

export function KinshasaSkyline() {
  return (
    <div className="absolute bottom-0 left-0 right-0 h-80 z-0 overflow-hidden">
      <svg
        className="w-full h-full"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="buildingGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{ stopColor: 'rgb(30,58,138)', stopOpacity: 0.5 }} />
            <stop offset="100%" style={{ stopColor: 'rgb(15,23,42)', stopOpacity: 0.9 }} />
          </linearGradient>
          <linearGradient id="bridgeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: 'rgb(59,130,246)', stopOpacity: 0.4 }} />
            <stop offset="50%" style={{ stopColor: 'rgb(147,51,234)', stopOpacity: 0.5 }} />
            <stop offset="100%" style={{ stopColor: 'rgb(59,130,246)', stopOpacity: 0.4 }} />
          </linearGradient>
        </defs>

        {/* Pont (Bridge) - iconic infrastructure */}
        <motion.path
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.6 }}
          transition={{ duration: 2, delay: 0.5 }}
          d="M200,240 Q400,200 600,240 Q800,200 1000,240"
          fill="none"
          stroke="url(#bridgeGradient)"
          strokeWidth="3"
        />
        <motion.path
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.4 }}
          transition={{ duration: 2, delay: 0.7 }}
          d="M200,250 Q400,210 600,250 Q800,210 1000,250"
          fill="none"
          stroke="url(#bridgeGradient)"
          strokeWidth="2"
        />

        {/* Kinshasa skyline buildings */}
        <motion.g
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Building 1 - Tall tower */}
          <rect x="100" y="120" width="60" height="200" fill="url(#buildingGradient)" opacity="0.7" />
          <rect x="110" y="130" width="10" height="10" fill="rgba(59,130,246,0.3)" />
          <rect x="130" y="130" width="10" height="10" fill="rgba(59,130,246,0.3)" />
          <rect x="110" y="160" width="10" height="10" fill="rgba(59,130,246,0.3)" />
          <rect x="130" y="160" width="10" height="10" fill="rgba(59,130,246,0.3)" />

          {/* Building 2 - Medium */}
          <rect x="180" y="180" width="70" height="140" fill="url(#buildingGradient)" opacity="0.6" />

          {/* Building 3 - High-rise */}
          <rect x="270" y="100" width="55" height="220" fill="url(#buildingGradient)" opacity="0.8" />
          <rect x="280" y="110" width="15" height="15" fill="rgba(59,130,246,0.4)" />
          <rect x="300" y="110" width="15" height="15" fill="rgba(59,130,246,0.4)" />

          {/* Building 4 - Modern structure */}
          <polygon points="350,200 350,320 450,320 450,150" fill="url(#buildingGradient)" opacity="0.7" />

          {/* Building 5 - Twin towers */}
          <rect x="480" y="140" width="50" height="180" fill="url(#buildingGradient)" opacity="0.75" />
          <rect x="540" y="130" width="50" height="190" fill="url(#buildingGradient)" opacity="0.75" />

          {/* Building 6 - Wide complex */}
          <rect x="610" y="190" width="100" height="130" fill="url(#buildingGradient)" opacity="0.65" />

          {/* Building 7 - Skyscraper */}
          <rect x="730" y="90" width="60" height="230" fill="url(#buildingGradient)" opacity="0.85" />
          <circle cx="760" cy="80" r="15" fill="rgba(59,130,246,0.5)" />

          {/* Building 8 - Modern tower */}
          <polygon points="820,160 820,320 900,320 900,140" fill="url(#buildingGradient)" opacity="0.7" />

          {/* Building 9 - Commercial */}
          <rect x="920" y="200" width="80" height="120" fill="url(#buildingGradient)" opacity="0.6" />

          {/* Building 10 - Residential high-rise */}
          <rect x="1020" y="150" width="65" height="170" fill="url(#buildingGradient)" opacity="0.75" />

          {/* Building 11 - Office tower */}
          <rect x="1110" y="170" width="70" height="150" fill="url(#buildingGradient)" opacity="0.7" />

          {/* Building 12 - Mixed use */}
          <rect x="1200" y="180" width="60" height="140" fill="url(#buildingGradient)" opacity="0.65" />

          {/* Building 13 - Final structure */}
          <rect x="1280" y="160" width="75" height="160" fill="url(#buildingGradient)" opacity="0.7" />
        </motion.g>

        {/* Animated lights in windows */}
        <motion.g
          animate={{ opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <rect x="285" y="150" width="8" height="8" fill="rgba(251,191,36,0.6)" />
          <rect x="300" y="170" width="8" height="8" fill="rgba(251,191,36,0.6)" />
          <rect x="745" y="120" width="8" height="8" fill="rgba(251,191,36,0.6)" />
          <rect x="1035" y="180" width="8" height="8" fill="rgba(251,191,36,0.6)" />
        </motion.g>

        {/* Ground/base */}
        <rect x="0" y="318" width="1440" height="2" fill="rgba(59,130,246,0.3)" />
      </svg>

      {/* Fog effect at the base */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent"></div>
    </div>
  );
}
