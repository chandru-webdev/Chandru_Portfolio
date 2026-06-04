import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  FiArrowUpRight,
  FiGithub,
  FiExternalLink,
} from 'react-icons/fi'
import {
  FaJava,
  FaPython,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaUtensils,
  FaUserShield,
  FaBus,
  FaCoins,
  FaShoppingCart,
} from 'react-icons/fa'
import {
  SiSpringboot,
  SiMysql,
  SiTypescript,
  SiJavascript,
  SiVite,
  SiFlask,
  SiTensorflow,
  SiFirebase,
  SiRazorpay,
  SiJsonwebtokens,
  SiVercel,
} from 'react-icons/si'
import Footer from '../components/Footer.jsx'
import './ProjectsPage.css'

const STATUS_STYLES = {
  LIVE: 'badge--live',
  COMPLETED: 'badge--completed',
  INTERNSHIP: 'badge--internship',
  ARCHIVE: 'badge--archive',
}

const PROJECTS = [
  {
    id: 'yumzo',
    title: 'Yumzo — Food Ordering App',
    span: 'large',
    accent: '#f59e0b',
    summary:
      'A full-stack food ordering platform with secure Spring Boot backend, JWT auth, BCrypt password hashing, and a modern React + TypeScript frontend. Integrated Razorpay payments and TheMealDB for dynamic menus.',
    status: 'LIVE',
    image: '/projects/yumzo.png',
    icons: [
      { icon: <SiSpringboot />, color: '#6DB33F' },
      { icon: <FaJava />, color: '#E76F00' },
      { icon: <SiMysql />, color: '#4479A1' },
      { icon: <SiRazorpay />, color: '#3395FF' },
      { icon: <FaUtensils />, color: '#f59e0b' },
    ],
    chips: ['Spring Boot', 'Java', 'JWT', 'BCrypt', 'React', 'TypeScript', 'Vite', 'MySQL', 'Razorpay', 'TheMealDB', 'Postman'],
    github: 'https://github.com/chandru-webdev/Yemzo',
    live: null,
  },
  {
    id: 'aml',
    title: 'AML Detection System',
    span: 'medium',
    accent: '#3b82f6',
    summary:
      'Anti-Money Laundering detection platform built with Flask + MySQL. Integrated a TensorFlow ML model for risk and anomaly scoring with secure role-based access and automated review workflows for flagged transactions.',
    status: 'COMPLETED',
    image: '/projects/aml.jpg',
    icons: [
      { icon: <FaPython />, color: '#3776AB' },
      { icon: <SiFlask />, color: '#ffffff' },
      { icon: <SiTensorflow />, color: '#FF6F00' },
      { icon: <FaUserShield />, color: '#3b82f6' },
    ],
    chips: ['Python', 'Flask', 'TensorFlow', 'MySQL', 'REST API', 'HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/chandru-webdev',
    live: null,
  },
  {
    id: 'velzo',
    title: 'Velzo — E-Commerce',
    span: 'medium',
    accent: '#a855f7',
    summary:
      'Responsive fashion store deployed on Vercel. Features cart, persistent state with localStorage, JSON-driven catalog, and a mobile-first UI.',
    status: 'LIVE',
    image: '/projects/velzo.png',
    icons: [
      { icon: <FaShoppingCart />, color: '#a855f7' },
      { icon: <FaHtml5 />, color: '#E34F26' },
      { icon: <SiFirebase />, color: '#FFCA28' },
      { icon: <SiVercel />, color: '#ffffff' },
    ],
    chips: ['HTML5', 'CSS3', 'JavaScript', 'Firebase', 'Vercel'],
    github: 'https://github.com/chandru-webdev/velzo-',
    live: null,
  },
  {
    id: 'bus',
    title: 'Bus Booking System',
    span: 'medium',
    accent: '#10b981',
    summary:
      'Internship project — seat selection to booking to payment, with JWT auth, seamless seat availability, and Agile team delivery.',
    status: 'INTERNSHIP',
    image: '/projects/bus.jpg',
    icons: [
      { icon: <FaBus />, color: '#10b981' },
      { icon: <FaReact />, color: '#61DAFB' },
      { icon: <SiMysql />, color: '#4479A1' },
      { icon: <SiJsonwebtokens />, color: '#D63AFF' },
    ],
    chips: ['React.js', 'REST API', 'MySQL', 'JWT', 'Git'],
    github: 'https://github.com/chandru-webdev',
    live: null,
  },
  {
    id: 'crypto',
    title: 'Crypto Trading',
    span: 'small',
    accent: '#f97316',
    summary:
      'Backend service for a crypto trading workflow — built in Java with REST APIs and clean layered architecture.',
    status: 'COMPLETED',
    image: '/projects/crypto.png',
    icons: [
      { icon: <FaCoins />, color: '#f97316' },
      { icon: <FaJava />, color: '#E76F00' },
      { icon: <SiSpringboot />, color: '#6DB33F' },
    ],
    chips: ['Java', 'Spring Boot', 'REST API'],
    github: 'https://github.com/chandru-webdev/Crypto-Trading',
    live: null,
  },
  {
    id: 'agency',
    title: 'Modern Agency Homepage',
    span: 'small',
    accent: '#22d3ee',
    summary:
      'A polished TypeScript + React agency homepage with smooth motion and modern layout patterns.',
    status: 'COMPLETED',
    image: '/projects/agency.png',
    icons: [
      { icon: <SiTypescript />, color: '#3178C6' },
      { icon: <FaReact />, color: '#61DAFB' },
      { icon: <SiVite />, color: '#646CFF' },
    ],
    chips: ['TypeScript', 'React', 'Vite', 'CSS3'],
    github: 'https://github.com/chandru-webdev/modern-agency-homepage',
    live: null,
  },
  {
    id: 'tastybite',
    title: 'Tastybite',
    span: 'small',
    accent: '#ef4444',
    summary:
      'A food landing page with a clean, appetite-first hero and reusable section layout.',
    status: 'COMPLETED',
    image: '/projects/tastybite.png',
    icons: [
      { icon: <FaUtensils />, color: '#ef4444' },
      { icon: <FaCss3Alt />, color: '#1572B6' },
      { icon: <FaHtml5 />, color: '#E34F26' },
    ],
    chips: ['HTML5', 'CSS3', 'JavaScript'],
    github: 'https://github.com/chandru-webdev/-Tastybite',
    live: null,
  },
  {
    id: 'dashboard',
    title: 'Employee Dashboard',
    span: 'small',
    accent: '#8b5cf6',
    summary:
      'A lightweight dashboard for managing employee data using vanilla JavaScript and clean UI components.',
    status: 'COMPLETED',
    image: '/projects/dashboard.png',
    icons: [
      { icon: <SiJavascript />, color: '#F7DF1E' },
      { icon: <FaHtml5 />, color: '#E34F26' },
      { icon: <FaCss3Alt />, color: '#1572B6' },
    ],
    chips: ['JavaScript', 'HTML5', 'CSS3'],
    github: 'https://github.com/chandru-webdev/Employee-Dashboard',
    live: null,
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] },
  }),
}

