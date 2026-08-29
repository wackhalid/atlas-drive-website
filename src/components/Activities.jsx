import { t } from '../data/translations.js'
import ReservationCTA from './ReservationCTA.jsx'

const WHATSAPP = 'https://wa.me/212619404377'

export default function Activities({ lang }) {
  const a = t.activities[lang]

  return (
    <section id="activities" className="bg-ink py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <div className="reveal text-center mb-16">
          <p className="font-mark text-gold text-[11px] tracking-widest2 uppercase mb-4">05 · Experiences</p>
          <h2 className="font-display text-4xl md:text-5xl text-sand mb-4">{a.title}</h2>
          <p className="font-body text-sand/60 max-w-lg mx-auto">{a.subtitle}</p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 mb-12">
          {a.items.map((item, i) => (
            <div key={item.title} className="reveal flex gap-5 border border-gold/20 rounded-lg p-6 hover:border-gold/50 transition-colors">
              <span className="font-display text-3xl text-gold/40 shrink-0">{String(i + 1).padStart(2, '0')}</span>
              <div>
                <h3 className="font-display text-xl text-sand mb-2">{item.title}</h3>
                <p className="font-body text-sm text-sand/60 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="reveal text-center">
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noreferrer"
            className="inline-block px-8 py-4 border border-gold/50 text-gold font-medium rounded-full hover:bg-gold/10 transition-colors"
          >
            {a.cta}
          </a>
        </div>

        <ReservationCTA lang={lang} dark />
      </div>
    </section>
  )
}
