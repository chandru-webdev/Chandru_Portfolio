import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiArrowUpRight } from 'react-icons/fi'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      {/* Get in touch divider with blue circle on the right */}
      <motion.div
        className="footer__touch"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className="footer__touch-line" aria-hidden="true" />
        <Link
          to="/contact"
          className="footer__touch-circle"
          aria-label="Get in touch — go to contact page"
        >
          <motion.span
            animate={{ rotate: 360 }}
            transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
            className="footer__touch-ring"
            aria-hidden="true"
          />
          <span className="footer__touch-text">Get in touch</span>
        </Link>
      </motion.div>

      <motion.div
        className="footer__card"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="footer__text">
          <span className="footer__cta">Got a project in mind?</span>
          <span className="footer__label">your friendly chaos creator</span>
          <h2 className="footer__name">chandruuuuuuu</h2>
        </div>

        <Link
          to="/contact"
          className="footer__arrow"
          aria-label="Go to contact page"
        >
          <motion.span
            className="footer__arrow-icon"
            animate={{
              x: [0, 6, 0],
              y: [0, -6, 0],
            }}
            transition={{
              duration: 2.2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <FiArrowUpRight />
          </motion.span>
        </Link>
      </motion.div>
    </footer>
  )
}

export default Footer
