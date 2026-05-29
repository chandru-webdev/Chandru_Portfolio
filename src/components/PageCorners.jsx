import { motion } from 'framer-motion'
import './PageCorners.css'

const fadeIn = {
  hidden: { opacity: 0, y: 12 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
  }),
}

const PageCorners = () => {
  return (
    <>
      <motion.div
        className="page-corner page-corner--brand"
        variants={fadeIn}
        initial="hidden"
        animate="show"
        custom={0.1}
      >
        © Code by <span>chandru</span>
      </motion.div>

      <motion.p
        className="page-corner page-corner--intro"
        variants={fadeIn}
        initial="hidden"
        animate="show"
        custom={0.2}
      >
        Passionate Creative Designer and Developer, dedicated to crafting
        innovative solutions and exceptional digital experiences through modern
        technologies
      </motion.p>
    </>
  )
}

export default PageCorners
