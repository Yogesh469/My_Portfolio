import styles from './WhatIBring.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComputer , faPlug ,faFile ,faUsersBetweenLines ,faBolt ,faMobileScreen   } from "@fortawesome/free-solid-svg-icons";




const items = [
  {
    icon: <FontAwesomeIcon icon={faComputer} />,
    title: 'Interfaces',
    desc: 'Responsive, reusable React components with clear routing and validated forms that delight users.',
    color: '#3dffa0',
  },
  {
    icon: <FontAwesomeIcon icon={faPlug} />,
    title: 'APIs',
    desc: 'Express routes, middleware, and HTTP methods, designed and tested thoroughly with Postman.',
    color: '#4f8aff',
  },
  {
    icon: <FontAwesomeIcon icon={faFile} />   ,
    title: 'Data',
    desc: 'CRUD operations and schema design with MongoDB and Mongoose — actively building this up.',
    color: '#f0c46a',
  },
  {
    icon: <FontAwesomeIcon icon={faUsersBetweenLines} />,
    title: 'Collaboration',
    desc: 'Version control with Git & GitHub, clear commit history, and a proactive communication style.',
    color: '#ff6b6b',
  },
  {
    icon: <FontAwesomeIcon icon={faBolt} />,
    title: 'Performance',
    desc: 'Optimizing bundles with Vite, lazy-loading components, and writing clean, maintainable code.',
    color: '#c084fc',
  },
  {
    icon: <FontAwesomeIcon icon={faMobileScreen} />,
    title: 'Responsive Design',
    desc: 'Every UI is built mobile-first — from 375 px phones to ultrawide monitors it just works.',
    color: '#34d399',
  },
]

export default function WhatIBring() {
  return (
    <section className="section" id="fit">
      <div className="wrap">
        <div className="section-label reveal">About Me</div>
        <h2 className="section-title reveal reveal-delay-1">What I bring to a team</h2>
        <p className="section-lead reveal reveal-delay-2">
          I understand how a web application works — from the screen all the way down to the database.
        </p>

        <div className={styles.grid}>
          {items.map((item, i) => (
            <div
              key={item.title}
              className={`${styles.card} glass-card reveal`}
              style={{ '--card-color': item.color, transitionDelay: `${i * 0.08}s` }}
            >
              <div className={styles.iconWrap} style={{ '--card-color': item.color }}>
                {item.icon}
              </div>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDesc}>{item.desc}</p>
            </div>
          ))}
        </div>

        <div className={`${styles.openTo} reveal`}>
          <span className={styles.openToLabel}>Open to</span>
          {['Frontend Developer', 'React Developer', 'Entry-level Full-Stack Developer'].map((role) => (
            <span key={role} className={styles.roleChip}>{role}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
