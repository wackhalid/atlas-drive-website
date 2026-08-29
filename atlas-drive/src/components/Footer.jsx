import Logo from './Logo.jsx'
import { t } from '../data/translations.js'

export default function Footer({ lang }) {
  return (
    <footer className="bg-char text-sand/50 py-10 border-t border-gold/10">
      <div className="max-w-6xl mx-auto px-5 md:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <Logo className="w-9 h-9" />
          <div>
            <p className="font-mark text-gold text-xs tracking-widest2">ATLAS DRIVE</p>
            <p className="font-body text-[11px] text-sand/40 max-w-xs">{t.footer[lang]}</p>
          </div>
        </div>
        <p className="font-body text-[11px] text-sand/35">
          © {new Date().getFullYear()} Atlas Drive · Marrakech, Morocco
        </p>
      </div>
    </footer>
  )
}
