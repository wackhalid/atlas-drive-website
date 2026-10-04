import { t } from '../data/translations.js'
import ReservationCTA from './ReservationCTA.jsx'
import { trackWhatsAppClick } from '../data/analytics.js'

const WHATSAPP = 'https://wa.me/212619404377'

export default function MultiDay({ lang }) {
  const m = t.multiDay[lang]

  return (
    <section id="multiday" className="relative bg-ink py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <img
          src="/images/contact-bg-2.jpg"
          alt=""
          aria-hidden="true"
          className="section-bg"
        />
      </div>
      <div className="absolute inset-0 z-10 bg-black/60 pointer-events-none" />
      <div className="relative z-20 max-w-6xl mx-auto px-5 md:px-8">
        <div className="reveal text-center mb-16">
          <p className="font-mark text-gold text-[11px] tracking-widest2 uppercase mb-4">06 · Journeys</p>
          <h2 className="font-display text-4xl md:text-5xl text-sand mb-4">{m.title}</h2>
          <p className="font-body text-sand/60 max-w-xl mx-auto">{m.subtitle}</p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {m.tours.map((tour) => (
            <a
              key={tour.title}
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              onClick={trackWhatsAppClick}
              className="reveal group block bg-ink rounded-lg p-8 hover:-translate-y-1 transition-transform"
            >
              <div className="flex items-baseline justify-between mb-4">
                <h3 className="font-display text-2xl text-sand pr-4">{tour.title}</h3>
                <span className="font-mark text-gold text-xs tracking-widest2 shrink-0 border border-gold/40 rounded-full px-3 py-1">
                  {tour.days} {lang === 'en' ? 'DAYS' : lang === 'fr' ? 'JOURS' : lang === 'es' ? 'DÍAS' : 'TAGE'}
                </span>
              </div>
              <p className="font-body text-sm text-sand/60 leading-relaxed mb-5">{tour.desc}</p>
              <span className="font-body text-xs tracking-wider text-gold group-hover:underline">
                {m.cta} →
              </span>
            </a>
          ))}
        </div>

        <ReservationCTA lang={lang} dark />
      </div>
    </section>
  )
}
