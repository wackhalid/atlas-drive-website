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

const bookingLabels = {
  en: { from: 'From', to: 'To', date: 'Date', time: 'Time', passengers: 'Passengers', luggage: 'Luggage', vehicle: 'Vehicle', phone: 'Phone', name: 'Name', notes: 'Notes' },
  fr: { from: 'De', to: 'À', date: 'Date', time: 'Heure', passengers: 'Passagers', luggage: 'Bagages', vehicle: 'Véhicule', phone: 'Téléphone', name: 'Nom', notes: 'Notes' },
  es: { from: 'Desde', to: 'Hasta', date: 'Fecha', time: 'Hora', passengers: 'Pasajeros', luggage: 'Equipaje', vehicle: 'Vehículo', phone: 'Teléfono', name: 'Nombre', notes: 'Notas' },
  de: { from: 'Von', to: 'Nach', date: 'Datum', time: 'Uhrzeit', passengers: 'Passagiere', luggage: 'Gepäck', vehicle: 'Fahrzeug', phone: 'Telefon', name: 'Name', notes: 'Notizen' },
}

export function buildBookingWhatsAppLink({ locale = 'en', vehicle = '', name = '', pickup = '', destination = '', date = '', time = '', passengers = '', luggage = '', phone = '', notes = '' } = {}) {
  const labels = bookingLabels[locale] || bookingLabels.en
  const vehicleData = vehicles[vehicle]
  const lines = ['*🚗 New Booking – Atlas Drive*']
  const addLine = (emoji, label, value) => {
    if (value !== undefined && value !== null && String(value).trim() !== '') lines.push(`${emoji} ${label}: ${value}`)
  }
  addLine('📍', labels.from, pickup)
  addLine('🏁', labels.to, destination)
  addLine('📅', labels.date, date)
  addLine('⏰', labels.time, time)
  addLine('👥', labels.passengers, passengers)
  addLine('🧳', labels.luggage, luggage)
  addLine('🚙', labels.vehicle, vehicleData ? `${vehicleData.name} (${vehicleData.passengers})` : vehicle)
  addLine('📞', labels.phone, phone)
  addLine('👤', labels.name, name)
  addLine('📝', labels.notes, notes)
  return `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(lines.join('\\n'))}`
}
