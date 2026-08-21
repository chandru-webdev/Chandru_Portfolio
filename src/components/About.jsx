import { motion } from 'framer-motion'
import {
  FiArrowUpRight,
  FiCheck,
  FiMapPin,
  FiShoppingBag,
  FiServer,
  FiLayout,
  FiDatabase,
} from 'react-icons/fi'
import { FaLinkedin, FaGithub, FaShopify } from 'react-icons/fa'
import { BsGem } from 'react-icons/bs'
import './About.css'

const SOCIALS = [
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/chandru-br',
    icon: <FaLinkedin />,
    brand: '#0A66C2',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/chandru-webdev',
    icon: <FaGithub />,
    brand: '#ffffff',
  },
]

const STATS = [
  { value: '7+', label: 'FULL-STACK PROJECTS' },
  { value: '2mo', label: 'SHOPIFY EXPERIENCE' },
  { value: '3', label: 'CERTIFICATIONS' },
  { value: '7.8', label: 'CGPA' },
]

const TECH_STACK = [
  'Spring Boot',
  'Java',
  'React',
  'TypeScript',
  'MySQL',
  'JWT Auth',
  'REST APIs',
  'Node.js',
  'MongoDB',
  'Git',
  'Postman',
  'Shopify',
  'Liquid',
  'GraphQL',
  'Shopify API',
]

const CURRENTLY_WORKING = [
  {
    id: 'huemind',
    icon: <FiShoppingBag />,
    iconType: 'green',
    title: 'Huemind Digital Marketing',
    subtitle: 'Shopify Website Developer · Liquid · OS 2.0 · Admin API',
    badge: 'Jul 2026 – Now',
    badgeType: 'green',
  },
  {
    id: 'opal-line',
    icon: <BsGem />,
    iconType: 'blue',
    title: 'Opal Line — Jewelry ERP',
    subtitle: 'NestJS · Prisma · PostgreSQL · React · Shopify · BullMQ',
    badge: 'In progress',
    badgeType: 'dim',
  },
]

const PRINCIPLES = [
  {
    title: 'Clean architecture first',
    desc: 'Layered structure, clear REST contracts, no spaghetti backends.',
  },
  {
    title: 'Security by default',
    desc: 'JWT auth, BCrypt hashing, role-based access — built in from day one.',
  },
  {
    title: 'Ship and learn fast',
    desc: 'Every project pushes me further than the last.',
  },
]

