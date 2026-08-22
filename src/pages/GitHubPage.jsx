import { motion } from 'framer-motion'
import {
  FiArrowUpRight,
  FiGithub,
  FiExternalLink,
  FiBriefcase,
} from 'react-icons/fi'
import {
  FaGithub,
  FaUtensils,
  FaUserShield,
  FaShoppingCart,
  FaBus,
} from 'react-icons/fa'
import Footer from '../components/Footer.jsx'
import './GitHubPage.css'

import { LuFactory, LuGem } from 'react-icons/lu'

const GITHUB_PROFILE = 'https://github.com/chandru-webdev'
const ACCENT = '#a3e635'

const STATS = [
  { value: '9+', label: 'Repositories', sub: 'Public projects' },
  { value: '4+', label: 'Projects', sub: 'Full stack apps' },
  { value: '15+', label: 'Tech stacks', sub: 'Languages used' },
  { value: '2025', label: 'Active since', sub: 'Building in public' },
]

const REPOS = [
  {
    name: 'kattadam-marketplace',
    desc: 'Construction services marketplace built with Next.js 14 + Supabase for Tamil Nadu clients, connecting contractors and suppliers.',
    tags: ['Next.js', 'Supabase', 'TypeScript'],
    href: 'https://kattadam.in/',
    image: '/projects/kattadam.png',
    icon: <LuFactory />,
    layout: 'wide',
    badge: 'Live',
  },
  {
    name: 'zayra-jewelry-erp',
    desc: 'Full-stack jewelry ERP and billing software for 92.5 sterling silver brands with NestJS, Prisma, PostgreSQL, React, and Shopify.',
    tags: ['NestJS', 'Prisma', 'React'],
    href: 'https://zayra-jewellry-billing-software.vercel.app/',
    image: '/projects/zayra.png',
    icon: <LuGem />,
    layout: 'tall',
    badge: 'Live',
  },
  {
    name: 'velzo-ecommerce',
    desc: 'Responsive fashion e-commerce storefront deployed on Vercel with Firebase Auth, localStorage cart, and JSON-driven catalog.',
    tags: ['HTML', 'CSS'],
    href: 'https://github.com/chandru-webdev/velzo-',
    image: '/projects/velzo.png',
    icon: <FaShoppingCart />,
    layout: 'default',
    badge: 'Live',
  },
  {
    name: 'crypto-trading-service',
    desc: 'Backend service for a crypto trading workflow — built in Java with Spring Boot REST APIs and layered architecture.',
    tags: ['Java', 'Spring Boot'],
    href: 'https://github.com/chandru-webdev/Crypto-Trading',
    image: '/projects/crypto.png',
    icon: <FaShoppingCart />,
    layout: 'wide',
    badge: null,
  },
]

const LANGUAGES = [
  { name: 'Java', percent: 24, color: '#a3e635' },
  { name: 'JavaScript', percent: 18, color: '#86efac' },
  { name: 'TypeScript', percent: 14, color: '#4ade80' },
  { name: 'Node.js', percent: 12, color: '#22c55e' },
  { name: 'Spring Boot', percent: 10, color: '#16a34a' },
  { name: 'MongoDB', percent: 8, color: '#15803d' },
  { name: 'HTML', percent: 8, color: '#bbf7d0' },
  { name: 'CSS', percent: 6, color: '#65a30d' },
]

const HEATMAP_LEVELS = [
  0, 0, 1, 0, 2, 1, 0, 3, 2, 1, 0, 2, 3, 4, 2, 1, 0, 1, 2, 3, 2, 1, 0, 2, 3, 4,
  1, 0, 2, 1, 3, 2, 1, 4, 3, 2, 1, 0, 3, 4, 3, 2, 1, 2, 3, 4, 3, 2, 1, 0, 2, 3,
  0, 1, 1, 2, 2, 3, 1, 2, 4, 3, 2, 1, 2, 3, 4, 4, 3, 2, 1, 0, 2, 3, 4, 3, 2, 1,
  2, 1, 0, 3, 2, 4, 3, 2, 1, 3, 4, 3, 2, 1, 0, 2, 3, 4, 2, 1, 0, 1, 2, 3, 2, 1,
  1, 2, 3, 2, 1, 0, 2, 3, 4, 3, 2, 1, 0, 1, 2, 3, 4, 3, 2, 1, 0, 2, 3, 2, 1, 0,
  0, 1, 2, 1, 0, 2, 3, 2, 1, 0, 1, 2, 3, 2, 1, 0, 1, 2, 3, 4, 3, 2, 1, 0, 1, 2,
  1, 0, 1, 2, 3, 2, 1, 0, 2, 3, 4, 3, 2, 1, 0, 1, 2, 3, 2, 1, 0, 1, 2, 3, 2, 1,
]

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] },
  }),
}

