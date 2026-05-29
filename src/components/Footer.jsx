import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiArrowUpRight } from 'react-icons/fi'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
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
