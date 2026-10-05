export function trackEvent(name, params = {}) {
  if (typeof window === 'undefined') return
  if (typeof window.gtag === 'function') window.gtag('event', name, params)
  if (name === 'whatsapp_click' && typeof window.fbq === 'function') window.fbq('track', 'Contact', params)
  if (name === 'booking_form_submit' && typeof window.fbq === 'function') window.fbq('track', 'Lead', params)
  if (name === 'route_page_view' && typeof window.fbq === 'function') window.fbq('track', 'ViewContent', { content_name: params.slug })
}

export function trackWhatsAppClick() {
  trackEvent('whatsapp_click')
}
