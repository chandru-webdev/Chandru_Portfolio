import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'
import Footer from '../components/Footer.jsx'
import './PlaceholderPage.css'

const PlaceholderPage = ({ title, label = 'COMING SOON', description }) => {
  return (
    <>
      <section className="placeholder">
        <div className="placeholder__inner">
          <motion.span
            className="placeholder__label"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            {label}
          </motion.span>
          <motion.h1
            className="placeholder__title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            {title}
          </motion.h1>
          {description && (
            <motion.p
              className="placeholder__desc"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              {description}
            </motion.p>
          )}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link to="/" className="placeholder__back">
              <FiArrowLeft />
              Back to Home
            </Link>
          </motion.div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default PlaceholderPage
