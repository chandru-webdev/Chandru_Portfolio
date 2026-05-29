import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import Navbar from './components/Navbar.jsx'
import PageCorners from './components/PageCorners.jsx'
import Skills from './components/Skills.jsx'
import HomePage from './pages/HomePage.jsx'
import AboutPage from './pages/AboutPage.jsx'
import SkillsPage from './pages/SkillsPage.jsx'
import ProjectsPage from './pages/ProjectsPage.jsx'
import CertificatesPage from './pages/CertificatesPage.jsx'
import InternshipPage from './pages/InternshipPage.jsx'
import ResumePage from './pages/ResumePage.jsx'
import ContactPage from './pages/ContactPage.jsx'

function AppShell() {
  const location = useLocation()
  const showSkillsRibbon = location.pathname !== '/skills'

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/skills" element={<SkillsPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/certificates" element={<CertificatesPage />} />
        <Route path="/internship" element={<InternshipPage />} />
        <Route path="/resume" element={<ResumePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>

      {showSkillsRibbon && (
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        >
          <Skills />
        </motion.div>
      )}

      <PageCorners />
      <Navbar />
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <AppShell />
    </BrowserRouter>
  )
}

export default App
