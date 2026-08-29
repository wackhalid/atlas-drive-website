import logoImage from '../assets/WhatsApp_Image_2026-02-11_at_22.53.16.jpeg'

export default function Logo({ className = 'w-16 h-16' }) {
  return (
    <img
      src={logoImage}
      className={className}
      alt="Atlas Drive — Touristic Transport"
    />
  )
}
