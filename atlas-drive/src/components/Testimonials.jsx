import { t } from '../data/translations.js'
import { reviews, tripAdvisorUrl } from '../data/reviews.js'

export default function Testimonials({ lang }) {
  const tx = t.testimonials[lang]

  return (
    <section id="reviews" className="bg-ink py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <div className="reveal text-center mb-14">
          <p className="font-mark text-gold text-[11px] tracking-widest2 uppercase mb-4">07 · Trust</p>
          <h2 className="font-display text-4xl md:text-5xl text-sand mb-4">{tx.title}</h2>
          <p className="font-body text-sand/60">{tx.subtitle}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {reviews.map((r) => (
            <div key={r.name + r.quote.slice(0, 10)} className="reveal border border-gold/20 rounded-lg p-6 flex flex-col">
              <span className="text-gold text-sm mb-3 tracking-tighter">★★★★★</span>
              <p className="font-body text-sm text-sand/75 leading-relaxed mb-5 flex-1">&ldquo;{r.quote}&rdquo;</p>
              <div className="border-t border-gold/15 pt-4">
                <p className="font-display text-base text-sand">{r.name}</p>
                <p className="font-body text-xs text-sand/45">
                  {r.location ? `${r.location} · ` : ''}{r.trip}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="reveal text-center">
          <a
            href={tripAdvisorUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-block px-8 py-4 border border-gold/50 text-gold font-medium rounded-full hover:bg-gold/10 transition-colors"
          >
            {tx.cta}
          </a>
        </div>
      </div>
    </section>
  )
}
