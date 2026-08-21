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
} from 'react-icons/fi'
import { FaGraduationCap } from 'react-icons/fa'
import Footer from '../components/Footer.jsx'
import './ResumePage.css'

const RESUME_PDF = '/chandru_resume.pdf'
const RESUME_FILENAME = 'Chandru_Java_Full_Stack_Resume.pdf'
const UPDATED = 'Today'

const HIGHLIGHTS = [
  {
    icon: <FiCode />,
    title: 'Full Stack Skills',
    desc: 'Java, Spring Boot, React, TypeScript, MySQL, MongoDB',
  },
  {
    icon: <FaGraduationCap />,
    title: 'Experience',
    desc: 'Huemind (Shopify Dev) & Accent Technosoft',
  },
  {
    icon: <FiLayers />,
    title: '7+ Projects',
    desc: 'Opal Line, Yumzo, AML System, Velzo e-commerce, Crypto Trading',
  },
  {
    icon: <FiAward />,
    title: '3 Certifications',
    desc: 'Besant, NoviTech, Udemy · 2024–2026',
  },
]

const STATS = [
  { value: '7.8', label: 'CGPA' },
  { value: '7+', label: 'Projects' },
  { value: '3', label: 'Certificates' },
  { value: '2mo', label: 'Shopify Exp' },
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
                  chandru_resume.pdf · 1 page
                </span>
              </div>
              <div className="resume-preview__frame">
                <iframe
                  src={`${RESUME_PDF}#toolbar=0&navpanes=0`}
                  title="Resume preview"
                />
              </div>
            </motion.div>

            <div className="resume-page__content">
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
                  internship, education, and certifications.
                </p>
                <a
                  href={RESUME_PDF}
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
                    <FiLayers aria-hidden="true" />1 page
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

              <motion.div
                className="resume-summary"
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: '-40px' }}
                custom={2}
              >
                <p className="resume-summary__label">Professional summary</p>
                <p className="resume-summary__text">
                  <strong>Java Full Stack Developer</strong> with hands-on
                  experience building secure REST APIs using{' '}
                  <strong>Spring Boot</strong>, implementing{' '}
                  <strong>JWT authentication</strong>, and developing responsive
                  frontends with <strong>React</strong>. Experienced in MySQL,
                  MongoDB, and full project lifecycle from design to deployment.
                </p>
                <p className="resume-summary__location">
                  <FiMapPin aria-hidden="true" />
                  <span>
                    <strong>PAN India</strong> · Open to{' '}
                    <strong>relocate anywhere</strong> for the right opportunity
                  </span>
                </p>
              </motion.div>

              <motion.div
                className="resume-highlights"
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: '-40px' }}
                custom={3}
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

          <div className="resume-page__stats">
            {STATS.map((stat, idx) => (
              <motion.div
                key={stat.label}
                className="resume-stat"
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: '-40px' }}
                custom={4 + idx}
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
