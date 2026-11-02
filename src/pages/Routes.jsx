import { Link } from 'react-router-dom'
import { getPublishedRoutes, getStartingPrice } from '../data/routes.js'
import { useLanguage } from '../context/LanguageContext.jsx'
import { t } from '../data/translations.js'
import Seo from '../components/Seo.jsx'
import CtaBand from '../components/CtaBand.jsx'

export default function Routes() {
  const { lang } = useLanguage()
  const copy = t.routes[lang]

  return <>
    <Seo title={`${copy.title} | Atlas Drive`} description={copy.subtitle} path="/routes" />
    <main>
      <section className="relative min-h-[320px] flex items-end overflow-hidden bg-ink text-sand pt-28 pb-12 md:min-h-[390px] md:pb-16">
        <img src="/images/hero-1.jpg" alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-black/65" aria-hidden="true" />
        <div className="relative max-w-6xl mx-auto w-full px-5 md:px-8">
          <p className="font-mark text-gold text-xs tracking-widest2 uppercase mb-4">Atlas Drive</p>
          <h1 className="font-display text-4xl md:text-6xl leading-tight max-w-3xl">{copy.title}</h1>
          <p className="mt-5 max-w-2xl text-sand/75 leading-relaxed">{copy.subtitle}</p>
        </div>
      </section>
      <section className="routes-pattern bg-ink text-sand py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {getPublishedRoutes().map((route) => <article key={route.slug} className="flex flex-col rounded-lg border border-gold/45 bg-ink/90 p-6 transition-transform duration-300 hover:-translate-y-1 hover:border-gold">
              <h2 className="font-display text-2xl leading-tight text-sand">{route.origin} {copy.connector} {route.destination}</h2>
              <p className="mt-5 font-display text-xl text-gold">{copy.from} {getStartingPrice(route)} MAD</p>
              <Link to={`/routes/${route.slug}`} className="mt-6 inline-flex items-center justify-center rounded-full border border-gold/60 px-5 py-2.5 text-sm font-semibold text-gold transition-colors hover:bg-gold hover:text-ink">{copy.book}</Link>
            </article>)}
          </div>
        </div>
      </section>
    </main>
    <CtaBand />
  </>
}
