export default function Logo({ className = 'w-16 h-16', variant = 'full' }) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      role="img"
      aria-label="Atlas Drive — Touristic Transport"
    >
      <defs>
        <path
          id="topArc"
          d="M 30 100 A 70 70 0 0 1 170 100"
          fill="none"
        />
        <path
          id="bottomArc"
          d="M 40 145 A 62 62 0 0 0 160 145"
          fill="none"
        />
      </defs>

      {variant === 'full' && <circle cx="100" cy="100" r="96" fill="#0E0D0B" />}
      <circle cx="100" cy="100" r="90" fill="none" stroke="#C6A15B" strokeWidth="2.5" />
      <circle cx="100" cy="100" r="84" fill="none" stroke="#C6A15B" strokeWidth="0.75" />

      <text fill="#C6A15B" fontSize="17" fontFamily="'Cinzel', serif" fontWeight="600" letterSpacing="2.5">
        <textPath href="#topArc" startOffset="50%" textAnchor="middle">
          ATLAS DRIVE
        </textPath>
      </text>

      <text fill="#C6A15B" fontSize="11.5" fontFamily="'Cinzel', serif" fontWeight="500" letterSpacing="3">
        <textPath href="#bottomArc" startOffset="50%" textAnchor="middle">
          TOURISTIC TRANSPORT
        </textPath>
      </text>

      {/* Mountains */}
      <g stroke="#C6A15B" strokeWidth="2" strokeLinejoin="round" fill="none">
        <path d="M55 100 L82 68 L96 84 L112 60 L145 100" />
      </g>

      {/* Car */}
      <g stroke="#C6A15B" strokeWidth="2.2" strokeLinejoin="round" strokeLinecap="round" fill="none">
        <path d="M52 122 Q58 104 78 100 L118 100 Q136 100 146 116 L150 122" />
        <path d="M84 100 L92 86 Q96 82 104 82 L114 82 Q122 82 126 88 L134 100" />
        <path d="M45 128 Q45 120 52 120 L150 120 Q157 120 157 128 L157 132 L45 132 Z" fill="#0E0D0B" fillOpacity="0" />
        <line x1="45" y1="128" x2="157" y2="128" />
        <circle cx="70" cy="132" r="9" fill="#0E0D0B" />
        <circle cx="132" cy="132" r="9" fill="#0E0D0B" />
        <circle cx="70" cy="132" r="9" />
        <circle cx="132" cy="132" r="9" />
        <circle cx="70" cy="132" r="2.5" fill="#C6A15B" stroke="none" />
        <circle cx="132" cy="132" r="2.5" fill="#C6A15B" stroke="none" />
      </g>
    </svg>
  )
}
