import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import WhatIBring from './components/WhatIBring'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { useEffect } from 'react'

function App() {
 
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    )
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <WhatIBring />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
