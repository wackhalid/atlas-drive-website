import { useState } from 'react'
import { t } from '../data/translations.js'

export default function FAQ({ lang }) {
  const f = t.faq[lang]
  const [openIdx, setOpenIdx] = useState(0)

  return (
    <section id="faq" className="bg-parchment py-24 md:py-32">
      <div className="max-w-3xl mx-auto px-5 md:px-8">
        <div className="reveal text-center mb-14">
          <p className="font-mark text-gold-dark text-[11px] tracking-widest2 uppercase mb-4">08 · Questions</p>
          <h2 className="font-display text-4xl md:text-5xl text-ink">{f.title}</h2>
        </div>

        <div className="space-y-3">
          {f.items.map((item, i) => {
            const isOpen = openIdx === i
            return (
              <div key={item.q} className="reveal border border-ink/15 rounded-lg overflow-hidden bg-ink/[0.02]">
                <button
                  onClick={() => setOpenIdx(isOpen ? -1 : i)}
                  className="w-full flex items-center justify-between text-left px-6 py-5"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-lg text-ink pr-4">{item.q}</span>
                  <span className={`shrink-0 text-gold-dark text-xl transition-transform ${isOpen ? 'rotate-45' : ''}`}>
                    +
                  </span>
                </button>
                {isOpen && (
                  <div className="px-6 pb-5">
                    <p className="font-body text-sm text-ink/65 leading-relaxed">{item.a}</p>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
