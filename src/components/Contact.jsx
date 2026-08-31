import { t } from '../data/translations.js'
import { trackWhatsAppClick } from '../data/analytics.js'

const WHATSAPP = 'https://wa.me/212619404377'
const IG = 'https://www.instagram.com/atlas_drive_'
const FB = 'https://www.facebook.com/share/1JqXnJeN2m/?mibextid=wwXIfr'

export default function Contact({ lang }) {
  const c = t.contact[lang]

  return (
    <section id="contact" className="bg-ink text-sand py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-5 md:px-8">
        <div className="reveal text-center mb-16">
          <p className="font-mark text-gold text-[11px] tracking-widest2 uppercase mb-4">09 · Contact</p>
          <h2 className="font-display text-4xl md:text-5xl mb-4">{c.title}</h2>
          <p className="font-body text-sand/60 max-w-md mx-auto">{c.subtitle}</p>
        </div>

        <div className="reveal grid sm:grid-cols-2 gap-8 mb-14 max-w-3xl mx-auto">
          <div>
            <p className="font-mark text-gold text-[11px] tracking-widest2 uppercase mb-2">{c.addressLabel}</p>
            <p className="font-body text-sand/75 text-sm mb-1">123 Avenue Mohammed V</p>
            <p className="font-body text-sand/75 text-sm mb-6">Marrakech 40000, Morocco</p>

            <p className="font-mark text-gold text-[11px] tracking-widest2 uppercase mb-2">Phone / WhatsApp</p>
            <a href={WHATSAPP} target="_blank" rel="noreferrer" onClick={trackWhatsAppClick} className="font-body text-sand/75 text-sm hover:text-gold">
              +212 619 404 377
            </a>
          </div>
          <div>
            <p className="font-mark text-gold text-[11px] tracking-widest2 uppercase mb-2">Email</p>
            <a href="mailto:kyourdrive@gmail.com" className="font-body text-sand/75 text-sm hover:text-gold block mb-6">
              kyourdrive@gmail.com
            </a>

            <p className="font-mark text-gold text-[11px] tracking-widest2 uppercase mb-2">{c.hoursLabel}</p>
            <p className="font-body text-sand/75 text-sm mb-1">{c.hours}</p>
            <p className="font-body text-sand/45 text-xs mt-1">{c.responseLabel}: {c.response}</p>
          </div>
        </div>

        <div className="reveal flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noreferrer"
            onClick={trackWhatsAppClick}
            className="px-8 py-4 bg-gold text-ink font-semibold rounded-full hover:bg-gold-light transition-colors"
          >
            {t.bookNow[lang]}
          </a>
          <div className="flex items-center gap-4">
            <a href={IG} target="_blank" rel="noreferrer" aria-label="Instagram" className="text-gold/70 hover:text-gold">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
              </svg>
            </a>
            <a href={FB} target="_blank" rel="noreferrer" aria-label="Facebook" className="text-gold/70 hover:text-gold">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
                <path d="M14 9h3V6h-3a4 4 0 00-4 4v2H7v3h3v6h3v-6h3l1-3h-4v-2a1 1 0 011-1z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
