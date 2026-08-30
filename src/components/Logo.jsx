import logoImage from '../assets/logo.png'

export default function Logo({ className = 'w-16 h-16' }) {
  return (
    <img
      src={logoImage}
      className={className}
      alt="Atlas Drive — Touristic Transport"
    />
  )
}
