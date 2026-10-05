import { mkdir, writeFile } from 'node:fs/promises'
import { routes } from '../src/data/routes.js'
import { services } from '../src/data/services.js'

const pages = ['/', '/services', '/routes', '/about', '/contact', ...services.map((service) => `/services/${service.slug}`), ...routes.filter((route) => route.published).map((route) => `/routes/${route.slug}`)]
const lastmod = new Date().toISOString().slice(0, 10)
const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${pages.map((page) => `<url><loc>https://atlasdrivemorocco.com${page}</loc><lastmod>${lastmod}</lastmod></url>`).join('')}</urlset>\n`
await mkdir('dist', { recursive: true })
await writeFile('dist/sitemap.xml', xml)
