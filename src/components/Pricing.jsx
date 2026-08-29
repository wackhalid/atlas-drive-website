import { t } from '../data/translations.js'
import { directTrips, dayVehicles } from '../data/pricing.js'
import ReservationCTA from './ReservationCTA.jsx'

export default function Pricing({ lang }) {
  const p = t.pricing[lang]

  return (
    <section id="pricing" className="bg-ink py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-5 md:px-8">
        <div className="reveal text-center mb-16">
          <p className="font-mark text-gold text-[11px] tracking-widest2 uppercase mb-4">03 · Rates</p>
          <h2 className="font-display text-4xl md:text-5xl text-sand mb-4">{p.title}</h2>
          <p className="font-body text-sand/60 max-w-md mx-auto">{p.subtitle}</p>
        </div>

        {/* Direct trips */}
        <div className="reveal mb-16">
          <h3 className="font-display text-2xl text-gold mb-1.5">{p.directTitle}</h3>
          <p className="font-body text-sm text-sand/50 mb-6">{p.directSubtitle}</p>
          <div className="border border-gold/20 rounded-lg divide-y divide-gold/10 overflow-hidden">
            {directTrips.map((row) => (
              <div key={row.route} className="flex items-center justify-between px-6 py-4 hover:bg-gold/5 transition-colors">
                <span className="font-body text-sm text-sand/80">{row.route}</span>
                <span className="font-display text-lg text-gold shrink-0 pl-4">{row.price}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Day-rate vehicles */}
        <div className="reveal">
          <h3 className="font-display text-2xl text-gold mb-1.5">{p.dayTitle}</h3>
          <p className="font-body text-sm text-sand/50 mb-6">{p.daySubtitle}</p>
          <div className="grid sm:grid-cols-3 gap-6">
            {dayVehicles.map((v) => (
              <div key={v.name} className="border border-gold/20 rounded-lg p-7 text-center hover:border-gold/50 transition-colors">
                <h4 className="font-display text-2xl text-sand mb-2">{v.name}</h4>
                <p className="font-body text-xs text-sand/50 mb-5">
                  {p.upTo} {v.capacity} {p.passengers}
                </p>
                <p className="font-display text-3xl text-gold mb-1">{v.price}</p>
                <p className="font-body text-xs text-sand/40">{p.perDay}</p>
              </div>
            ))}
          </div>
        </div>

        <ReservationCTA lang={lang} dark />
      </div>
    </section>
  )
}
