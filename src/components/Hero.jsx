import { t } from '../data/translations.js'
import Logo from './Logo.jsx'

const WHATSAPP = 'https://wa.me/212619404377'
const TRIPADVISOR = 'https://www.tripadvisor.com/AttractionProductReview-g293734-d34358133-Private_Morocco_Tours_and_Transfers_from_Marrakech-Marrakech_Marrakech_Safi.html'

const routeStops = ['Marrakech', 'High Atlas', 'Essaouira', 'Ouarzazate', 'Merzouga', 'Chefchaouen']

export default function Hero({ lang }) {
  const h = t.hero[lang]

  return (
    <section id="top" className="relative bg-ink text-sand overflow-hidden pt-32 pb-20 md:pt-44 md:pb-28">
      <div className="absolute inset-0 bg-grain pointer-events-none" />
      <div
        className="absolute inset-0 opacity-[0.08] pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 20%, #C6A15B 0, transparent 35%), radial-gradient(circle at 85% 60%, #C6A15B 0, transparent 40%)',
        }}
      />

      <div className="relative max-w-6xl mx-auto px-5 md:px-8">
        <div className="reveal flex flex-col items-center text-center">
          <Logo className="w-20 h-20 md:w-24 md:h-24 mb-8" />

          <p className="font-mark text-gold text-[11px] md:text-xs tracking-widest2 mb-5 uppercase">
            {h.eyebrow}
          </p>

          <h1 className="font-display text-4xl sm:text-5xl md:text-7xl leading-[1.05] max-w-3xl mb-6 text-sand">
            {h.title}
          </h1>

          <p className="font-body text-sand/70 text-base md:text-lg max-w-xl mb-9 leading-relaxed">
            {h.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 mb-8">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="px-8 py-4 bg-gold text-ink font-semibold tracking-wide rounded-full hover:bg-gold-light transition-colors w-full sm:w-auto text-center"
            >
              {h.cta1}
            </a>
            <a
              href="#services"
              className="px-8 py-4 border border-gold/50 text-gold font-medium tracking-wide rounded-full hover:bg-gold/10 transition-colors w-full sm:w-auto text-center"
            >
              {h.cta2}
            </a>
          </div>

          <a
            href={TRIPADVISOR}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sand/60 hover:text-gold text-xs tracking-wide transition-colors"
          >
            <span className="text-gold tracking-tighter">★★★★★</span>
            <span>{h.trust}</span>
          </a>
        </div>
      </div>

      {/* Signature: the route strip — a literal road connecting real destinations */}
      <div className="relative mt-20 md:mt-24">
        <div className="max-w-5xl mx-auto px-5 overflow-x-auto no-scrollbar">
          <div className="relative flex items-center justify-between min-w-[640px] py-4">
            <div className="absolute left-0 right-0 top-1/2 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
            {routeStops.map((stop, i) => (
              <div key={stop} className="relative flex flex-col items-center gap-3 z-10">
                <span className="waypoint" />
                <span className="font-mark text-gold/80 text-[10px] tracking-widest2 uppercase whitespace-nowrap">
                  {stop}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
