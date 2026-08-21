import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaPython,
  FaChrome,
  FaFigma,
  FaNpm,
  FaUsers,
  FaLightbulb,
  FaPalette,
  FaCode,
  FaLayerGroup,
  FaMobileAlt,
  FaDatabase,
} from 'react-icons/fa'
import {
  SiJavascript,
  SiC,
  SiReactrouter,
  SiMongodb,
  SiPostman,
  SiNetlify,
  SiVercel,
  SiCanva,
  SiMysql,
  SiFirebase,
  SiFramer,
  SiVscodium,
  SiShopify,
  SiGraphql,
} from 'react-icons/si'
import {
  MdDesignServices,
  MdApi,
  MdAnimation,
  MdLayers,
  MdLanguage,
} from 'react-icons/md'
import './Skills.css'

const SKILLS = [
  { name: 'Shopify', icon: <SiShopify />, color: '#95BF47' },
  { name: 'HTML5', icon: <FaHtml5 />, color: '#E34F26' },
  { name: 'CSS3', icon: <FaCss3Alt />, color: '#1572B6' },
  { name: 'JavaScript', icon: <SiJavascript />, color: '#F7DF1E' },
  { name: 'React.js', icon: <FaReact />, color: '#61DAFB' },
  { name: 'GraphQL', icon: <SiGraphql />, color: '#E535AB' },
  { name: 'Responsive Design', icon: <FaMobileAlt />, color: '#9BA3AF' },
  { name: 'Front-End', icon: <FaCode />, color: '#22D3EE' },
  { name: 'UI/UX', icon: <MdDesignServices />, color: '#F472B6' },
  { name: 'Git', icon: <FaGitAlt />, color: '#F05032' },
  { name: 'GitHub', icon: <FaGithub />, color: '#FFFFFF' },
  { name: 'SQL', icon: <FaDatabase />, color: '#7DD3FC' },
  { name: 'Python', icon: <FaPython />, color: '#3776AB' },
  { name: 'C', icon: <SiC />, color: '#A8B9CC' },
  { name: 'React Router', icon: <SiReactrouter />, color: '#CA4245' },
  { name: 'REST API', icon: <MdApi />, color: '#34D399' },
  { name: 'Animation', icon: <MdAnimation />, color: '#A78BFA' },
  { name: 'Problem Solving', icon: <FaLightbulb />, color: '#FBBF24' },
  { name: 'Team Collaboration', icon: <FaUsers />, color: '#60A5FA' },
  { name: 'Creative Portfolio', icon: <FaPalette />, color: '#EC4899' },
  { name: 'Full Stack', icon: <FaLayerGroup />, color: '#8B5CF6' },
  { name: 'MERN Stack', icon: <SiMongodb />, color: '#47A248' },
  { name: 'Modern Web', icon: <MdLanguage />, color: '#06B6D4' },
  { name: 'VS Code', icon: <SiVscodium />, color: '#2F80ED' },
  { name: 'Chrome DevTools', icon: <FaChrome />, color: '#4285F4' },
  { name: 'Figma', icon: <FaFigma />, color: '#F24E1E' },
  { name: 'Postman', icon: <SiPostman />, color: '#FF6C37' },
  { name: 'Netlify', icon: <SiNetlify />, color: '#00C7B7' },
  { name: 'Vercel', icon: <SiVercel />, color: '#FFFFFF' },
  { name: 'npm', icon: <FaNpm />, color: '#CB3837' },
  { name: 'Canva', icon: <SiCanva />, color: '#00C4CC' },
  { name: 'MySQL', icon: <SiMysql />, color: '#4479A1' },
  { name: 'Firebase', icon: <SiFirebase />, color: '#FFCA28' },
  { name: 'Framer Motion', icon: <SiFramer />, color: '#0055FF' },
  { name: 'React Icons', icon: <MdLayers />, color: '#22D3EE' },
]

const Skills = () => {
  return (
    <div className="skills-ribbon" aria-hidden="true">
      <div className="skills-ribbon__track">
        {[...SKILLS, ...SKILLS].map((s, i) => (
          <div
            className="skills-ribbon__icon"
            key={`${s.name}-${i}`}
            style={{ color: s.color }}
            title={s.name}
          >
            {s.icon}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skills
