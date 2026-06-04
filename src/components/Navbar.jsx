import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import './Navbar.css'

const NAV_ITEMS = [
  { to: '/', label: 'Home', icon: '/nav-icons/home.png', end: true },
  { to: '/about', label: 'About', icon: '/nav-icons/about.jpg' },
  { to: '/skills', label: 'Skills', icon: '/nav-icons/skills.jpg' },
  { to: '/projects', label: 'Projects', icon: '/nav-icons/projects.jpg' },
  { to: '/certificates', label: 'Certificates', icon: '/nav-icons/certificates.jpg' },
  { to: '/internship', label: 'Internship', icon: '/nav-icons/internship.jpg' },
  { to: '/resume', label: 'Resume', icon: '/nav-icons/resume.jpg' },
  { to: '/github', label: 'GitHub', icon: '/nav-icons/github.jpg' },
  { to: '/contact', label: 'Contact', icon: '/nav-icons/contact.jpg' },
]

const Navbar = () => {
  return (
    <motion.nav
      className="navbar"
      initial={{ opacity: 0, y: 40, x: '-50%' }}
      animate={{ opacity: 1, y: 0, x: '-50%' }}
      transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
      aria-label="Primary"
    >
      <ul className="navbar__list">
        {NAV_ITEMS.map((item) => (
          <li key={item.label} className="navbar__item">
            <NavLink
              to={item.to}
              end={item.end}
              className={({ isActive }) =>
                `navbar__btn ${isActive ? 'is-active' : ''}`
              }
              aria-label={item.label}
            >
              <span className="navbar__icon">
                <img
                  src={item.icon}
                  alt=""
                  className="navbar__icon-img"
                  loading="lazy"
                  draggable={false}
                />
              </span>
              <span className="navbar__tip">{item.label}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </motion.nav>
  )
}

export default Navbar
