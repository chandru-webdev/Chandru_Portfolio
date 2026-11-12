import { motion } from 'framer-motion'
import {
  FiDownload,
  FiFileText,
  FiLayers,
  FiClock,
  FiCode,
  FiAward,
  FiMapPin,
  FiNavigation,
  FiShoppingBag,
} from 'react-icons/fi'
import { FaGraduationCap } from 'react-icons/fa'
import { LuBuilding2 } from 'react-icons/lu'
import Footer from '../components/Footer.jsx'
import './ResumePage.css'

const RESUME_PDF = '/chandru_resume.pdf'
const RESUME_FILENAME = 'Chandru_Java_Full_Stack_Resume.pdf'
const UPDATED = 'Today'

const EXPERIENCES = [
  {
    company: 'Huemind Digital Marketing',
    role: 'Full Stack & Shopify Developer',
    location: 'Dharmapuri, India',
    status: 'Current',
    statusType: 'current',
    period: 'Jan 2026 – Present',
    icon: <FiShoppingBag />,
    accent: '#22c55e',
    tags: [
      'Liquid',
      'Shopify OS 2.0',
      'Admin API',
      'GraphQL',
      'Shopify CLI',
      'JavaScript',
      'CSS',
      'React',
    ],
  },
  {
    company: 'Accent Technosoft',
    role: 'Web Development Intern',
    location: 'Coimbatore, India',
    status: 'Completed',
    statusType: 'completed',
    period: 'Jul 2024 – Sep 2024 · 3 months',
    icon: <LuBuilding2 />,
    accent: '#f59e0b',
    tags: ['React.js', 'REST API', 'MySQL', 'JWT', 'Git', 'Agile'],
  },
]

const HIGHLIGHTS = [
  {
    icon: <FiCode />,
    title: 'Full Stack Skills',
    desc: 'Java, Spring Boot, React, TypeScript, MySQL, MongoDB',
  },
  {
    icon: <FaGraduationCap />,
    title: 'Experience',
    desc: 'Huemind (Full Stack & Shopify) & Accent Technosoft · 10mo',
  },
  {
    icon: <FiLayers />,
    title: '10+ Projects',
    desc: 'Kattadam, Zayra, World Of Nerds, ATMR-Bot, Velzo, Modern Agency',
  },
  {
    icon: <FiAward />,
    title: '3 Certifications',
    desc: 'Besant, NoviTech, Udemy · 2024–2026',
  },
]

const STATS = [
  { value: '7.8', label: 'CGPA' },
  { value: '10+', label: 'Projects' },
  { value: '3', label: 'Certificates' },
  { value: '10mo', label: 'Experience' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] },
  }),
}

