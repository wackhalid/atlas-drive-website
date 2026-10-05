import { Link } from 'react-router-dom'
import { t } from '../data/translations.js'
import { buildWhatsAppLink } from '../lib/whatsapp.js'
import { trackEvent } from '../lib/analytics.js'

export default function ReservationCTA({ lang, dark = false }) {
  const r = t.reservation[lang]
  return <div className={`reveal mt-12 rounded-lg border ${dark ? 'border-gold/25 bg-ink' : 'border-gold/30 bg-parchment'} px-6 py-8 md:px-10 md:py-9 flex flex-col md:flex-row items-center justify-between gap-6`}><div className="text-center md:text-left"><h4 className={`font-display text-2xl mb-1.5 ${dark ? 'text-sand' : 'text-ink'}`}>{r.title}</h4><p className={`font-body text-sm max-w-md ${dark ? 'text-sand/60' : 'text-ink/60'}`}>{r.body}</p></div><div className="flex flex-col sm:flex-row gap-3 shrink-0 w-full sm:w-auto"><Link to="/contact#book" className="px-6 py-3 bg-gold text-ink text-sm font-semibold rounded-full text-center hover:bg-gold-light transition-colors">{r.cta1}</Link><a href={buildWhatsAppLink({ route: '' })} target="_blank" rel="noreferrer" onClick={() => trackEvent('whatsapp_click', { location: 'reservation_cta' })} className={`px-6 py-3 text-sm font-medium rounded-full text-center border transition-colors ${dark ? 'border-gold/50 text-gold hover:bg-gold/10' : 'border-ink/25 text-ink hover:bg-ink/5'}`}>{r.cta2}</a></div></div>
}
