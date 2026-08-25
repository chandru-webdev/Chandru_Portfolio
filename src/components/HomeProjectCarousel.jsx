import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiArrowUpRight } from 'react-icons/fi'
import './HomeProjectCarousel.css'

const HERO_PROJECTS = [
  {
    id: 'kattadam',
    name: 'Kattadam',
    category: 'Construction Marketplace',
    image: '/projects/kattadam.png',
    accent: '#10b981',
    isLive: true,
  },
  {
    id: 'zayra',
    name: 'Zayra ERP',
    category: 'Jewelry Billing Platform',
    image: '/projects/zayra.png',
    accent: '#0284c7',
    isLive: true,
  },
  {
    id: 'velzo',
    name: 'Velzo',
    category: 'E-Commerce Store',
    image: '/projects/velzo.png',
    accent: '#a855f7',
    isLive: true,
  },
  {
    id: 'huemind',
    name: 'Huemind Shopify',
    category: 'Shopify Store',
    image: '/projects/huemind.png',
    accent: '#22c55e',
    isLive: true,
  },
  {
    id: 'crypto',
    name: 'Crypto Trading',
    category: 'Java / Spring Boot',
    image: '/projects/crypto.png',
    accent: '#f97316',
    isLive: true,
  },
  {
    id: 'agency',
    name: 'Agency',
    category: 'Modern Agency UI',
    image: '/projects/agency.png',
    accent: '#22d3ee',
    isLive: true,
  },
  {
    id: 'tastybite',
    name: 'Tastybite',
    category: 'Food Platform',
    image: '/projects/tastybite.png',
    accent: '#ef4444',
    isLive: true,
  },
  {
    id: 'dashboard',
    name: 'Employee',
    category: 'Dashboard UI',
    image: '/projects/dashboard.png',
    accent: '#8b5cf6',
    isLive: true,
  },
  {
    id: 'bus',
    name: 'Bus Booking',
    category: 'Booking System',
    image: '/projects/bus.jpg',
    accent: '#3b82f6',
    isLive: true,
  },
]

const fadeLeft = {
  hidden: { opacity: 0, x: -30 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] },
  },
}

const HomeProjectCarousel = () => {
  const navigate = useNavigate()

  const handleCardClick = () => {
    navigate('/projects')
  }

  // Duplicate list to achieve seamless infinite looping
  const displayProjects = [...HERO_PROJECTS, ...HERO_PROJECTS]

  return (
    <motion.div
      className="home-projects"
      variants={fadeLeft}
      initial="hidden"
      animate="show"
    >
      <div
        className="home-projects__header"
        onClick={() => navigate('/projects')}
        title="View all projects"
      >
        <span className="home-projects__badge">
          <span className="home-projects__badge-pulse" />
          My Workkkkk....
        </span>
        <span className="home-projects__view-all">
          Explore <FiArrowUpRight />
        </span>
      </div>

      <div className="home-projects__viewport">
        <div className="home-projects__track">
          {displayProjects.map((p, idx) => (
            <div
              key={`${p.id}-${idx}`}
              className="home-project-card"
              style={{ '--project-accent': p.accent }}
              onClick={handleCardClick}
              title={`View ${p.name} on Projects page`}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && handleCardClick()}
            >
              <img
                src={p.image}
                alt={p.name}
                className="home-project-card__img"
                loading="lazy"
              />
              <div className="home-project-card__overlay" />

              {p.isLive && (
                <div className="home-project-card__live-badge">
                  <span className="home-project-card__live-dot" />
                  <span className="home-project-card__live-label">LIVE</span>
                </div>
              )}

              <div className="home-project-card__bottom">
                <div className="home-project-card__marquee">
                  <span className="home-project-card__title">{p.name}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default HomeProjectCarousel