const ResumePage = () => {
  return (
    <>
      <section className="resume-page">
        <div className="resume-page__inner">
          <header className="resume-page__head">
            <motion.span
              className="resume-page__label"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              RESUME
            </motion.span>

            <motion.h1
              className="resume-page__title"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              My story, <span className="resume-page__title-accent">one</span>{' '}
              page at a time.
            </motion.h1>
          </header>

          <div className="resume-page__divider" aria-hidden="true" />

          <div className="resume-page__layout">
            {/* Left Column: PDF Preview */}
            <motion.div
              className="resume-preview"
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-40px' }}
              custom={0}
            >
              <div className="resume-preview__chrome">
                <span className="resume-preview__dots" aria-hidden="true">
                  <i />
                  <i />
                  <i />
                </span>
                <span className="resume-preview__filename">
                  {RESUME_FILENAME} · PDF
                </span>
              </div>
              <div className="resume-preview__frame">
                <iframe
                  src={`${RESUME_PDF}?v=20261112#toolbar=0&navpanes=0`}
                  title="Resume preview"
                />
              </div>
            </motion.div>

            {/* Right Column: Download, Summary, Experience, Highlights */}
            <div className="resume-page__content">
              {/* Download Card */}
              <motion.div
                className="resume-download"
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: '-40px' }}
                custom={1}
              >
                <h2>Download my Resume</h2>
                <p>
                  Get the full PDF version — includes skills, projects,
                  experience, education, and certifications.
                </p>
                <a
                  href={`${RESUME_PDF}?v=20261112`}
                  download={RESUME_FILENAME}
                  className="resume-download__btn"
                >
                  <FiDownload aria-hidden="true" />
                  Download PDF
                </a>
                <ul className="resume-download__meta">
                  <li>
                    <FiFileText aria-hidden="true" />
                    PDF format
                  </li>
                  <li>
                    <FiLayers aria-hidden="true" />
                    1 page
                  </li>
                  <li>
                    <FiClock aria-hidden="true" />
                    Updated {UPDATED}
                  </li>
                  <li>
                    <FiMapPin aria-hidden="true" />
                    PAN India
                  </li>
                  <li>
                    <FiNavigation aria-hidden="true" />
                    Relocate anywhere
                  </li>
                </ul>
              </motion.div>

              {/* Professional Summary */}
              <motion.div
                className="resume-summary"
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: '-40px' }}
                custom={2}
              >
                <p className="resume-summary__label">PROFESSIONAL SUMMARY</p>
                <p className="resume-summary__text">
                  <strong>Java Full Stack Developer</strong> skilled in React.js,
                  Next.js, TypeScript, Node.js, REST APIs, JWT authentication, and
                  MySQL/PostgreSQL. Working as a{' '}
                  <span className="text-highlight--green">
                    Full Stack &amp; Shopify Developer at Huemind Digital
                    Marketing
                  </span>{' '}
                  — built <strong>Opalline</strong> (jewelry billing ERP) and{' '}
                  <strong>The World Of Nerds</strong> (live Shopify store).
                  Freelance: <strong>Kattadam</strong> (construction marketplace)
                  and <strong>MM Brandvista</strong> (agency website). Also Shopify
                  Liquid, Admin API, GraphQL, Postman, AWS EC2, and Git/GitHub.
                  B.Sc. IT, Karpagam Academy (2022–2025, CGPA 7.8). Focus on
                  clean, scalable, production-ready apps end to end.
                </p>
                <div className="resume-summary__location">
                  <FiMapPin aria-hidden="true" />
                  <span>
                    PAN India · Open to{' '}
                    <strong>relocate anywhere</strong> for the right opportunity
                  </span>
                </div>
              </motion.div>

              {/* Work Experience Section */}
              <motion.div
                className="resume-experience"
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: '-40px' }}
                custom={3}
              >
                <div className="resume-experience__head">
                  <span className="resume-experience__dot" aria-hidden="true" />
                  <h3>WORK EXPERIENCE</h3>
                </div>

                <div className="resume-experience__list">
                  {EXPERIENCES.map((exp) => (
                    <article
                      key={exp.company}
                      className="resume-experience__card"
                      style={{ '--exp-accent': exp.accent }}
                    >
                      <div className="resume-experience__card-top">
                        <div className="resume-experience__icon-box">
                          {exp.icon}
                        </div>
                        <div className="resume-experience__info">
                          <h4 className="resume-experience__company">
                            {exp.company}
                          </h4>
                          <p className="resume-experience__role">
                            {exp.role} · {exp.location}
                          </p>
                          <div className="resume-experience__badges">
                            <span
                              className={`resume-experience__status resume-experience__status--${exp.statusType}`}
                            >
                              {exp.statusType === 'current' && (
                                <span
                                  className="resume-experience__status-dot"
                                  aria-hidden="true"
                                />
                              )}
                              {exp.status}
                            </span>
                            <span className="resume-experience__period">
                              {exp.period}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="resume-experience__tags">
                        {exp.tags.map((tag) => (
                          <span key={tag} className="resume-experience__tag">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </article>
                  ))}
                </div>
              </motion.div>

              {/* Highlights */}
              <motion.div
                className="resume-highlights"
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: '-40px' }}
                custom={4}
              >
                <p className="resume-highlights__label">Resume highlights</p>
                <div className="resume-highlights__grid">
                  {HIGHLIGHTS.map((item) => (
                    <article key={item.title} className="resume-highlight-card">
                      <span className="resume-highlight-card__icon">
                        {item.icon}
                      </span>
                      <h3>{item.title}</h3>
                      <p>{item.desc}</p>
                    </article>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="resume-page__stats">
            {STATS.map((stat, idx) => (
              <motion.div
                key={stat.label}
                className="resume-stat"
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: '-40px' }}
                custom={5 + idx}
              >
                <span className="resume-stat__value">{stat.value}</span>
                <span className="resume-stat__label">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default ResumePage
