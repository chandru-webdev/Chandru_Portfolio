import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  FiMail,
  FiMapPin,
  FiArrowUpRight,
  FiSend,
  FiLock,
  FiGlobe,
  FiChevronDown,
} from 'react-icons/fi'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import Footer from '../components/Footer.jsx'
import './ContactPage.css'

const EMAIL = 'chandrubrvs@gmail.com'

const CONTACT_LINKS = [
  {
    label: 'Email',
    value: EMAIL,
    href: `mailto:${EMAIL}`,
    icon: <FiMail />,
    color: '#ef4444',
  },
  {
    label: 'GitHub',
    value: 'github.com/chandru-webdev',
    href: 'https://github.com/chandru-webdev',
    icon: <FaGithub />,
    color: '#ffffff',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/chandru-br',
    href: 'https://linkedin.com/in/chandru-br',
    icon: <FaLinkedin />,
    color: '#0a66c2',
  },
  {
    label: 'Portfolio',
    value: 'chandruuuu.vercel.app',
    href: 'https://chandruuuu.vercel.app',
    icon: <FiGlobe />,
    color: '#a855f7',
  },
]

const QUICK_LINKS = [
  {
    label: 'GitHub',
    desc: 'See my code',
    href: 'https://github.com/chandru-webdev',
    icon: <FaGithub />,
    color: '#ffffff',
  },
  {
    label: 'LinkedIn',
    desc: 'Connect with me',
    href: 'https://linkedin.com/in/chandru-br',
    icon: <FaLinkedin />,
    color: '#0a66c2',
  },
  {
    label: 'Email',
    desc: 'Drop a direct mail',
    href: `mailto:${EMAIL}`,
    icon: <FiMail />,
    color: '#ef4444',
  },
]

const ENQUIRY_TYPES = [
  'Job opportunity',
  'Freelance project',
  'Collaboration',
  'General enquiry',
]

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] },
  }),
}

const ContactPage = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    type: '',
    message: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const body = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Enquiry type: ${form.type || 'Not specified'}`,
      '',
      form.message,
    ].join('\n')

    const mailto = `mailto:${EMAIL}?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(body)}`
    window.location.href = mailto
  }

  return (
    <>
      <section className="contact-page">
        <div className="contact-page__inner">
          <header className="contact-page__head">
            <motion.span
              className="contact-page__label"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              CONTACT
            </motion.span>

            <motion.h1
              className="contact-page__title"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              Let&apos;s build something{' '}
              <span className="contact-page__title-accent">great</span> together.
            </motion.h1>
          </header>

          <div className="contact-page__divider" aria-hidden="true" />

          <div className="contact-page__layout">
            <div className="contact-page__info">
              <motion.div
                className="contact-availability"
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: '-40px' }}
                custom={0}
              >
                <span className="contact-availability__badge">
                  <span className="contact-availability__dot" aria-hidden="true" />
                  Available for work
                </span>
                <h2>Open to full-stack opportunities &amp; freelance projects</h2>
                <p>
                  I&apos;m currently seeking entry-level Java Full Stack Developer
                  roles. If you have a project or opportunity that fits, I&apos;d
                  love to hear from you.
                </p>
              </motion.div>

              <div className="contact-page__links">
                {CONTACT_LINKS.map((link, idx) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith('mailto') ? undefined : '_blank'}
                    rel={link.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                    className="contact-link-card"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: '-40px' }}
                    custom={idx + 1}
                  >
                    <span
                      className="contact-link-card__icon"
                      style={{ color: link.color }}
                    >
                      {link.icon}
                    </span>
                    <span className="contact-link-card__label">{link.label}</span>
                    <span className="contact-link-card__value">{link.value}</span>
                    <FiArrowUpRight
                      className="contact-link-card__arrow"
                      aria-hidden="true"
                    />
                  </motion.a>
                ))}

                <motion.div
                  className="contact-link-card contact-link-card--static"
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: '-40px' }}
                  custom={5}
                >
                  <span
                    className="contact-link-card__icon"
                    style={{ color: '#4ade80' }}
                  >
                    <FiMapPin />
                  </span>
                  <span className="contact-link-card__label">Location</span>
                  <span className="contact-link-card__value">PAN India</span>
                  <span className="contact-link-card__sub">
                    IST (UTC +5:30) · Open to relocate anywhere
                  </span>
                </motion.div>
              </div>
            </div>

            <motion.div
              className="contact-form-card"
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-40px' }}
              custom={2}
            >
              <h2>Send me a message</h2>
              <p>Fill out the form and I&apos;ll get back to you within 24 hours.</p>

              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="contact-form__row">
                  <label className="contact-form__field">
                    <span>Your name</span>
                    <input
                      type="text"
                      name="name"
                      placeholder="John Doe"
                      value={form.name}
                      onChange={handleChange}
                      required
                    />
                  </label>
                  <label className="contact-form__field">
                    <span>Email address</span>
                    <input
                      type="email"
                      name="email"
                      placeholder="john@example.com"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                  </label>
                </div>

                <label className="contact-form__field">
                  <span>Subject</span>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Job opportunity / Project / Collaboration"
                    value={form.subject}
                    onChange={handleChange}
                    required
                  />
                </label>

                <label className="contact-form__field">
                  <span>Enquiry type</span>
                  <div className="contact-form__select-wrap">
                    <select
                      name="type"
                      value={form.type}
                      onChange={handleChange}
                      required
                    >
                      <option value="" disabled>
                        Select a type
                      </option>
                      {ENQUIRY_TYPES.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                    <FiChevronDown aria-hidden="true" />
                  </div>
                </label>

                <label className="contact-form__field">
                  <span>Message</span>
                  <textarea
                    name="message"
                    rows={5}
                    placeholder="Tell me about your project or opportunity..."
                    value={form.message}
                    onChange={handleChange}
                    required
                  />
                </label>

                <div className="contact-form__divider">
                  <span>or reach out directly</span>
                </div>

                <div className="contact-form__footer">
                  <p className="contact-form__privacy">
                    <FiLock aria-hidden="true" />
                    Your info stays private
                  </p>
                  <button type="submit" className="contact-form__submit">
                    Send message
                    <FiSend aria-hidden="true" />
                  </button>
                </div>
              </form>
            </motion.div>
          </div>

          <div className="contact-page__quick">
            {QUICK_LINKS.map((link, idx) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('mailto') ? undefined : '_blank'}
                rel={link.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                className="contact-quick-card"
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: '-40px' }}
                custom={6 + idx}
              >
                <span
                  className="contact-quick-card__icon"
                  style={{ color: link.color }}
                >
                  {link.icon}
                </span>
                <span className="contact-quick-card__label">{link.label}</span>
                <span className="contact-quick-card__desc">{link.desc}</span>
                <FiArrowUpRight
                  className="contact-quick-card__arrow"
                  aria-hidden="true"
                />
              </motion.a>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default ContactPage
