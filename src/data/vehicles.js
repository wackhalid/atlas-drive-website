export const vehicles = {
  suv: { name: 'SUV', passengers: '1–4', luggage: null, image: '/images/vehicles/suv.jpg' },
  van: { name: 'Van', passengers: '5–8', luggage: null, image: '/images/vehicles/van.jpg' },
  minibus: { name: 'Minibus', passengers: '9–17', luggage: null, image: '/images/vehicles/minibus.jpg' },
}

export function vehicleForPassengers(passengers) {
  const count = Number(passengers)
  if (count >= 9) return 'minibus'
  if (count >= 5) return 'van'
  return 'suv'
}
