import { Link } from 'react-router-dom'
import { buildWhatsAppLink } from '../lib/whatsapp.js'
import { trackEvent } from '../lib/analytics.js'
export default function CtaBand() { return <section className="bg-ink text-sand py-16"><div className="max-w-5xl mx-auto px-5 md:px-8 text-center"><h2 className="font-display text-3xl md:text-4xl">Ready to book your private transfer?</h2><div className="flex justify-center gap-3 mt-7"><a href={buildWhatsAppLink({ route: '' })} target="_blank" rel="noreferrer" onClick={() => trackEvent('whatsapp_click',{location:'cta_band'})} className="px-6 py-3 bg-gold text-ink rounded-full font-semibold">WhatsApp us</a><Link to="/contact#book" className="px-6 py-3 border border-gold/60 text-gold rounded-full">Book your transfer</Link></div></div></section> }
