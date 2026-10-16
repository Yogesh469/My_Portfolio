import styles from './Contact.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope , faArrowRight} from "@fortawesome/free-solid-svg-icons";
import { faGithub ,faLinkedin } from "@fortawesome/free-brands-svg-icons";

const links = [
  {
    id: 'contact-email',
    icon: <FontAwesomeIcon icon={faEnvelope} /> ,
    label: 'Email me',
    sub: 'bishwokarma12karan@gmail.com',
    href: 'https://mail.google.com/mail/?view=cm&to=bishwokarma12karan@gmail.com',
    primary: true,
  },
  {
    id: 'contact-github',
    icon: <FontAwesomeIcon icon={faGithub} />,
    label: 'GitHub',
    sub: 'View my repositories',
    href: 'https://github.com/Yogesh469',
  },
  {
    id: 'contact-linkedin',
    icon: <FontAwesomeIcon icon={faLinkedin} />,
    label: 'LinkedIn',
    sub: 'Connect with me',
    href: 'https://www.linkedin.com/in/yogesh-bishwokarma-761009395?utm_source=share_via&utm_content=profile&utm_medium=member_android',
  },
]

export default function Contact() {
  return (
    <section className="section" id="contact">
      <div className="wrap">
        <div className={`${styles.inner} reveal`}>
          <div className={styles.text}>
            <div className="section-label">Contact</div>
            <h2 className={`section-title ${styles.heading}`}>
              Let's build something
              <span className={styles.gradient}> great together</span>
            </h2>
            <p className={styles.lead}>
              Hiring for a React or entry-level full-stack role? I'd love to hear about it.
              I respond to every message within 24 hours.
            </p>
          </div>

          <div className={styles.cards}>
            {links.map((l) => (
              <a
                key={l.id}
                id={l.id}
                href={l.href}
                target={l.href.startsWith('http') ? '_blank' : undefined}
                rel={l.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className={`${styles.contactCard} glass-card ${l.primary ? styles.primary : ''}`}
              >
                <span className={styles.contactIcon}>{l.icon}</span>
                <div className={styles.contactInfo}>
                  <strong>{l.label}</strong>
                  <span>{l.sub}</span>
                </div>
                <span className={styles.arrow}><FontAwesomeIcon icon={faArrowRight} /></span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
