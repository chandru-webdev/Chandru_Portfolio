import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  FiArrowUpRight,
  FiGithub,
  FiExternalLink,
  FiCode,
  FiCloud,
} from 'react-icons/fi'
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaUtensils,
  FaCoins,
  FaShoppingCart,
} from 'react-icons/fa'
import { FaPython } from 'react-icons/fa6'
import {
  SiTypescript,
  SiJavascript,
  SiVite,
  SiFirebase,
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
    id: 'kattadam',
    title: 'Kattadam — Construction Marketplace',
    span: 'featured',
    isFeatured: true,
    accent: '#10b981',
    image: '/projects/kattadam.png',
    summary: `Construction marketplace for Tamil Nadu — contractors, suppliers & homeowners.
Real-time listings, authentication, and a mobile-first UI.
Next.js 14, Supabase, TypeScript, and PostgreSQL.
Live on Vercel.`,
    status: 'LIVE',
    chips: [
      'Next.js 14',
      'Supabase',
      'TypeScript',
      'Tailwind CSS',
      'PostgreSQL',
      'Auth',
      'Vercel',
    ],
    github: 'https://github.com/chandru-webdev',
    live: 'https://kattadam.in/',
    liveLabel: 'kattadam.in',
  },
  {
    id: 'zayra',
    title: 'Zayra — Jewelry Billing Software',
    span: 'featured',
    isFeatured: true,
    accent: '#0284c7',
    image: '/projects/zayra.png',
    summary: `Jewelry ERP & billing for a 92.5 sterling silver brand.
React + TypeScript UI; NestJS, Prisma, PostgreSQL backend.
Silver rate sync via BullMQ + Redis; JWT/RBAC auth.
Shopify storefront + Razorpay payments.`,
    status: 'LIVE',
    chips: [
      'NestJS',
      'Prisma',
      'PostgreSQL',
      'React',
      'TypeScript',
      'Shopify',
      'BullMQ',
      'Redis',
      'JWT/RBAC',
      'Razorpay',
    ],
    github: 'https://github.com/chandru-webdev',
    live: 'https://zayra-jewellry-billing-software.vercel.app/',
    liveLabel: 'Live demo',
  },
  {
    id: 'worldofnerds',
    title: 'The World Of Nerds — Huemind Shopify',
    span: 'featured',
    isFeatured: true,
    accent: '#eab308',
    image: '/projects/worldofnerds.jpg',
    summary: `Live pan-India Shopify store — theworldofnerds.com (Huemind, 2026–Present).
Liquid mega-menu, bundles, predictive search, cart drawer & wishlist.
SEO, Meta Pixel, reviews & Instagram for visibility and trust.
Day-to-day products, collections, and promotions — mobile & desktop.`,
    status: 'LIVE',
    chips: [
      'Shopify',
      'Liquid',
      'Online Store 2.0',
      'JavaScript',
      'SEO',
      'Meta Pixel',
    ],
    github: null,
    live: 'https://theworldofnerds.com/',
    liveLabel: 'theworldofnerds.com',
  },
  {
    id: 'velzo',
    title: 'Velzo — E-Commerce',
    span: 'small',
    accent: '#a855f7',
    summary: `Responsive fashion storefront on Vercel.
Cart with localStorage persistence and JSON-driven catalog.
HTML, CSS, JavaScript, and Firebase.
Mobile-first shopping UI.`,
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
    id: 'atmr-bot',
    title: 'ATMR-Bot — Automated Algorithmic Trading System',
    span: 'small',
    accent: '#f97316',
    summary: `Python + MT5 engine with AI patterns — EMA, RSI, Bollinger Bands.
ATR trailing stops & drawdown protection for volatile markets.
n8n + Telegram for real-time alerts and remote commands.
AWS EC2 production — 24/7 autonomous execution.`,
    status: 'LIVE',
    image: '/projects/crypto.png',
    icons: [
      { icon: <FaPython />, color: '#3776AB' },
      { icon: <FaCoins />, color: '#f97316' },
      { icon: <FiCloud />, color: '#FF9900' },
    ],
    chips: [
      'Python',
      'MetaTrader 5',
      'AWS (EC2)',
      'n8n',
      'Telegram API',
      'PostgreSQL',
      'AI Pattern Recognition',
    ],
    github: 'https://github.com/chandru-webdev/Crypto-Trading',
    live: null,
  },
  {
    id: 'agency',
    title: 'Modern Agency Homepage',
    span: 'small',
    accent: '#22d3ee',
    summary: `TypeScript + React agency landing page.
Smooth motion and modern section layout.
Vite build and responsive CSS.
Polished marketing-site patterns.`,
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
    summary: `Food brand landing page with a bold hero.
Reusable sections and clean typography.
HTML, CSS, and JavaScript.
Appetite-first visual layout.`,
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
    summary: `Employee data dashboard in vanilla JavaScript.
Table views and simple CRUD-style UI.
HTML5, CSS3, and component-style layout.
Lightweight, no framework dependency.`,
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

/** Desktop bento: row 0 wide+narrow, row 1 narrow+wide, repeat (12-col grid). */
const getBentoSpanClass = (index) => {
  const row = Math.floor(index / 2)
  const isFirstInRow = index % 2 === 0
  const evenRow = row % 2 === 0
  if (evenRow) {
    return isFirstInRow ? 'project-card--wide' : 'project-card--narrow'
  }
  return isFirstInRow ? 'project-card--narrow' : 'project-card--wide'
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
              <span className="projects-page__title-accent">crafted with precision.</span>
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
              <span>10+ projects</span>
              <FiArrowUpRight className="projects-page__btn-arrow" />
            </motion.a>
          </div>

          {/* Grid */}
          <div className="projects-grid">
            {PROJECTS.map((p, idx) => (
              <motion.article
                key={p.id}
                className={`project-card ${getBentoSpanClass(idx)}${
                  p.isFeatured ? ' project-card--featured' : ''
                }`}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: '-60px' }}
                custom={idx}
                style={{ '--accent': p.accent }}
              >
                {/* Image Preview (Featured or Standard) */}
                {p.image ? (
                  <div
                    className={`project-card__preview ${
                      p.isFeatured ? 'project-card__preview--featured' : ''
                    }`}
                  >
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
                  /* Icon Fallback */
                  <div className="project-card__top">
                    <div className="project-card__icons">
                      {p.icons &&
                        p.icons.map((ic, i) => (
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

                {/* Card Body */}
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
                      <span
                        className={`project-card__chip ${
                          c === 'Shopify' ? 'project-card__chip--highlight' : ''
                        }`}
                        key={c}
                      >
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
                          <FiCode aria-hidden="true" />
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
                          {p.liveLabel || 'Live demo'}
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </motion.article>
            ))}

            {/* CTA card */}
            <motion.article
              className={`project-card project-card--cta ${getBentoSpanClass(
                PROJECTS.length,
              )}`}
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
