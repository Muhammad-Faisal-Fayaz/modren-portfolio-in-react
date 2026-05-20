import { Helmet } from 'react-helmet-async'
import { ParticleBackground } from './components/effects/ParticleBackground'
import { Footer } from './components/layout/Footer'
import { LoadingScreen } from './components/layout/LoadingScreen'
import { Navbar } from './components/layout/Navbar'
import { ScrollToTop } from './components/layout/ScrollToTop'
import { About } from './components/sections/About'
import { Certificates } from './components/sections/Certificates'
import { Contact } from './components/sections/Contact'
import { Hero } from './components/sections/Hero'
import { Projects } from './components/sections/Projects'
import { Skills } from './components/sections/Skills'
import { SITE } from './data/site'

export default function App() {
  return (
    <>
      <Helmet>
        <title>{SITE.name} | Frontend &amp; PHP Developer</title>
        <meta
          name="description"
          content="Portfolio of Muhammad Faisal Fayaz — frontend developer specializing in React, Tailwind CSS, and PHP-backed websites."
        />
        <meta property="og:title" content={`${SITE.name} | Frontend & PHP Developer`} />
        <meta
          property="og:description"
          content="Responsive websites, modern UI, and PHP backend experience. View projects, certificates, and contact information."
        />
        <meta property="og:type" content="website" />
      </Helmet>

      <LoadingScreen />

      <div className="relative min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-50">
        <div className="pointer-events-none fixed inset-0 -z-10 mesh-bg opacity-90 dark:opacity-70" />
        <ParticleBackground />

        <Navbar />

        <main className="relative z-10">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Certificates />
          <Contact />
        </main>

        <Footer />
        <ScrollToTop />
      </div>
    </>
  )
}
