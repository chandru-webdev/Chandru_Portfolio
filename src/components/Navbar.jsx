import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
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
} from 'react-icons/fi'
import './Navbar.css'

const GITHUB_URL = 'https://github.com/chandru-webdev'

const NAV_ITEMS = [
  { to: '/', label: 'Home', icon: <FiHome />, end: true },
  { to: '/about', label: 'About', icon: <FiUser /> },
  { to: '/skills', label: 'Skills', icon: <FiCode /> },
  { to: '/projects', label: 'Projects', icon: <FiFolder /> },
  { to: '/certificates', label: 'Certificates', icon: <FiAward /> },
  { to: '/internship', label: 'Internship', icon: <FiBriefcase /> },
  { to: '/resume', label: 'Resume', icon: <FiFileText /> },
  { to: GITHUB_URL, label: 'GitHub', icon: <FiGithub />, external: true },
  { to: '/contact', label: 'Contact', icon: <FiMail /> },
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
            {item.external ? (
              <a
                href={item.to}
                target="_blank"
                rel="noopener noreferrer"
                className="navbar__btn"
                aria-label={item.label}
              >
                <span className="navbar__icon">{item.icon}</span>
                <span className="navbar__tip">{item.label}</span>
              </a>
            ) : (
              <NavLink
                to={item.to}
                end={item.end}
                className={({ isActive }) =>
                  `navbar__btn ${isActive ? 'is-active' : ''}`
                }
                aria-label={item.label}
              >
                <span className="navbar__icon">{item.icon}</span>
                <span className="navbar__tip">{item.label}</span>
              </NavLink>
            )}
          </li>
        ))}
      </ul>
    </motion.nav>
  )
}

export default Navbar
