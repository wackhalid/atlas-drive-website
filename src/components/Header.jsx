import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Logo from './Logo.jsx'
import Flag from './Flag.jsx'
import { languages, t } from '../data/translations.js'
import { useLanguage } from '../context/LanguageContext.jsx'
import { buildWhatsAppLink } from '../lib/whatsapp.js'
import { trackEvent } from '../lib/analytics.js'

const serviceLinks = [
  ['marrakech-airport-transfers', 'Airport Transfers'],
  ['private-transfers', 'Private Transfers'],
  ['private-day-trips', 'Private Day Trips'],
  ['chauffeur-service', 'Chauffeur Service'],
  ['multi-day-transportation', 'Multi-Day Transportation'],
]
const routeLinks = [['marrakech-to-essaouira','Marrakech to Essaouira'],['marrakech-to-agadir','Marrakech to Agadir'],['marrakech-to-casablanca','Marrakech to Casablanca'],['marrakech-to-imlil','Marrakech to Imlil'],['marrakech-to-merzouga','Marrakech to Merzouga']]

export default function Header() {
  const { lang, setLang } = useLanguage()
  const [open, setOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [routesOpen, setRoutesOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const nav = t.nav[lang]
  const whatsapp = buildWhatsAppLink({ route: '' })
  const goAnchor = (id) => { setOpen(false); if (location.pathname === '/') document.getElementById(id)?.scrollIntoView(); else navigate(`/#${id}`) }
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-ink/95 backdrop-blur border-b border-gold/20">
      <div className="max-w-6xl mx-auto px-5 md:px-8 flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-3 shrink-0"><Logo className="w-11 h-11" /><span className="font-mark text-gold text-sm tracking-widest2 hidden sm:block">ATLAS DRIVE</span></Link>
        <nav className="hidden lg:flex items-center gap-6">
          <Link to="/" className="text-sand/80 hover:text-gold text-sm">Home</Link>
          <div className="relative"><button onClick={() => setServicesOpen(!servicesOpen)} className="text-sand/80 hover:text-gold text-sm">Services ▾</button>{servicesOpen && <div className="absolute top-8 left-0 w-56 bg-ink border border-gold/20 p-3 space-y-2">{serviceLinks.map(([slug,label]) => <Link key={slug} to={`/services/${slug}`} className="block text-sand/75 hover:text-gold text-sm">{label}</Link>)}</div>}</div>
          <div className="relative"><button onClick={() => setRoutesOpen(!routesOpen)} className="text-sand/80 hover:text-gold text-sm">Routes ▾</button>{routesOpen && <div className="absolute top-8 left-0 w-56 bg-ink border border-gold/20 p-3 space-y-2">{routeLinks.map(([slug,label]) => <Link key={slug} to={`/routes/${slug}`} className="block text-sand/75 hover:text-gold text-sm">{label}</Link>)}</div>}</div>
          <button onClick={() => goAnchor('pricing')} className="text-sand/80 hover:text-gold text-sm">Prices</button>
          <button onClick={() => goAnchor('reviews')} className="text-sand/80 hover:text-gold text-sm">Reviews</button>
          <Link to="/about" className="text-sand/80 hover:text-gold text-sm">About</Link>
          <Link to="/contact" className="text-sand/80 hover:text-gold text-sm">Contact</Link>
        </nav>
        <div className="flex items-center gap-3"><div className="flex items-center border border-gold/30 rounded-full overflow-hidden">{languages.map((l) => <button key={l.code} onClick={() => setLang(l.code)} className={`px-1.5 sm:px-2.5 py-1.5 text-[10px] tracking-wider ${lang === l.code ? 'bg-gold text-ink' : 'text-sand/70 hover:text-gold'}`}><Flag code={l.code} /> {l.label}</button>)}</div><a href={whatsapp} target="_blank" rel="noreferrer" onClick={() => trackEvent('whatsapp_click', { location: 'header' })} className="hidden sm:inline-block px-5 py-2.5 bg-gold text-ink text-sm font-semibold rounded-full hover:bg-gold-light">{t.bookNow[lang]}</a><button className="lg:hidden text-gold p-2" aria-label="Menu" onClick={() => setOpen(!open)}>{open ? '×' : '☰'}</button></div>
      </div>
      {open && <div className="lg:hidden bg-ink border-t border-gold/20 px-5 py-4 flex flex-col gap-4"><Link to="/" onClick={() => setOpen(false)} className="text-sand/85 text-sm">Home</Link><Link to="/services" onClick={() => setOpen(false)} className="text-sand/85 text-sm">Services</Link><Link to="/routes" onClick={() => setOpen(false)} className="text-sand/85 text-sm">Routes</Link><button onClick={() => goAnchor('pricing')} className="text-left text-sand/85 text-sm">Prices</button><button onClick={() => goAnchor('reviews')} className="text-left text-sand/85 text-sm">Reviews</button><Link to="/about" onClick={() => setOpen(false)} className="text-sand/85 text-sm">About</Link><Link to="/contact" onClick={() => setOpen(false)} className="text-sand/85 text-sm">Contact</Link></div>}
    </header>
  )
}
