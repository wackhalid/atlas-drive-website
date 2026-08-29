import { t } from '../data/translations.js'

const icons = {
  0: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
      <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  ),
  1: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
      <path d="M12 2l2.4 6.6L21 11l-6.6 2.4L12 20l-2.4-6.6L3 11l6.6-2.4L12 2z" />
    </svg>
  ),
  2: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
      <path d="M3 11l9-7 9 7" />
      <path d="M5 10v9h5v-6h4v6h5v-9" />
    </svg>
  ),
}

export default function About({ lang }) {
  const a = t.about[lang]
  const w = t.whyChoose[lang]

  return (
    <section id="about" className="bg-parchment py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-5 md:px-8">
        <div className="reveal grid md:grid-cols-2 gap-14 items-start mb-24">
          <div>
            <p className="font-mark text-gold-dark text-[11px] tracking-widest2 uppercase mb-4">01 · Marrakech</p>
            <h2 className="font-display text-4xl md:text-5xl text-ink mb-6">{a.title}</h2>
            <p className="font-body text-ink/70 leading-relaxed">{a.body}</p>
          </div>
          <div className="border-l-2 border-gold/40 pl-8 md:mt-24">
            <h3 className="font-display text-2xl text-gold-dark mb-3">{a.missionTitle}</h3>
            <p className="font-body text-ink/70 leading-relaxed">{a.missionBody}</p>
          </div>
        </div>

        <h3 className="font-display text-3xl md:text-4xl text-ink text-center mb-14">{w.title}</h3>
        <div className="grid sm:grid-cols-3 gap-8">
          {w.items.map((item, i) => (
            <div key={item.title} className="reveal text-center px-4">
              <div className="w-14 h-14 mx-auto rounded-full border border-gold/40 flex items-center justify-center text-gold-dark mb-5">
                {icons[i]}
              </div>
              <h4 className="font-display text-xl text-ink mb-2">{item.title}</h4>
              <p className="font-body text-sm text-ink/60 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
