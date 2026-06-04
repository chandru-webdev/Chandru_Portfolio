import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaBootstrap,
  FaJava,
  FaPython,
  FaNodeJs,
  FaDocker,
  FaAws,
  FaGitAlt,
  FaGithub,
  FaCodeBranch,
  FaUsers,
  FaLayerGroup,
  FaMobileAlt,
  FaCogs,
  FaTasks,
  FaProjectDiagram,
  FaCode,
} from 'react-icons/fa'
import {
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiSpringboot,
  SiExpress,
  SiAxios,
  SiJsonwebtokens,
  SiMysql,
  SiMongodb,
  SiPostman,
  SiVercel,
  SiVscodium,
  SiEclipseide,
  SiGithubactions,
  SiOpenai,
  SiClaude,
} from 'react-icons/si'
import { MdApi } from 'react-icons/md'
import Footer from '../components/Footer.jsx'
import './SkillsPage.css'

const CATEGORIES = [
  {
    title: 'Frontend Development',
    desc: 'Building responsive React UIs and clean HTML/CSS layouts.',
    skills: [
      { icon: <FaHtml5 />, name: 'HTML5', color: '#E34F26' },
      { icon: <FaCss3Alt />, name: 'CSS3', color: '#1572B6' },
      { icon: <SiJavascript />, name: 'JavaScript', color: '#F7DF1E' },
      { icon: <FaReact />, name: 'React.js', color: '#61DAFB' },
    ],
  },
  {
    title: 'Styling & Design',
    desc: 'Crafting responsive interfaces with utility-first and component frameworks.',
    skills: [
      { icon: <FaBootstrap />, name: 'Bootstrap', color: '#7952B3' },
      { icon: <SiTailwindcss />, name: 'Tailwind CSS', color: '#38BDF8' },
      { icon: <FaMobileAlt />, name: 'Responsive', color: '#9BA3AF' },
    ],
  },
  {
    title: 'Programming Languages',
    desc: 'Strong in object-oriented programming and modern scripting.',
    skills: [
      { icon: <FaJava />, name: 'Java', color: '#E76F00' },
      { icon: <SiJavascript />, name: 'JavaScript', color: '#F7DF1E' },
      { icon: <SiTypescript />, name: 'TypeScript', color: '#3178C6' },
      { icon: <FaPython />, name: 'Python', color: '#3776AB' },
      { icon: <FaCogs />, name: 'OOP', color: '#9BA3AF' },
    ],
  },
  {
    title: 'Backend Development',
    desc: 'Designing secure REST APIs with Spring Boot and Node.js.',
    skills: [
      { icon: <SiSpringboot />, name: 'Spring Boot', color: '#6DB33F' },
      { icon: <FaNodeJs />, name: 'Node.js', color: '#3C873A' },
      { icon: <SiExpress />, name: 'Express.js', color: '#ffffff' },
    ],
  },
  {
    title: 'API & Integration',
    desc: 'RESTful contracts, JWT-secured endpoints, and third-party integrations.',
    skills: [
      { icon: <MdApi />, name: 'REST API', color: '#34D399' },
      { icon: <SiJsonwebtokens />, name: 'JWT Auth', color: '#D63AFF' },
      { icon: <SiAxios />, name: 'Axios', color: '#5A29E4' },
    ],
  },
  {
    title: 'Database Management',
    desc: 'Designing normalized schemas in MySQL and document stores in MongoDB.',
    skills: [
      { icon: <SiMysql />, name: 'MySQL', color: '#4479A1' },
      { icon: <SiMongodb />, name: 'MongoDB', color: '#47A248' },
    ],
  },
  {
    title: 'Tools & Platforms',
    desc: 'Daily-driver editors and API testing toolkits.',
    skills: [
      { icon: <SiVscodium />, name: 'VS Code', color: '#2F80ED' },
      { icon: <FaCode />, name: 'Cursor', color: '#ffffff' },
      { icon: <SiEclipseide />, name: 'Eclipse', color: '#2C2255' },
      { icon: <SiPostman />, name: 'Postman', color: '#FF6C37' },
    ],
  },
  {
    title: 'AI Tools',
    desc: 'AI-assisted coding, brainstorming, and faster iteration.',
    skills: [
      { icon: <SiOpenai />, name: 'ChatGPT', color: '#10A37F' },
      { icon: <SiClaude />, name: 'Claude', color: '#D97757' },
      { icon: <FaCode />, name: 'Cursor', color: '#ffffff' },
    ],
  },
  {
    title: 'Version Control & Collaboration',
    desc: 'Branching, code reviews, and CI workflows with GitHub.',
    skills: [
      { icon: <FaGitAlt />, name: 'Git', color: '#F05032' },
      { icon: <FaGithub />, name: 'GitHub', color: '#ffffff' },
      { icon: <SiGithubactions />, name: 'GitHub Actions', color: '#2088FF' },
    ],
  },
  {
    title: 'Cloud & Deployment',
    desc: 'Containerizing apps and deploying to managed platforms.',
    skills: [
      { icon: <FaAws />, name: 'AWS', color: '#FF9900' },
      { icon: <SiVercel />, name: 'Vercel', color: '#ffffff' },
      { icon: <FaDocker />, name: 'Docker', color: '#0DB7ED' },
    ],
  },
  {
    title: 'Engineering Practices',
    desc: 'System design, layered architecture, API testing, and Agile delivery.',
    skills: [
      { icon: <FaProjectDiagram />, name: 'System Design', color: '#22D3EE' },
      { icon: <FaLayerGroup />, name: 'Layered Arch.', color: '#8B5CF6' },
      { icon: <FaTasks />, name: 'API Testing', color: '#34D399' },
      { icon: <FaUsers />, name: 'Agile', color: '#60A5FA' },
      { icon: <FaCodeBranch />, name: 'Code Reviews', color: '#EC4899' },
    ],
  },
]

