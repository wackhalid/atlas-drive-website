import { included } from '../data/included.js'
export default function IncludedList({ keys }) { return <ul className="grid sm:grid-cols-2 gap-3">{included.filter((item) => keys.includes(item.key) && item.confirmed === true).map((item) => <li key={item.key} className="flex gap-3 items-start text-sm text-ink/70"><span className="text-gold-dark">✓</span>{item.label}</li>)}</ul> }
