import { Outlet } from 'react-router-dom'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import WhatsAppButton from '../components/WhatsAppButton.jsx'
import MobileStickyBar from '../components/MobileStickyBar.jsx'

export default function Layout() {
  return <div className="font-body pb-16 md:pb-0"><Header /><Outlet /><Footer /><WhatsAppButton /><MobileStickyBar /></div>
}
