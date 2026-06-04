import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  FiMapPin,
  FiCheck,
  FiLayers,
  FiShield,
  FiDatabase,
  FiUsers,
  FiExternalLink,
  FiGithub,
  FiEye,
} from 'react-icons/fi'
import { FaBuilding } from 'react-icons/fa'
import Footer from '../components/Footer.jsx'
import './InternshipPage.css'

const ACCENT = '#a3e635'

const TECH_STACK = ['React.js', 'REST API', 'MySQL', 'JWT', 'Git', 'GitHub']

const WORK_ITEMS = [
  {
    icon: <FiLayers />,
    title: 'Full booking flow development',
    desc: 'Built features for seat selection, availability, and payment using React.js and REST APIs.',
  },
  {
    icon: <FiShield />,
    title: 'JWT authentication implementation',
    desc: 'Secured user access and session handling across the booking application.',
  },
  {
    icon: <FiDatabase />,
    title: 'Real-time seat availability',
    desc: 'Maintained sync between booking and payment states in MySQL.',
  },
  {
    icon: <FiUsers />,
    title: 'Agile team collaboration',
    desc: 'Worked in Agile sprints and used GitHub for code reviews and version control.',
  },
]

const TAKEAWAYS = [
  'Hands-on experience with production-grade React.js codebase',
  'Built & tested real REST API integrations with Postman',
  'Applied JWT auth in a live multi-user booking system',
  'Collaborated in Agile sprints and code review cycles',
]

const PROJECT_LINKS = {
  github: 'https://github.com/chandru-webdev',
  live: null,
}

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] },
  }),
}

const InternshipPage = () => {
  return (
    <>
      <section className="internship-page" style={{ '--accent': ACCENT }}>
        <div className="internship-page__inner">
          <header className="internship-page__head">
            <motion.span
              className="internship-page__label"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              EXPERIENCE
            </motion.span>

            <motion.h1
              className="internship-page__title"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              Where I put my{' '}
              <span className="internship-page__title-accent">skills</span> to
              real work.
            </motion.h1>
          </header>

          <div className="internship-page__divider" aria-hidden="true" />

          <div className="internship-page__layout">
            <motion.aside
              className="internship-sidebar"
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-40px' }}
              custom={0}
            >
              <div className="internship-sidebar__logo">
                <FaBuilding aria-hidden="true" />
              </div>

              <span className="internship-sidebar__badge">
                <span className="internship-sidebar__badge-dot" aria-hidden="true" />
                Completed
              </span>

              <h2 className="internship-sidebar__company">Accent Technosoft</h2>

              <p className="internship-sidebar__location">
                <FiMapPin aria-hidden="true" />
                Coimbatore, India
              </p>

              <dl className="internship-sidebar__meta">
                <div>
                  <dt>Role</dt>
                  <dd>Web Dev Intern</dd>
                </div>
                <div>
                  <dt>Type</dt>
                  <dd>On-site</dd>
                </div>
                <div>
                  <dt>Start</dt>
                  <dd>Jul 2024</dd>
                </div>
                <div>
                  <dt>End</dt>
                  <dd>Sep 2024</dd>
                </div>
              </dl>

              <div className="internship-sidebar__stack">
                <p className="internship-sidebar__stack-label">Tech stack used</p>
                <div className="internship-sidebar__tags">
                  {TECH_STACK.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>

              <div className="internship-sidebar__actions">
                <Link
                  to="/projects"
                  className="internship-sidebar__btn internship-sidebar__btn--outline"
                >
                  <FiEye aria-hidden="true" />
                  View project
                </Link>
                {PROJECT_LINKS.github && (
                  <a
                    href={PROJECT_LINKS.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="internship-sidebar__btn internship-sidebar__btn--outline"
                  >
                    <FiGithub aria-hidden="true" />
                    Code
                  </a>
                )}
                {PROJECT_LINKS.live && (
                  <a
                    href={PROJECT_LINKS.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="internship-sidebar__btn internship-sidebar__btn--live"
                  >
                    <FiExternalLink aria-hidden="true" />
                    Live
                  </a>
                )}
              </div>
            </motion.aside>

            <motion.div
              className="internship-main"
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-40px' }}
              custom={1}
            >
              <div className="internship-main__header">
                <div>
                  <span className="internship-main__index">01 — Internship</span>
                  <h2 className="internship-main__role">Web Development Intern</h2>
                  <p className="internship-main__project">Online Bus Booking System</p>
                </div>
                <span className="internship-main__duration">3 months</span>
              </div>

              <div className="internship-main__section">
                <h3 className="internship-main__section-title">What I worked on</h3>
                <ul className="internship-timeline">
                  {WORK_ITEMS.map((item) => (
                    <li key={item.title} className="internship-timeline__item">
                      <span className="internship-timeline__icon">{item.icon}</span>
                      <div>
                        <h4>{item.title}</h4>
                        <p>{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>

          <div className="internship-page__bottom">
            <motion.div
              className="internship-stat internship-stat--months"
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-40px' }}
              custom={2}
            >
              <span className="internship-stat__value">3</span>
              <span className="internship-stat__label">Months</span>
              <p className="internship-stat__sub">Jul – Sep 2024 · Coimbatore</p>
            </motion.div>

            <motion.div
              className="internship-stat internship-stat--contrib"
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-40px' }}
              custom={3}
            >
              <span className="internship-stat__value">4</span>
              <span className="internship-stat__label">Contributions</span>
              <p className="internship-stat__sub">Booking · Auth · DB · Agile</p>
            </motion.div>

            <motion.div
              className="internship-takeaways"
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-40px' }}
              custom={4}
            >
              <h3>Key takeaways from this internship</h3>
              <ul>
                {TAKEAWAYS.map((item) => (
                  <li key={item}>
                    <FiCheck aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default InternshipPage
