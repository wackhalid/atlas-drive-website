const flags = {
  en: (
    <svg viewBox="0 0 60 40" className="w-4 h-3 rounded-sm overflow-hidden block" aria-hidden="true">
      <rect width="60" height="40" fill="#012169" />
      <path d="M0 0L60 40M60 0L0 40" stroke="#fff" strokeWidth="8" />
      <path d="M0 0L60 40M60 0L0 40" stroke="#C8102E" strokeWidth="4" />
      <path d="M30 0V40M0 20H60" stroke="#fff" strokeWidth="10" />
      <path d="M30 0V40M0 20H60" stroke="#C8102E" strokeWidth="6" />
    </svg>
  ),
  fr: (
    <svg viewBox="0 0 60 40" className="w-4 h-3 block" aria-hidden="true">
      <rect width="20" height="40" x="0" fill="#0055A4" />
      <rect width="20" height="40" x="20" fill="#fff" />
      <rect width="20" height="40" x="40" fill="#EF4135" />
    </svg>
  ),
  es: (
    <svg viewBox="0 0 60 40" className="w-4 h-3 block" aria-hidden="true">
      <rect width="60" height="40" fill="#AA151B" />
      <rect width="60" height="20" y="10" fill="#F1BF00" />
    </svg>
  ),
  de: (
    <svg viewBox="0 0 60 40" className="w-4 h-3 block" aria-hidden="true">
      <rect width="60" height="13.3" fill="#000" />
      <rect width="60" height="13.3" y="13.3" fill="#DD0000" />
      <rect width="60" height="13.4" y="26.6" fill="#FFCE00" />
    </svg>
  ),
}

export default function Flag({ code }) {
  return flags[code] || null
}
