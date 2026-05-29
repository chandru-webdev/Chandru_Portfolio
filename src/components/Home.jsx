import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  FiHome,
  FiUser,
  FiCode,
  FiFolder,
  FiAward,
  FiBriefcase,
  FiFileText,
  FiGithub,
  FiMail,
  FiArrowDownRight,
} from 'react-icons/fi'
import Skills from './Skills.jsx'
import './Home.css'

const ROLES = [
  'Software Developer',
  'Java Full Stack Developer',
  'Front End Developer',
  'Freelancer',
  'Backend Developer',
]

const NAV_ITEMS = [
  { id: 'home', label: 'Home', icon: <FiHome /> },
  { id: 'about', label: 'About', icon: <FiUser /> },
  { id: 'skills', label: 'Skills', icon: <FiCode /> },
  { id: 'projects', label: 'Projects', icon: <FiFolder /> },
  { id: 'certificates', label: 'Certificates', icon: <FiAward /> },
  { id: 'internship', label: 'Internship', icon: <FiBriefcase /> },
  { id: 'resume', label: 'Resume', icon: <FiFileText /> },
  { id: 'github', label: 'Github', icon: <FiGithub /> },
  { id: 'contact', label: 'Contact', icon: <FiMail /> },
]

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] },
  }),
}

const Home = () => {
  const [active, setActive] = useState('home')
  const [roleIndex, setRoleIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROLES.length)
    }, 2400)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="home">
      {/* Top Left logo */}
      <motion.div
        className="home__brand"
        variants={fadeUp}
        initial="hidden"
        animate="show"
        custom={0.1}
      >
        © Code by <span>chandru</span>
      </motion.div>

      {/* Top Right intro */}
      <motion.p
        className="home__intro"
        variants={fadeUp}
        initial="hidden"
        animate="show"
        custom={0.2}
      >
        Passionate Creative Designer and Developer, dedicated to crafting
        innovative solutions and exceptional digital experiences through modern
        technologies
      </motion.p>

      {/* Center portrait */}
      <motion.div
        className="home__portrait"
        initial={{ opacity: 0, scale: 0.94, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1.1, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
      >
        <img
          src="/profile.png"
          alt="Chandru — Creative Designer & Developer"
          className="profile-placeholder"
        />
        <div className="home__portrait-glow" />
      </motion.div>

      {/* Diagonal skills ribbon */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.6, ease: 'easeOut' }}
      >
        <Skills />
      </motion.div>

      {/* Right tag near image */}
      <motion.div
        className="home__tag"
        variants={fadeUp}
        initial="hidden"
        animate="show"
        custom={0.5}
      >
        <motion.span
          className="home__tag-arrow"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
        >
          <FiArrowDownRight />
        </motion.span>
        <div className="home__tag-text">
          <span className="home__tag-label">I&apos;m a</span>
          <div className="home__tag-rotator" aria-live="polite">
            <AnimatePresence mode="wait">
              <motion.span
                key={ROLES[roleIndex]}
                className="home__tag-role"
                initial={{ y: '100%', opacity: 0 }}
                animate={{ y: '0%', opacity: 1 }}
                exit={{ y: '-100%', opacity: 0 }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              >
                {ROLES[roleIndex]}
              </motion.span>
            </AnimatePresence>
          </div>
        </div>
      </motion.div>

      {/* Marquee background title */}
      <motion.div
        className="home__marquee"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 0.22, y: 0 }}
        transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        aria-hidden="true"
      >
        <div className="home__marquee-track">
          <span className="home__marquee-text">
            Full-Stack Developer &nbsp;&amp;&nbsp; Software Developer
            &nbsp;&amp;&nbsp; Freelancer &nbsp;&amp;&nbsp;
          </span>
          <span className="home__marquee-text" aria-hidden="true">
            Full-Stack Developer &nbsp;&amp;&nbsp; Software Developer
            &nbsp;&amp;&nbsp; Freelancer &nbsp;&amp;&nbsp;
          </span>
        </div>
      </motion.div>

      {/* Floating glass navbar */}
      <motion.nav
        className="home__nav"
        initial={{ opacity: 0, y: 40, x: '-50%' }}
        animate={{ opacity: 1, y: 0, x: '-50%' }}
        transition={{ duration: 0.9, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
        aria-label="Primary"
      >
        <ul className="home__nav-list">
          {NAV_ITEMS.map((item) => {
            const isActive = active === item.id
            return (
              <li key={item.id} className="home__nav-item">
                <button
                  type="button"
                  className={`home__nav-btn ${isActive ? 'is-active' : ''}`}
                  onClick={() => setActive(item.id)}
                  aria-label={item.label}
                  aria-current={isActive ? 'page' : undefined}
                >
                  <span className="home__nav-icon">{item.icon}</span>
                  <span className="home__nav-tip">{item.label}</span>
                </button>
              </li>
            )
          })}
        </ul>
      </motion.nav>
    </section>
  )
}

export default Home
