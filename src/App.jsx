import { useState } from 'react'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Services from './components/Services.jsx'
import Pricing from './components/Pricing.jsx'
import FastTrack from './components/FastTrack.jsx'
import Activities from './components/Activities.jsx'
import MultiDay from './components/MultiDay.jsx'
import Testimonials from './components/Testimonials.jsx'
import FAQ from './components/FAQ.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import WhatsAppButton from './components/WhatsAppButton.jsx'

export default function App() {
  const [lang, setLang] = useState('en')

  return (
    <div className="font-body">
      <Header lang={lang} setLang={setLang} />
      <Hero lang={lang} />
      <About lang={lang} />
      <Services lang={lang} />
      <Pricing lang={lang} />
      <FastTrack lang={lang} />
      <Activities lang={lang} />
      <MultiDay lang={lang} />
      <Testimonials lang={lang} />
      <FAQ lang={lang} />
      <Contact lang={lang} />
      <Footer lang={lang} />
      <WhatsAppButton />
    </div>
  )
}
