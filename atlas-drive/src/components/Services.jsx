import { t } from '../data/translations.js'
import ReservationCTA from './ReservationCTA.jsx'

const icons = [
  <svg key="1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7"><path d="M3 21l6-6M21 3l-6 6M9 15l3-8 8-3-3 8-8 3z" /></svg>,
  <svg key="2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7"><circle cx="12" cy="10" r="3" /><path d="M12 21s7-6.5 7-11a7 7 0 10-14 0c0 4.5 7 11 7 11z" /></svg>,
  <svg key="3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7"><rect x="3" y="9" width="18" height="9" rx="1.5" /><path d="M7 9V6a2 2 0 012-2h6a2 2 0 012 2v3M3 14h18" /></svg>,
  <svg key="4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7"><path d="M4 20c3-6 6-9 8-9s5 3 8 9M9 11c0-4 1.5-8 3-9 1.5 1 3 5 3 9" /></svg>,
]

export default function Services({ lang }) {
  const s = t.services[lang]

  return (
    <section id="services" className="bg-ink py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <div className="reveal text-center mb-16">
          <p className="font-mark text-gold text-[11px] tracking-widest2 uppercase mb-4">02 · Services</p>
          <h2 className="font-display text-4xl md:text-5xl text-sand mb-4">{s.title}</h2>
          <p className="font-body text-sand/60 max-w-lg mx-auto">{s.subtitle}</p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {s.items.map((item, i) => (
            <div
              key={item.title}
              className="reveal group border border-gold/20 rounded-lg p-8 hover:border-gold/50 transition-colors"
            >
              <div className="text-gold mb-5">{icons[i]}</div>
              <h3 className="font-display text-2xl text-sand mb-3">{item.title}</h3>
              <p className="font-body text-sm text-sand/60 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <ReservationCTA lang={lang} dark />
      </div>
    </section>
  )
}
