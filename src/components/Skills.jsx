import styles from './Skills.module.css'

const tiers = [
  {
    label: 'Use Independently',
    color: '#3dffa0',
    description: 'My core toolkit for building and shipping interfaces.',
    skills: [
      'HTML5', 'CSS3', 'JavaScript (ES6+)', 'React.js', 'Tailwind CSS',
      'React Router', 'Responsive Design', 'Reusable Components',
      'Git & GitHub', 'Vite', 'npm / npx', 'VS Code',
    ],
  },
  {
    label: 'Working Knowledge',
    color: '#4f8aff',
    description: 'I can build with these and keep sharpening them.',
    skills: [
      'Redux Toolkit', 'Formik', 'Yup', 'Node.js', 'Express.js',
      'REST APIs', 'CRUD Operations', 'Routing & Middleware',
      'Error Handling', 'Input Validation', 'Postman',
    ],
  },
  {
    label: 'Still Learning',
    color: '#f0c46a',
    description: 'Practising these through active projects.',
    skills: [
      'MongoDB', 'Mongoose Schemas', 'Frontend–Backend Integration', 'React Native',
    ],
  },
]

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="wrap">
        <div className="section-label reveal">Skills</div>
        <h2 className="section-title reveal reveal-delay-1">
          Skills, by how I use them
        </h2>
        <p className="section-lead reveal reveal-delay-2">
          React and frontend development are my main focus. Backend is a growing second strength.
        </p>

        <div className={styles.grid}>
          {tiers.map((tier, idx) => (
            <div
              key={tier.label}
              className={`${styles.card} glass-card reveal`}
              style={{ '--tier-color': tier.color, transitionDelay: `${idx * 0.12}s` }}
            >
              <div className={styles.cardTop} style={{ '--tier-color': tier.color }}>
                <div className={styles.dot} />
                <h3 className={styles.cardTitle}>{tier.label}</h3>
              </div>
              <p className={styles.cardDesc}>{tier.description}</p>
              <div className={styles.pills}>
                {tier.skills.map((skill) => (
                  <span key={skill} className={styles.pill}
                    style={{ '--tier-color': tier.color }}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
