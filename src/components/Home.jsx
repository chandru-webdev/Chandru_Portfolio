import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiArrowDownRight } from 'react-icons/fi'
import './Home.css'

const ROLES = [
  'Software Developer',
  'Java Full Stack Developer',
  'Front End Developer',
  'Freelancer',
  'Backend Developer',
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
  const [roleIndex, setRoleIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROLES.length)
    }, 2400)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="home">
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
    </section>
  )
}

export default Home
