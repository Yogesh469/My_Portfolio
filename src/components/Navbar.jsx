import { useState, useEffect } from 'react'
import styles from './Navbar.module.css'

const links = [
  { href: '#skills',    label: 'Skills' },
  { href: '#projects',  label: 'Projects' },
  { href: '#fit',       label: 'About' },
  { href: '#contact',   label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`wrap ${styles.inner}`}>
        <a href="#" className={styles.logo}>
          <span className={styles.logoMark}>YB</span>
          <span className={styles.logoName}>Yogesh Bishwokarma</span>
        </a>

        <nav className={`${styles.nav} ${menuOpen ? styles.open : ''}`}>
          {links.map((l) => (
            <a key={l.href} href={l.href} className={styles.link}
               onClick={() => setMenuOpen(false)}>
              {l.label}
            </a>
          ))}
          <a href="mailto:your-email@example.com" className={`btn primary ${styles.ctaBtn}`}>
            Hire Me
          </a>
        </nav>

        <button
          className={`${styles.burger} ${menuOpen ? styles.burgerOpen : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>
    </header>
  )
}
