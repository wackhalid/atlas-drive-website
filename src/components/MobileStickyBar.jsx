import { Link, useLocation } from 'react-router-dom'
import { buildWhatsAppLink } from '../lib/whatsapp.js'
import { trackEvent } from '../lib/analytics.js'

export default function MobileStickyBar() {
  const location = useLocation()
  const bookHref = location.pathname === '/' ? '#book' : '/contact#book'
  const whatsapp = buildWhatsAppLink({ route: '' })
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden grid grid-cols-2 gap-2 bg-ink p-2 border-t border-gold/20">
      <a href={whatsapp} target="_blank" rel="noreferrer" onClick={() => trackEvent('whatsapp_click', { location: 'mobile_sticky' })} className="rounded-full bg-gold py-3 text-center text-xs font-semibold tracking-wide text-ink">WHATSAPP</a>
      <Link to={bookHref} className="rounded-full border border-gold/60 py-3 text-center text-xs font-semibold tracking-wide text-sand">BOOK NOW</Link>
    </div>
  )
}
