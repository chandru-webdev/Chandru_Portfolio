import { motion } from 'framer-motion'
import { FiArrowUpRight, FiCheck, FiMapPin } from 'react-icons/fi'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
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
  { value: '5+', label: 'Full-Stack Projects' },
  { value: '2mo', label: 'Internship Experience' },
  { value: '3', label: 'Certifications' },
  { value: '7.8', label: 'CGPA' },
]

const TECH_STACK = [
  'Spring Boot',
  'Java',
  'React.js',
  'TypeScript',
  'MySQL',
  'JWT Auth',
  'REST APIs',
  'Node.js',
  'MongoDB',
  'Tailwind CSS',
  'Git',
  'Postman',
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
                <span>Trichy, India</span>
              </div>
            </div>

            <div className="about__bio">
              <p>
                I&apos;m a <strong>Java Full Stack Developer</strong> based in
                Trichy, India. I build end-to-end web applications — from
                secure Spring Boot backends with JWT authentication and BCrypt
                password hashing, to clean, responsive React frontends that
                actually feel good to use.
              </p>
              <p>
                I graduated with a <strong>B.Sc. in Information Technology</strong>{' '}
                from Karpagam Academy of Higher Education and have been
                building real projects ever since — a full food ordering
                platform, an AI-powered AML detection system, and a deployed
                e-commerce storefront.
              </p>
              <p>
                I care about <em>clean architecture</em>,{' '}
                <em>meaningful code</em>, and shipping things that work. I
                started with a roadmap — I started with curiosity, and I&apos;ve
                been chasing that ever since.
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

          {/* RIGHT COLUMN — stats + stack + principles */}
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

            {/* Principles */}
            <div className="about__principles">
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
      </div>
    </section>
  )
}

export default About
