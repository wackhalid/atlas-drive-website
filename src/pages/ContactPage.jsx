import Contact from '../components/Contact.jsx'
import Seo from '../components/Seo.jsx'
import Breadcrumbs from '../components/Breadcrumbs.jsx'
import BookingForm from '../components/BookingForm.jsx'
export default function ContactPage() { return <><Seo title="Contact Atlas Drive | Marrakech Morocco" description="Contact Atlas Drive in Marrakech for private Morocco transfers and WhatsApp booking." path="/contact" /><Breadcrumbs items={[{ label:'Contact' }]} /><Contact lang="en" /><main className="max-w-5xl mx-auto px-5 md:px-8 py-16"><BookingForm /></main></> }