const ALL_SKILLS = CATEGORIES.reduce((acc, cat) => {
  cat.skills.forEach((skill) => {
    if (!acc.some((s) => s.name === skill.name)) acc.push(skill)
  })
  return acc
}, [])

const CAROUSEL_STEP_MS = 2200

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] },
  }),
}

const SkillsPage = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % ALL_SKILLS.length)
    }, CAROUSEL_STEP_MS)

    return () => clearInterval(timer)
  }, [])

  const len = ALL_SKILLS.length
  const visibleSkills = [
    ALL_SKILLS[(activeIndex - 1 + len) % len],
    ALL_SKILLS[activeIndex],
    ALL_SKILLS[(activeIndex + 1) % len],
  ]

  return (
    <>
      <section className="skills-page">
        <div className="skills-page__inner">
          <motion.span
            className="skills-page__label"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            MY SKILLS
          </motion.span>

          <motion.h1
            className="skills-page__title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            Skills that <span>fuel my passion</span>
          </motion.h1>

          <motion.p
            className="skills-page__sub"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            Everything I work with day-to-day — pulled straight from the stack I&apos;ve
            shipped real projects on.
          </motion.p>

          <motion.div
            className="skills-carousel"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
            aria-label="Skills icon carousel"
          >
            <div className="skills-carousel__viewport">
              <motion.div
                key={activeIndex}
                className="skills-carousel__track"
                initial={{ x: 28, opacity: 0.85 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              >
                {visibleSkills.map((skill, idx) => (
                  <div
                    key={`${skill.name}-${idx}`}
                    className={`skills-carousel__item${idx === 1 ? ' is-center' : ' is-side'}`}
                  >
                    <span
                      className="skills-carousel__icon"
                      style={{ color: skill.color }}
                      title={skill.name}
                    >
                      {skill.icon}
                    </span>
                    <span className="skills-carousel__name">{skill.name}</span>
                  </div>
                ))}
              </motion.div>
            </div>
          </motion.div>

          <div className="skills-page__grid">
            {CATEGORIES.map((cat, idx) => (
              <motion.article
                key={cat.title}
                className="skill-card"
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: '-60px' }}
                custom={idx}
              >
                <div className="skill-card__icons">
                  {cat.skills.map((s) => (
                    <div
                      key={s.name}
                      className="skill-card__icon"
                      style={{ color: s.color }}
                      title={s.name}
                    >
                      {s.icon}
                    </div>
                  ))}
                </div>
                <h3 className="skill-card__title">{cat.title}</h3>
                <p className="skill-card__desc">{cat.desc}</p>
                <div className="skill-card__chips">
                  {cat.skills.map((s) => (
                    <span className="skill-card__chip" key={`${cat.title}-${s.name}`}>
                      {s.name}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default SkillsPage
