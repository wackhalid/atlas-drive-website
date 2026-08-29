import { t } from '../data/translations.js'

const WHATSAPP = 'https://wa.me/212619404377'
const check = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 shrink-0 mt-0.5">
    <path d="M20 6L9 17l-5-5" />
  </svg>
)

export default function FastTrack({ lang }) {
  const f = t.fastTrack[lang]

  return (
    <section id="fasttrack" className="bg-parchment py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-5 md:px-8">
        <div className="reveal text-center mb-16">
          <p className="font-mark text-gold-dark text-[11px] tracking-widest2 uppercase mb-4">04 · VIP Airport</p>
          <h2 className="font-display text-4xl md:text-5xl text-ink mb-4">{f.title}</h2>
          <p className="font-body text-ink/60 max-w-md mx-auto">{f.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="reveal bg-ink text-sand rounded-lg p-8">
            <h3 className="font-display text-2xl text-gold mb-5">{f.arrivalsTitle}</h3>
            <ul className="space-y-3">
              {f.arrivals.map((item) => (
                <li key={item} className="flex gap-3 text-sand/80 text-sm font-body">
                  <span className="text-gold">{check}</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="reveal bg-ink text-sand rounded-lg p-8">
            <h3 className="font-display text-2xl text-gold mb-5">{f.departuresTitle}</h3>
            <ul className="space-y-3">
              {f.departures.map((item) => (
                <li key={item} className="flex gap-3 text-sand/80 text-sm font-body">
                  <span className="text-gold">{check}</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="reveal text-center mt-12">
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noreferrer"
            className="inline-block px-8 py-4 bg-gold text-ink font-semibold rounded-full hover:bg-gold-light transition-colors"
          >
            {f.cta}
          </a>
        </div>
      </div>
    </section>
  )
}