const ProjectsPage = () => {
  return (
    <>
      <section className="projects-page">
        <div className="projects-page__inner">
          {/* Header */}
          <div className="projects-page__head">
            <motion.span
              className="projects-page__label"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              MY WORK
            </motion.span>

            <motion.h1
              className="projects-page__title"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              Projects I&apos;ve{' '}
              <span className="projects-page__title-accent">from scratch.</span>
            </motion.h1>

            <motion.a
              className="projects-page__btn"
              href="https://github.com/chandru-webdev?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <FiGithub />
              <span>{PROJECTS.length}+ projects</span>
              <FiArrowUpRight className="projects-page__btn-arrow" />
            </motion.a>
          </div>

          {/* Grid */}
          <div className="projects-grid">
            {PROJECTS.map((p, idx) => (
              <motion.article
                key={p.id}
                className={`project-card project-card--${p.span}`}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: '-60px' }}
                custom={idx}
                style={{ '--accent': p.accent }}
              >
                {/* Preview image or icon strip */}
                {p.image ? (
                  <div className="project-card__preview">
                    <img src={p.image} alt={p.title} loading="lazy" />
                    <div className="project-card__actions project-card__actions--overlay">
                      {p.github && (
                        <a
                          href={p.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-card__action"
                          aria-label={`${p.title} on GitHub`}
                        >
                          <FiGithub />
                        </a>
                      )}
                      {p.live && (
                        <a
                          href={p.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-card__action"
                          aria-label={`${p.title} live demo`}
                        >
                          <FiExternalLink />
                        </a>
                      )}
                    </div>
                  </div>
                ) : (
                  <div className="project-card__top">
                    <div className="project-card__icons">
                      {p.icons.map((ic, i) => (
                        <span
                          key={i}
                          className="project-card__icon"
                          style={{ color: ic.color }}
                        >
                          {ic.icon}
                        </span>
                      ))}
                    </div>
                    <div className="project-card__actions">
                      {p.github && (
                        <a
                          href={p.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-card__action"
                          aria-label={`${p.title} on GitHub`}
                        >
                          <FiGithub />
                        </a>
                      )}
                      {p.live && (
                        <a
                          href={p.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-card__action"
                          aria-label={`${p.title} live demo`}
                        >
                          <FiExternalLink />
                        </a>
                      )}
                    </div>
                  </div>
                )}

                {/* Body */}
                <div className="project-card__body">
                  <div className="project-card__head">
                    <h3 className="project-card__title">{p.title}</h3>
                    <span className={`badge ${STATUS_STYLES[p.status]}`}>
                      {p.status === 'LIVE' && (
                        <span className="badge__dot" aria-hidden="true" />
                      )}
                      {p.status}
                    </span>
                  </div>
                  <p className="project-card__desc">{p.summary}</p>
                  <div className="project-card__chips">
                    {p.chips.map((c) => (
                      <span className="project-card__chip" key={c}>
                        {c}
                      </span>
                    ))}
                  </div>
                  {(p.github || p.live) && (
                    <div className="project-card__links">
                      {p.github && (
                        <a
                          href={p.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-card__link project-card__link--code"
                        >
                          <FiGithub aria-hidden="true" />
                          Code
                        </a>
                      )}
                      {p.live && (
                        <a
                          href={p.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-card__link project-card__link--live"
                        >
                          <FiExternalLink aria-hidden="true" />
                          Live
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </motion.article>
            ))}

            {/* CTA card */}
            <motion.article
              className="project-card project-card--cta"
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-60px' }}
              custom={PROJECTS.length}
            >
              <span className="projects-page__label projects-page__label--card">
                BUILT WITH YOU
              </span>
              <h3 className="project-card__cta-title">
                Let&apos;s build something together.
              </h3>
              <p className="project-card__cta-desc">
                Open to fullstack opportunities and freelance projects.
              </p>
              <Link to="/contact" className="project-card__cta-btn">
                Get in touch
                <FiArrowUpRight />
              </Link>
            </motion.article>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default ProjectsPage
