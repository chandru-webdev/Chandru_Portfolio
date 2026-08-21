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
  FiBriefcase,
  FiCalendar,
} from 'react-icons/fi'
import { FaBuilding, FaCode, FaReact, FaShopify, FaLaptopCode } from 'react-icons/fa'
import { SiNextdotjs } from 'react-icons/si'
import { MdApi } from 'react-icons/md'
import { BsGem } from 'react-icons/bs'
import Footer from '../components/Footer.jsx'
import './ExperiencePage.css'

const EXPERIENCES = [
  {
    id: 'huemind',
    company: 'Huemind Digital Marketing',
    role: 'Shopify Website Developer',
    status: 'Currently working',
    period: 'Jul 2026 – Present',
    location: 'Dharmapuri, India',
    type: 'Full-time',
    duration: 'Jul 2026 – Present',
    index: '01',
    category: 'Current Role',
    accent: '#22c55e',
    badgeType: 'active',
    icon: <FaShopify />,
    summary:
      'Building and customizing Shopify Online Store 2.0 themes, ERP backend systems, and Admin API integrations.',
    featuredProject: {
      name: 'Opal Line — Jewelry ERP',
      status: 'In progress',
      badgeType: 'progress',
      desc: 'Full-stack jewelry billing ERP for a 92.5 sterling silver brand on Shopify. Shopify as storefront + custom backend for pricing, GST billing, and bulk silver rate sync via BullMQ + Redis.',
      stack: [
        'Shopify',
        'NestJS',
        'Prisma',
        'PostgreSQL',
        'React',
        'BullMQ',
        'Redis',
      ],
    },
    stack: [
      'Liquid',
      'Shopify OS 2.0',
      'GraphQL',
      'Admin API',
      'Shopify CLI',
      'React',
      'JavaScript',
      'NestJS',
      'Prisma',
      'PostgreSQL',
      'BullMQ',
    ],
    workItems: [
      {
        icon: <BsGem />,
        title: 'Opal Line — Jewelry ERP Platform',
        desc: 'Full-stack jewelry billing ERP for a 92.5 sterling silver brand on Shopify. Shopify as storefront + custom backend for pricing, GST billing, and bulk silver rate sync via BullMQ + Redis.',
      },
      {
        icon: <FaCode />,
        title: 'Theme development & customization',
        desc: 'Building and customizing Shopify Online Store 2.0 themes using Liquid, sections, snippets, and schema JSON.',
      },
      {
        icon: <MdApi />,
        title: 'Shopify Admin API integration',
        desc: 'Working with GraphQL Admin API to build custom functionality and automate store operations.',
      },
      {
        icon: <FaReact />,
        title: 'React skills applied to Shopify',
        desc: 'Leveraged existing React & JS knowledge to accelerate Shopify app and storefront development.',
      },
    ],
    stats: [
      { value: '2mo+', label: 'Experience', sub: 'Jul 2026 – Present · Dharmapuri' },
      { value: '8+', label: 'Tech Tools', sub: 'Shopify · NestJS · Prisma · BullMQ' },
    ],
    takeaways: [
      'Hands-on expertise with Shopify OS 2.0 architecture and schema configurations',
      'Designed custom ERP backend with NestJS, Prisma, and PostgreSQL for silver pricing & GST billing',
      'Automated background jobs and live silver rate sync using BullMQ and Redis queues',
      'Built maintainable, modular Liquid templates, sections, and snippets',
    ],
  },
  {
    id: 'kattadam',
    company: 'Kattadam — Construction Marketplace',
    role: 'Full Stack Developer',
    status: 'Completed',
    period: 'May 2026 – Jul 2026',
    location: 'Chennai, India',
    type: 'Freelance / Client Project',
    duration: '3 months',
    index: '02',
    category: 'Freelance Experience',
    accent: '#f59e0b',
    badgeType: 'completed',
    icon: <SiNextdotjs />,
    summary:
      'Full stack construction marketplace with Next.js, React, Supabase database management, and custom APIs.',
    stack: [
      'Next.js',
      'React',
      'JavaScript',
      'Supabase',
      'API Integration',
      'Git',
      'GitHub',
    ],
    workItems: [
      {
        icon: <FaCode />,
        title: 'Frontend Development',
        desc: 'Developed and customized responsive user interfaces for the Kattadam construction marketplace using Next.js, React, and JavaScript.',
      },
      {
        icon: <FiDatabase />,
        title: 'Backend & Database Integration',
        desc: 'Worked with Supabase for database management, authentication, API integration, and backend functionality.',
      },
      {
        icon: <FiLayers />,
        title: 'Full Stack Development',
        desc: 'Built and integrated frontend and backend features, implemented client requirements, fixed bugs, and improved overall application functionality.',
      },
      {
        icon: <FaLaptopCode />,
        title: 'Project Development',
        desc: 'Worked on real-world freelance requirements, developing new features and maintaining the application throughout the project lifecycle.',
      },
    ],
    stats: [
      { value: '3mo', label: 'Duration', sub: 'May 2026 – Jul 2026 · Chennai' },
      { value: '7+', label: 'Tech Tools', sub: 'Next.js · Supabase · React · Git' },
    ],
    takeaways: [
      'Built responsive marketplace UIs with Next.js and modern React component patterns',
      'Integrated Supabase authentication, PostgreSQL relations, and storage',
      'Delivered client requirements end-to-end with high code quality and fast turnarounds',
      'Handled production bug fixes, performance improvements, and real-world deployment',
    ],
  },
  {
    id: 'accent',
    company: 'Accent Technosoft',
    role: 'Web Development Intern',
    status: 'Completed',
    period: 'Jul 2024 – Sep 2024',
    location: 'Coimbatore, India',
    type: 'On-site Internship',
    duration: '3 months',
    index: '03',
    category: 'Internship',
    accent: '#38bdf8',
    badgeType: 'completed',
    icon: <FaBuilding />,
    summary:
      'Online Bus Booking System — seat selection, reservation flow, and JWT authentication.',
    stack: ['React.js', 'REST API', 'MySQL', 'JWT Auth', 'Git', 'GitHub'],
    workItems: [
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
    ],
    stats: [
      { value: '3', label: 'Months', sub: 'Jul – Sep 2024 · Coimbatore' },
      { value: '4', label: 'Key Modules', sub: 'Booking · Auth · DB · Agile' },
    ],
    takeaways: [
      'Hands-on experience with production-grade React.js codebase',
      'Built & tested real REST API integrations with Postman',
      'Applied JWT auth in a live multi-user booking system',
      'Collaborated in Agile sprints and code review cycles',
    ],
    projectLink: '/projects',
    github: 'https://github.com/chandru-webdev',
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

const ExperiencePage = () => {
  return (
    <>
      <section className="experience-page">
        <div className="experience-page__inner">
          <header className="experience-page__head">
            <motion.span
              className="experience-page__label"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              WORK EXPERIENCE
            </motion.span>

            <motion.h1
              className="experience-page__title"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              Where I put my{' '}
              <span className="experience-page__title-accent">skills</span> to
              real work.
            </motion.h1>
          </header>

          <div className="experience-page__list">
            {EXPERIENCES.map((exp, expIdx) => (
              <motion.div
                key={exp.id}
                id={exp.id}
                className="experience-block"
                style={{ '--accent': exp.accent }}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: '-60px' }}
                custom={expIdx}
              >
                <div className="experience-block__divider" aria-hidden="true" />

                <div className="experience-page__layout">
                  {/* SIDEBAR */}
                  <aside className="experience-sidebar">
                    <div className="experience-sidebar__logo">
                      {exp.icon}
                    </div>

                    <span
                      className={`experience-sidebar__badge experience-sidebar__badge--${exp.badgeType}`}
                    >
                      <span
                        className="experience-sidebar__badge-dot"
                        aria-hidden="true"
                      />
                      {exp.status}
                    </span>

                    <h2 className="experience-sidebar__company">
                      {exp.company}
                    </h2>

                    <p className="experience-sidebar__location">
                      <FiMapPin aria-hidden="true" />
                      {exp.location}
                    </p>

                    <dl className="experience-sidebar__meta">
                      <div>
                        <dt>Role</dt>
                        <dd>{exp.role}</dd>
                      </div>
                      <div>
                        <dt>Type</dt>
                        <dd>{exp.type}</dd>
                      </div>
                      <div>
                        <dt>Duration</dt>
                        <dd>{exp.duration}</dd>
                      </div>
                      <div>
                        <dt>Period</dt>
                        <dd>{exp.period}</dd>
                      </div>
                    </dl>

                    <div className="experience-sidebar__stack">
                      <p className="experience-sidebar__stack-label">
                        Tech stack used
                      </p>
                      <div className="experience-sidebar__tags">
                        {exp.stack.map((tag) => (
                          <span key={tag}>{tag}</span>
                        ))}
                      </div>
                    </div>

                    <div className="experience-sidebar__actions">
                      {exp.projectLink && (
                        <Link
                          to={exp.projectLink}
                          className="experience-sidebar__btn experience-sidebar__btn--outline"
                        >
                          <FiEye aria-hidden="true" />
                          View project
                        </Link>
                      )}
                      {exp.github && (
                        <a
                          href={exp.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="experience-sidebar__btn experience-sidebar__btn--outline"
                        >
                          <FiGithub aria-hidden="true" />
                          Code
                        </a>
                      )}
                      {exp.badgeType === 'active' && (
                        <Link
                          to="/contact"
                          className="experience-sidebar__btn experience-sidebar__btn--live"
                        >
                          <FiBriefcase aria-hidden="true" />
                          Hire me
                        </Link>
                      )}
                    </div>
                  </aside>

                  {/* MAIN SECTION */}
                  <div className="experience-main">
                    <div className="experience-main__header">
                      <div>
                        <span className="experience-main__index">
                          {exp.index} — {exp.category}
                        </span>
                        <h2 className="experience-main__role">{exp.role}</h2>
                        <p className="experience-main__project">
                          {exp.company}
                        </p>
                      </div>
                      <span className="experience-main__duration">
                        <FiCalendar style={{ marginRight: '6px' }} />
                        {exp.period}
                      </span>
                    </div>

                    {/* Featured Project Card if present */}
                    {exp.featuredProject && (
                      <div className="experience-featured-project">
                        <div className="experience-featured-project__head">
                          <div className="experience-featured-project__title-wrap">
                            <span className="experience-featured-project__icon">
                              <BsGem />
                            </span>
                            <div>
                              <h4 className="experience-featured-project__title">
                                {exp.featuredProject.name}
                              </h4>
                              <span className="experience-featured-project__sub">
                                Featured Project
                              </span>
                            </div>
                          </div>
                          <span className="experience-featured-project__badge">
                            <span className="experience-featured-project__badge-dot" />
                            {exp.featuredProject.status}
                          </span>
                        </div>
                        <p className="experience-featured-project__desc">
                          {exp.featuredProject.desc}
                        </p>
                        <div className="experience-featured-project__stack">
                          {exp.featuredProject.stack.map((tech) => (
                            <span
                              key={tech}
                              className="experience-featured-project__chip"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="experience-main__section">
                      <h3 className="experience-main__section-title">
                        {exp.badgeType === 'active'
                          ? 'Key Responsibilities & Deliverables'
                          : 'What I worked on'}
                      </h3>
                      <ul className="experience-timeline">
                        {exp.workItems.map((item) => (
                          <li
                            key={item.title}
                            className="experience-timeline__item"
                          >
                            <span className="experience-timeline__icon">
                              {item.icon}
                            </span>
                            <div>
                              <h4>{item.title}</h4>
                              <p>{item.desc}</p>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* BOTTOM STATS & TAKEAWAYS */}
                <div className="experience-page__bottom">
                  {exp.stats.map((stat, idx) => (
                    <div
                      key={stat.label}
                      className={`experience-stat experience-stat--${idx}`}
                    >
                      <span className="experience-stat__value">{stat.value}</span>
                      <span className="experience-stat__label">{stat.label}</span>
                      <p className="experience-stat__sub">{stat.sub}</p>
                    </div>
                  ))}

                  <div className="experience-takeaways">
                    <h3>Key takeaways from this role</h3>
                    <ul>
                      {exp.takeaways.map((item) => (
                        <li key={item}>
                          <FiCheck aria-hidden="true" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default ExperiencePage
