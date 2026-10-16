import styles from './Hero.module.css'
import profileImg from '../assets/profile.jpeg'

const techChips = ['React.js', 'Node.js', 'Tailwind CSS', 'MongoDB', 'Express.js']

const stats = [
  { value: '5+', label: 'Projects Built' },
  { value: '2+', label: 'Years Learning' },
  { value: '15+', label: 'Technologies' },
]

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={`wrap ${styles.grid}`}>

       
        <div className={styles.content}>
          <div className={`section-label reveal`}>
            Available for Opportunities
          </div>

          <h1 className={`${styles.headline} reveal reveal-delay-1`}>
            Building Modern
            <span className={styles.gradient}> Web Experiences</span>
            ,<br /> From Interfaces
            <span className={styles.accent}> to APIs.</span>
          </h1>

          <p className={`${styles.bio} reveal reveal-delay-2`}>
            Hi, I'm <strong>Yogesh Bishwokarma</strong> — a passionate developer crafting
            responsive React applications and practical backend solutions. I work with
            modern frontend technologies and have hands-on experience with Node.js,
            Express.js, REST APIs, CRUD operations, and MongoDB.
          </p>

          <div className={`${styles.btns} reveal reveal-delay-3`}>
            <a className="btn primary" href="#projects">Explore Projects</a>
            <a className="btn" href="#" id="resume">Download Resume</a>
            <a className="btn" href="#contact">Contact Me</a>
          </div>

          
          <div className={`${styles.stats} reveal reveal-delay-4`}>
            {stats.map((s) => (
              <div key={s.label} className={styles.stat}>
                <strong>{s.value}</strong>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        
        <div className={`${styles.photoWrap} reveal reveal-delay-2`}>
          
          <div className={styles.ringOuter}>
            <div className={styles.ringInner}>
              <img
                src={profileImg}
                alt="Yogesh Bishwokarma — React Developer"
                className={styles.photo}
              />
            </div>
          </div>

          
          {techChips.map((chip, i) => (
            <div
              key={chip}
              className={styles.chip}
              style={{ '--i': i, animationDelay: `${i * 0.3}s` }}
              data-chip={i}
            >
              <span className={styles.chipDot} />
              {chip}
            </div>
          ))}

          
          <div className={styles.statusBadge}>
            <span className={styles.statusDot} />
            Open to work
          </div>
        </div>
      </div>

      
      <div className={`wrap ${styles.flowWrap}`}>
        <div className={`${styles.flow} reveal`}>
          {[
            { label: 'React UI', sub: 'Pages · Components · Forms', tag: 'done', tagLabel: 'Built' },
            { label: 'Express API', sub: 'Routes · Middleware · Validation', tag: 'wip', tagLabel: 'In Progress' },
            { label: 'MongoDB', sub: 'Mongoose Schemas & Models', tag: 'wip', tagLabel: 'In Progress' },
            { label: 'UI ↔ API', sub: 'Fetching & saving real data', tag: 'wip', tagLabel: 'Connecting' },
          ].map((item, i) => (
            <div key={item.label} className={styles.flowItem}>
              <div className={styles.flowNum}>0{i + 1}</div>
              <strong>{item.label}</strong>
              <small>{item.sub}</small>
              <span className={`tag ${item.tag}`}>{item.tagLabel}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
