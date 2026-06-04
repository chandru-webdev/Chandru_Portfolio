import { useCallback, useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  FiCalendar,
  FiClock,
  FiEye,
  FiLayers,
  FiX,
} from 'react-icons/fi'
import { FaJava, FaCode } from 'react-icons/fa'
import Footer from '../components/Footer.jsx'
import './CertificatesPage.css'

const CERTIFICATES = [
  {
    id: '01',
    title: 'Java Full Stack Development',
    provider: 'Besant Technologies',
    providerInitial: 'B',
    watermark: 'Java',
    accent: '#f97316',
    icon: <FaJava />,
    tags: [
      'Java',
      'Spring Boot',
      'React',
      'MySQL',
      'REST API',
      'JWT',
      'Node.js',
      'MongoDB',
      'Express.js',
    ],
    date: 'Jan 2026',
    image: '/certificates/besant-java-full-stack.png',
  },
  {
    id: '02',
    title: 'Full Stack Development',
    provider: 'NoviTech R&D Pvt. Ltd',
    providerInitial: 'N',
    watermark: 'Full St',
    accent: '#3b82f6',
    icon: <FiLayers />,
    tags: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'MongoDB'],
    date: 'Dec 2024',
    image: '/certificates/novitech-full-stack.png',
  },
  {
    id: '03',
    title: 'Core Java',
    provider: 'Udemy',
    providerInitial: 'U',
    watermark: 'Core Ja',
    accent: '#a855f7',
    icon: <FaCode />,
    tags: [
      'OOP',
      'Data Structures',
      'Collections',
      'Exception Handling',
      'Multithreading',
    ],
    date: 'Nov 2025',
    image: '/certificates/udemy-core-java.png',
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] },
  }),
}

const CertificatesPage = () => {
  const [activeCert, setActiveCert] = useState(null)

  const closeViewer = useCallback(() => setActiveCert(null), [])

  useEffect(() => {
    if (!activeCert) return undefined

    const onKeyDown = (e) => {
      if (e.key === 'Escape') closeViewer()
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [activeCert, closeViewer])

  return (
    <>
      <section className="certificates-page">
        <div className="certificates-page__inner">
          <header className="certificates-page__head">
            <motion.span
              className="certificates-page__label"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              CREDENTIALS
            </motion.span>

            <motion.h1
              className="certificates-page__title"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              Certified &{' '}
              <span className="certificates-page__title-accent">
                always learning.
              </span>
            </motion.h1>
          </header>

          <div className="certificates-page__divider" aria-hidden="true" />

          <div className="certificates-page__grid">
            {CERTIFICATES.map((cert, idx) => (
              <motion.article
                key={cert.id}
                className="cert-card"
                style={{ '--accent': cert.accent }}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: '-40px' }}
                custom={idx}
              >
                <div className="cert-card__hero">
                  <span className="cert-card__watermark">{cert.watermark}</span>
                  <div className="cert-card__icon">{cert.icon}</div>
                </div>

                <div className="cert-card__body">
                  <div className="cert-card__meta">
                    <span className="cert-card__index">{cert.id}</span>
                    <span className="cert-card__verified">
                      <span className="cert-card__verified-dot" aria-hidden="true" />
                      Verified
                    </span>
                  </div>

                  <h3 className="cert-card__title">{cert.title}</h3>

                  <div className="cert-card__provider">
                    <span className="cert-card__provider-logo">
                      {cert.providerInitial}
                    </span>
                    <span>{cert.provider}</span>
                  </div>

                  <div className="cert-card__tags">
                    {cert.tags.map((tag) => (
                      <span className="cert-card__tag" key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="cert-card__footer">
                    <div className="cert-card__footer-meta">
                      <span>
                        <FiCalendar aria-hidden="true" />
                        {cert.date}
                      </span>
                      <span>
                        <FiClock aria-hidden="true" />
                        Full course
                      </span>
                    </div>
                    {cert.image && (
                      <button
                        type="button"
                        className="cert-card__view-btn"
                        aria-label={`View ${cert.title} certificate`}
                        onClick={() => setActiveCert(cert)}
                      >
                        <FiEye aria-hidden="true" />
                        View
                      </button>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          <motion.div
            className="certificates-page__summary"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-40px' }}
            custom={3}
          >
            <div className="certificates-page__summary-text">
              <h2>Continuously upgrading my skill set</h2>
              <p>
                From core fundamentals to modern full-stack development — always
                learning.
              </p>
            </div>

            <div className="certificates-page__stats">
              <div>
                <span className="certificates-page__stat-value">3</span>
                <span className="certificates-page__stat-label">CERTIFICATES</span>
              </div>
              <div>
                <span className="certificates-page__stat-value">3</span>
                <span className="certificates-page__stat-label">PROVIDERS</span>
              </div>
              <div>
                <span className="certificates-page__stat-value">2024–26</span>
                <span className="certificates-page__stat-label">TIMELINE</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {activeCert && (
          <motion.div
            className="cert-viewer"
            role="dialog"
            aria-modal="true"
            aria-label={`${activeCert.title} certificate`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <button
              type="button"
              className="cert-viewer__backdrop"
              aria-label="Close certificate viewer"
              onClick={closeViewer}
            />
            <motion.div
              className="cert-viewer__panel"
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.98 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="cert-viewer__toolbar">
                <div>
                  <p className="cert-viewer__label">{activeCert.provider}</p>
                  <h2 className="cert-viewer__title">{activeCert.title}</h2>
                </div>
                <button
                  type="button"
                  className="cert-viewer__close"
                  aria-label="Close"
                  onClick={closeViewer}
                >
                  <FiX />
                </button>
              </div>
              <div className="cert-viewer__image-wrap">
                <img
                  src={activeCert.image}
                  alt={`${activeCert.title} certificate from ${activeCert.provider}`}
                />
              </div>
              <a
                href={activeCert.image}
                target="_blank"
                rel="noopener noreferrer"
                className="cert-viewer__open"
              >
                Open full size
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </>
  )
}

export default CertificatesPage
