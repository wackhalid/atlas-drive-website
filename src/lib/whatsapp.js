import { business } from '../data/business.js'
import { vehicles } from '../data/vehicles.js'

export function buildWhatsAppLink({ route = '', vehicle = '', name = '', pickup = '', destination = '', date = '', time = '', passengers = '', luggage = '', notes = '' } = {}) {
  const vehicleData = vehicles[vehicle]
  const lines = [
    'Hello Atlas Drive,',
    '',
    'I would like to book a private transfer.',
    '',
    `Route: ${route}`,
    `Vehicle: ${vehicleData ? `${vehicleData.name} (${vehicleData.passengers})` : vehicle}`,
    `Date: ${date}`,
    `Time: ${time}`,
    `Passengers: ${passengers}`,
    `Luggage: ${luggage}`,
    `Pickup location: ${pickup}`,
    `Name: ${name}`,
    notes ? `Notes: ${notes}` : '',
    '',
    'Please confirm availability and price.',
  ].filter((line) => line !== '').join('\n')
  return `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(lines)}`
}