const GitHubPage = () => {
  return (
    <>
      <section className="github-page" style={{ '--accent': ACCENT }}>
        <div className="github-page__inner">
          <header className="github-page__head">
            <motion.span
              className="github-page__label"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              OPEN SOURCE
            </motion.span>

            <motion.h1
              className="github-page__title"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              Code I&apos;ve written,{' '}
              <span className="github-page__title-accent">
                shipped and shared.
              </span>
            </motion.h1>
          </header>

          <div className="github-page__divider" aria-hidden="true" />

          <div className="github-page__stats-row">
            <motion.div
              className="github-profile-card"
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-40px' }}
              custom={0}
            >
              <div className="github-profile-card__top">
                <img
                  src="/profile.png"
                  alt="Chandru B"
                  className="github-profile-card__avatar"
                />
                <span className="github-profile-card__icon">
                  <FaGithub aria-hidden="true" />
                </span>
              </div>
              <h2>Chandru B</h2>
              <p>@chandru-webdev</p>
              <a
                href={GITHUB_PROFILE}
                target="_blank"
                rel="noopener noreferrer"
                className="github-profile-card__btn"
              >
                View profile
                <FiArrowUpRight aria-hidden="true" />
              </a>
            </motion.div>

            {STATS.map((stat, idx) => (
              <motion.div
                key={stat.label}
                className="github-stat-card"
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: '-40px' }}
                custom={idx + 1}
              >
                <span className="github-stat-card__value">{stat.value}</span>
                <span className="github-stat-card__label">{stat.label}</span>
                <span className="github-stat-card__sub">{stat.sub}</span>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="github-contributions"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-40px' }}
            custom={5}
          >
            <div className="github-contributions__head">
              <h3>Contribution activity</h3>
              <span>Last 6 months</span>
            </div>
            <div className="github-contributions__grid" aria-hidden="true">
              {HEATMAP_LEVELS.map((level, i) => (
                <span
                  key={i}
                  className="github-contributions__cell"
                  data-level={level}
                />
              ))}
            </div>
          </motion.div>

          <div className="github-repos">
            {REPOS.map((repo, idx) => (
              <motion.a
                key={repo.name}
                href={repo.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`github-repo-card github-repo-card--${repo.layout}`}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: '-40px' }}
                custom={6 + idx}
              >
                <div className="github-repo-card__preview">
                  {repo.image ? (
                    <img src={repo.image} alt="" loading="lazy" />
                  ) : (
                    <div className="github-repo-card__placeholder" />
                  )}
                  <span className="github-repo-card__project-icon">
                    {repo.icon}
                  </span>
                  <div className="github-repo-card__actions">
                    <span aria-hidden="true">
                      <FiGithub />
                    </span>
                    {repo.badge === 'Live' && (
                      <span aria-hidden="true">
                        <FiExternalLink />
                      </span>
                    )}
                    {repo.badge === 'Internship' && (
                      <span aria-hidden="true">
                        <FiBriefcase />
                      </span>
                    )}
                  </div>
                </div>

                <div className="github-repo-card__body">
                  <div className="github-repo-card__head">
                    <h3>{repo.name}</h3>
                    <FiArrowUpRight aria-hidden="true" />
                  </div>
                  <p>{repo.desc}</p>
                  <div className="github-repo-card__tags">
                    {repo.tags.map((tag) => (
                      <span key={tag}>
                        <i aria-hidden="true" />
                        {tag}
                      </span>
                    ))}
                    {repo.badge && (
                      <span className="github-repo-card__badge">{repo.badge}</span>
                    )}
                  </div>
                </div>
              </motion.a>
            ))}
          </div>

          <motion.div
            className="github-languages"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-40px' }}
            custom={10}
          >
            <h3>Most used languages</h3>
            <div className="github-languages__bar">
              {LANGUAGES.map((lang) => (
                <span
                  key={lang.name}
                  className="github-languages__segment"
                  style={{
                    width: `${lang.percent}%`,
                    background: lang.color,
                  }}
                  title={`${lang.name} ${lang.percent}%`}
                />
              ))}
            </div>
            <ul className="github-languages__legend">
              {LANGUAGES.map((lang) => (
                <li key={lang.name}>
                  <span
                    className="github-languages__dot"
                    style={{ background: lang.color }}
                  />
                  {lang.name} {lang.percent}%
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className="github-page__cta"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-40px' }}
            custom={11}
          >
            <div>
              <h2>See all my work on GitHub</h2>
              <p>Stars, forks, and contributions — everything is open source.</p>
            </div>
            <a
              href={GITHUB_PROFILE}
              target="_blank"
              rel="noopener noreferrer"
              className="github-page__cta-btn"
            >
              <FiGithub aria-hidden="true" />
              Visit GitHub profile
              <FiExternalLink aria-hidden="true" />
            </a>
          </motion.div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default GitHubPage
