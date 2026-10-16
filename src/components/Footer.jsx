import styles from './Footer.module.css'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className={styles.footer}>
      <div className={`wrap ${styles.inner}`}>
        <div className={styles.left}>
          <span className={styles.logo}>YB</span>
          <span className={styles.name}>Yogesh Bishwokarma</span>
        </div>
        <p className={styles.tagline}>
          React Developer with growing full-stack skills.
        </p>
        <p className={styles.copy}>© {year} · Built with React & Vite</p>
      </div>
    </footer>
  )
}