const SKILL_CATEGORIES = [
  {
    title: 'Backend',
    icon: <FiServer />,
    skills: [
      { name: 'Java / Spring Boot', level: 88 },
      { name: 'REST API / JWT', level: 85 },
      { name: 'Node.js / Express', level: 62 },
      { name: 'NestJS', level: 58 },
    ],
  },
  {
    title: 'Frontend',
    icon: <FiLayout />,
    skills: [
      { name: 'React.js', level: 85 },
      { name: 'TypeScript', level: 72 },
      { name: 'Tailwind CSS', level: 80 },
      { name: 'HTML5 / CSS3', level: 90 },
    ],
  },
  {
    title: 'Shopify',
    icon: <FaShopify />,
    skills: [
      { name: 'Liquid Templating', level: 68 },
      { name: 'Online Store 2.0', level: 65 },
      { name: 'Shopify Admin API', level: 60 },
      { name: 'GraphQL', level: 45 },
    ],
  },
  {
    title: 'Database & Tools',
    icon: <FiDatabase />,
    skills: [
      { name: 'MySQL', level: 85 },
      { name: 'PostgreSQL / Prisma', level: 65 },
      { name: 'MongoDB', level: 60 },
      { name: 'Git / Docker / Postman', level: 82 },
    ],
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
  }),
}

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about__inner">
        {/* Top status pill */}
        <motion.div
          className="about__status"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          custom={0}
        >
          <span className="about__status-dot" />
          AVAILABLE FOR WORK
        </motion.div>

        {/* Section label */}
        <motion.span
          className="about__label"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          custom={0.05}
        >
          ABOUT ME
        </motion.span>

        {/* Heading */}
        <motion.h2
          className="about__heading"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          custom={0.1}
        >
          I&apos;m Chandru —{' '}
          <span className="about__heading-accent">
            Developer, builder, and full-stack problem solver.
          </span>
        </motion.h2>

        {/* Two-column body */}
        <div className="about__grid">
          {/* LEFT COLUMN — image + bio */}
          <motion.div
            className="about__left"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
            custom={0.15}
          >
            <div className="about__portrait">
              <img src="/profile.png" alt="Chandru — Java Full Stack Developer" />
              <div className="about__portrait-tag">
                <FiMapPin />
                <span>Chennai, India</span>
              </div>
            </div>

            <div className="about__bio">
              <p>
                I&apos;m a <strong>Java Full Stack Developer</strong> based in
                Chennai. I build end-to-end web apps — from secure Spring Boot
                backends to clean React frontends.
              </p>
              <p>
                Currently working as a{' '}
                <strong>Shopify Developer at Huemind</strong> and building{' '}
                <strong>Opal Line</strong>, a full-stack jewelry ERP platform
                for a silver brand.
              </p>
              <p>
                I graduated with a{' '}
                <strong>B.Sc. in Information Technology</strong> from Karpagam
                Academy. I care about <strong>clean architecture</strong>,{' '}
                <strong>meaningful code</strong>, and shipping things that work.
              </p>
              <p>
                When I&apos;m not coding, I&apos;m probably breaking something
                just to understand how it works. That&apos;s kind of my thing.
              </p>

              <div className="about__socials" aria-label="Social links">
                {SOCIALS.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="about__social"
                    aria-label={s.label}
                    style={{ '--brand': s.brand }}
                  >
                    <span className="about__social-icon">{s.icon}</span>
                    <span className="about__social-label">{s.label}</span>
                    <FiArrowUpRight className="about__social-arrow" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN — stats + stack + currently working + principles */}
          <motion.div
            className="about__right"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
            custom={0.2}
          >
            {/* Stats grid */}
            <div className="about__stats">
              {STATS.map((s) => (
                <div className="about__stat" key={s.label}>
                  <span className="about__stat-value">{s.value}</span>
                  <span className="about__stat-label">{s.label}</span>
                </div>
              ))}
            </div>

            {/* Tech stack */}
            <div className="about__panel">
              <span className="about__panel-title">TECH STACK</span>
              <div className="about__chips">
                {TECH_STACK.map((t) => (
                  <span className="about__chip" key={t}>
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Currently working on */}
            <div className="about__working">
              <div className="about__working-header">
                <span className="about__working-dot" />
                <span className="about__working-title">CURRENTLY WORKING ON</span>
              </div>
              <div className="about__working-items">
                {CURRENTLY_WORKING.map((item) => (
                  <div className="about__working-item" key={item.id}>
                    <div
                      className={`about__working-icon about__working-icon--${item.iconType}`}
                    >
                      {item.icon}
                    </div>
                    <div className="about__working-content">
                      <h4 className="about__working-item-title">{item.title}</h4>
                      <p className="about__working-item-sub">{item.subtitle}</p>
                    </div>
                    <div
                      className={`about__working-badge about__working-badge--${item.badgeType}`}
                    >
                      {item.badge}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Principles */}
            <div className="about__principles">
              <span className="about__panel-title" style={{ marginBottom: '4px' }}>
                WHAT I BELIEVE IN
              </span>
              {PRINCIPLES.map((p) => (
                <div className="about__principle" key={p.title}>
                  <span className="about__principle-check">
                    <FiCheck />
                  </span>
                  <div>
                    <h4>{p.title}</h4>
                    <p>{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* BOTTOM SECTION — SKILLS SECTION (4 CARDS) */}
        <motion.div
          className="about__skills"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          custom={0.25}
        >
          <div className="about__skills-header">
            <span className="about__label">TECHNICAL PROFICIENCY</span>
            <h3 className="about__skills-heading">Skills & Mastery</h3>
          </div>

          <div className="about__skills-grid">
            {SKILL_CATEGORIES.map((category, catIdx) => (
              <motion.div
                key={category.title}
                className="about__skill-card"
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: '-40px' }}
                custom={0.1 * catIdx}
              >
                <div className="about__skill-card-head">
                  <div className="about__skill-card-icon-wrap">
                    <span className="about__skill-card-icon">{category.icon}</span>
                    <h4 className="about__skill-card-title">{category.title}</h4>
                  </div>
                </div>

                <div className="about__skill-bars">
                  {category.skills.map((skill) => (
                    <div className="about__skill-bar-item" key={skill.name}>
                      <div className="about__skill-bar-info">
                        <span className="about__skill-bar-name">{skill.name}</span>
                        <span className="about__skill-bar-percent">{skill.level}%</span>
                      </div>
                      <div className="about__skill-track">
                        <motion.div
                          className="about__skill-progress"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 1,
                            ease: [0.22, 1, 0.36, 1],
                            delay: 0.2,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
