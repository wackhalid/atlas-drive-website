import Layout from './layouts/Layout.jsx'
import Home from './pages/Home.jsx'
import Routes from './pages/Routes.jsx'
import Services from './pages/Services.jsx'
import RouteDetail from './pages/RouteDetail.jsx'
import ServiceDetail from './pages/ServiceDetail.jsx'
import AboutPage from './pages/AboutPage.jsx'
import ContactPage from './pages/ContactPage.jsx'
import NotFound from './pages/NotFound.jsx'
import { getPublishedRoutes } from './data/routes.js'
import { services } from './data/services.js'
import { LanguageProvider } from './context/LanguageContext.jsx'

function SiteLayout() { return <LanguageProvider><Layout /></LanguageProvider> }
export const routes = [{ path: '/', element: <SiteLayout />, children: [{ index: true, element: <Home /> }, { path: 'services', element: <Services /> }, { path: 'services/:slug', element: <ServiceDetail />, getStaticPaths: () => services.map((service) => `services/${service.slug}`) }, { path: 'routes', element: <Routes /> }, { path: 'routes/:slug', element: <RouteDetail />, getStaticPaths: () => getPublishedRoutes().map((route) => `routes/${route.slug}`) }, { path: 'about', element: <AboutPage /> }, { path: 'contact', element: <ContactPage /> }, { path: '*', element: <NotFound /> }] }]
export default routes
