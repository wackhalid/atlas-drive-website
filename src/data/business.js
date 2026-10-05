import { tripAdvisorUrl } from './reviews.js'

export const business = {
  name: 'Atlas Drive',
  tagline: 'Luxury Touristic Transport in Morocco',
  city: 'Marrakech',
  country: 'Morocco',
  siteUrl: 'https://atlasdrivemorocco.com',
  whatsapp: '212619404377',
  whatsappDisplay: '+212 619 404 377',
  phone: '+212676902097',
  phoneDisplay: '+212 676 902 097',
  email: 'atlasdrivecontact@gmail.com',
  address: "Jardin Anas, M'Hamid, Marrakech, Morocco",
  hours: '24/7',
  languages: ['English', 'French', 'Arabic', '[NEEDS CONFIRMATION] Spanish/German'],
  instagram: 'https://www.instagram.com/atlas_drive_',
  facebook: 'https://www.facebook.com/share/1JqXnJeN2m/?mibextid=wwXIfr',
  tripAdvisorUrl,
  gaId: 'G-JBZ64QJ82Q',
  metaPixelId: null,
}

export function confirmed(value) {
  return value !== null && value !== '[NEEDS CONFIRMATION]'
}
