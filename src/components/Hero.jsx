import React, { useEffect, useRef } from 'react'
import styles from './Hero.module.css'
import danPhoto from '../assets/dan.jpg'

const certs = [
  'EBK Graduate Engineer',
  'Solar PV T3 · EPRA',
  'Siemens Mechatronics Certification · DEKUT',
  'DELF B1 French · Alliance Française',
]

const contacts = [
  {
    label: 'Phone',
    value: '+254 706 318 757',
    href: 'tel:+254706318757',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 01.01 2.18 2 2 0 012 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92z"/>
      </svg>
    ),
  },
  {
    label: 'Email',
    value: 'danspmunene@gmail.com',
    href: 'mailto:danspmunene@gmail.com',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <rect x="2" y="4" width="20" height="16" rx="2"/>
        <path d="M2 7l10 7 10-7"/>
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    value: 'Dan Muchiri',
    href: 'https://linkedin.com/in/dan-muchiri',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <rect x="2" y="2" width="20" height="20" rx="3"/>
        <path d="M7 10v7M7 7v.5M11 17v-4a3 3 0 016 0v4M11 10v7"/>
      </svg>
    ),
  },
  {
    label: 'GitHub',
    value: 'Dan Muchiri',
    href: 'https://github.com/Dan-Muchiri',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"/>
      </svg>
    ),
  },
]

export default function Hero() {
  const colRef = useRef(null)
  const contentRef = useRef(null)

  useEffect(() => {
    const items = [colRef.current, contentRef.current]
    items.forEach((el, i) => {
      if (!el) return
      el.style.animationDelay = `${i * 0.15}s`
      el.classList.add('animate-fade-up')
    })
  }, [])

  return (
    <section id="about" className={styles.hero}>
      <div className={styles.photoCol} ref={colRef}>
        <div className={styles.photoFrame}>
          <img src={danPhoto} alt="Dan Muchiri" />
        </div>
        <p className={styles.photoName}>
          Dan <span>Muchiri</span>
        </p>
        <span className={styles.pretitText}>Mechatronic Engineer</span>
        <p className={styles.photoLoc}>
          <span className={styles.locDot} />
          Nairobi, Kenya
        </p>
        <div className={styles.certStack}>
          {certs.map((c) => (
            <div key={c} className={styles.certMini}>{c}</div>
          ))}
        </div>
      </div>

      <div className={styles.content} ref={contentRef}>
        <div>
          <div className={styles.pretitle}>
            <span className={styles.pretitleLine} />
            <span className={styles.pretitleText}>Mechatronic Engineer</span>
          </div>
          <h1 className={styles.title}>
            Mechanical · Electrical<br />
            <em>· Software</em>
          </h1>
          <p className={styles.discipline}>
            Integrated systems engineer — designing, wiring, and coding intelligent machines
          </p>
          <p className={styles.bio}>
            Mechatronics is the convergence of mechanical engineering, electrical systems, and
            software — and that convergence is where I operate. I design precision components,
            work with embedded hardware and electrical installations, and build the software
            that ties it all together into intelligent, automated systems. Currently deepening
            that foundation through an MSc in Mechatronic Engineering at JKUAT.
          </p>
        </div>

        <div className={styles.contactGrid}>
          {contacts.map((c) => (
            <a key={c.label} href={c.href} className={styles.contactItem} target={c.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
              <span className={styles.contactIcon}>{c.icon}</span>
              <span className={styles.contactDetail}>
                <span className={styles.contactLabel}>{c.label}</span>
                <span className={styles.contactValue}>{c.value}</span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
