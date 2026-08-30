import { useState } from 'react'
import Logo from './Logo.jsx'
import Flag from './Flag.jsx'
import { languages, t } from '../data/translations.js'

const WHATSAPP = 'https://wa.me/212619404377'
const anchors = ['about', 'services', 'pricing', 'fasttrack', 'activities', 'multiday', 'reviews', 'faq', 'contact']

export default function Header({ lang, setLang }) {
  const [open, setOpen] = useState(false)
  const nav = t.nav[lang]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-ink/95 backdrop-blur border-b border-gold/20">
      <div className="max-w-6xl mx-auto px-5 md:px-8 flex items-center justify-between h-20">
        <a href="#top" className="flex items-center gap-3 shrink-0">
          <Logo className="w-11 h-11" />
          <span className="font-mark text-gold text-sm tracking-widest2 hidden sm:block">ATLAS DRIVE</span>
        </a>

        <nav className="hidden lg:flex items-center gap-7">
          {anchors.map((a, i) => (
            <a
              key={a}
              href={`#${a}`}
              className="text-sand/80 hover:text-gold text-sm tracking-wide font-body transition-colors"
            >
              {nav[i]}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center border border-gold/30 rounded-full overflow-hidden">
            {languages.map((l) => (
              <button
                key={l.code}
                onClick={() => setLang(l.code)}
                className={`flex items-center gap-1.5 px-3 py-1.5 text-xs tracking-wider font-body transition-colors ${
                  lang === l.code ? 'bg-gold text-ink' : 'text-sand/70 hover:text-gold'
                }`}
              >
                <Flag code={l.code} />
                {l.label}
              </button>
            ))}
          </div>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-block px-5 py-2.5 bg-gold text-ink text-sm font-semibold tracking-wide rounded-full hover:bg-gold-light transition-colors"
          >
            {t.bookNow[lang]}
          </a>
          <button
            className="lg:hidden text-gold p-2"
            aria-label="Menu"
            onClick={() => setOpen(!open)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-ink border-t border-gold/20 px-5 py-4 flex flex-col gap-4">
          {anchors.map((a, i) => (
            <a key={a} href={`#${a}`} onClick={() => setOpen(false)} className="text-sand/85 text-sm tracking-wide">
              {nav[i]}
            </a>
          ))}
          <div className="flex items-center gap-1.5 pt-2">
            {languages.map((l) => (
              <button
                key={l.code}
                onClick={() => setLang(l.code)}
                className={`flex items-center gap-1.5 px-3 py-1.5 text-xs rounded-full border border-gold/30 ${
                  lang === l.code ? 'bg-gold text-ink' : 'text-sand/70'
                }`}
              >
                <Flag code={l.code} />
                {l.label}
              </button>
            ))}
          </div>
          <a href={WHATSAPP} target="_blank" rel="noreferrer" className="mt-1 text-center px-5 py-3 bg-gold text-ink text-sm font-semibold rounded-full">
            {t.bookNow[lang]}
          </a>
        </div>
      )}
    </header>
  )
}
