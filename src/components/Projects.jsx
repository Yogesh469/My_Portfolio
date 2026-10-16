import styles from './Projects.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase ,faHourglassHalf ,faThumbtack } from "@fortawesome/free-solid-svg-icons";

const completed = [
  'Responsive React.js interface',
  'Reusable components and routing',
  'Job and company management screens',
  'Create, Read, Update & Delete in the UI',
  'Form validation and error messages',
  'Admin dashboard layout',
]

const inProgress = [
  'REST API with Node.js and Express.js',
  'MongoDB database with Mongoose models',
  'Frontend connected to the live API',
  'CRUD operations saved to the database',
  'Server-side validation and error handling',
]

const techStack = ['React.js', 'React Router', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB']

export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="wrap">
        <div className="section-label reveal">Projects</div>
        <h2 className="section-title reveal reveal-delay-1">
          Featured Project
        </h2>
        <p className="section-lead reveal reveal-delay-2">
          A job and company management app. Here is exactly what is finished and what I'm still building.
        </p>

        <div className={`${styles.card} glass-card reveal`}>
          
          <div className={styles.cardHeader}>
            <div className={styles.titleRow}>
              <div className={styles.iconWrap}>
                <span><FontAwesomeIcon icon={faBriefcase} /></span>
              </div>
              <div>
                <h3 className={styles.projTitle}>Job Portal</h3>
                <p className={styles.projSub}>Full-stack web application</p>
              </div>
            </div>
            <div className={styles.badges}>
              {techStack.map((t) => (
                <span key={t} className={styles.techBadge}>{t}</span>
              ))}
            </div>
          </div>

          
          <div className={styles.mockBrowser} aria-hidden="true">
            <div className={styles.browserBar}>
              <div className={styles.dots}>
                <span style={{ background: '#ef6a5b' }} />
                <span style={{ background: '#f2b84b' }} />
                <span style={{ background: '#4cc38a' }} />
              </div>
              <div className={styles.urlBar}>
                <span>localhost:3000/dashboard</span>
              </div>
            </div>
            <div className={styles.browserBody}>
              <div className={styles.sidebar}>
                <div className={`${styles.sideItem} ${styles.active}`} />
                <div className={styles.sideItem} />
                <div className={styles.sideItem} />
                <div className={styles.sideItem} />
              </div>
              <div className={styles.mainArea}>
                <div className={styles.statsRow}>
                  {[
                    { color: 'var(--accent)',  label: 'Total Jobs' },
                    { color: 'var(--accent2)', label: 'Companies' },
                    { color: '#f0c46a',        label: 'Applications' },
                  ].map((s) => (
                    <div key={s.label} className={styles.statBox}>
                      <div className={styles.statBar} style={{ background: s.color }} />
                      <div className={styles.statLabel}>{s.label}</div>
                    </div>
                  ))}
                </div>
                {[1, 2, 3].map((r) => (
                  <div key={r} className={styles.tableRow}>
                    <div className={styles.rowIcon} />
                    <div className={styles.rowLines}>
                      <div className={styles.rowLine} style={{ width: `${55 + r * 10}%` }} />
                      <div className={styles.rowLine} style={{ width: `${40 + r * 8}%`, opacity: 0.5 }} />
                    </div>
                    <div className={styles.rowBadge} />
                  </div>
                ))}
              </div>
            </div>
          </div>

          
          <div className={styles.cols}>
            <div className={styles.col}>
              <div className={styles.colHeader}>
                <span className="tag done">✓ Completed</span>
              </div>
              <ul className={styles.list}>
                {completed.map((item) => (
                  <li key={item} className={styles.listItem}>
                    <span className={styles.checkIcon}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.col}>
              <div className={styles.colHeader}>
                <span className="tag wip"><FontAwesomeIcon icon={faHourglassHalf} /> Under Development</span>
              </div>
              <ul className={styles.list}>
                {inProgress.map((item) => (
                  <li key={item} className={styles.listItem}>
                    <span className={styles.wipIcon}>◐</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className={styles.note}>
            <span><FontAwesomeIcon icon={faThumbtack} /></span>
            The frontend is not yet connected to a backend or database. This section will be updated when the integration is complete.
          </div>
        </div>
      </div>
    </section>
  )
}
