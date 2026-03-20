import React, { useEffect, useRef } from 'react'
import styles from './Mechatronics.module.css'

const disciplines = [
  {
    name: 'Mechanical',
    skills: [
    'Mechanical Design',
    'CAD/CAM',
    'Finite Element Analysis (FEA)',
    'Thermodynamics',
    'Fluid Mechanics',
    'Materials Engineering',
    'Manufacturing Processes',
    'Mechanical Systems',
    'Precision Engineering',
    'Industrial Equipment & Structures'
  ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <circle cx="12" cy="12" r="3"/>
        <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/>
      </svg>
    ),
  },
  {
    name: 'Electrical',
    skills: [
    'Solar PV Systems',
    'Electrical Power Systems',
    'DC/AC Power Distribution',
    'Power Electronics',
    'Inverter Systems',
    'Electrical Protection',
    'Control Systems',
    'PLCs',
    'Sensors & Instrumentation',
    'Actuators',
    'Electrical Standards & Safety'
  ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
      </svg>
    ),
  },
  {
    name: 'Software & Control',
    skills: [
    'Python',
    'C Programming',
    'JavaScript',
    'React',
    'Flask',
    'Embedded Systems',
    'Microcontrollers',
    'Control Systems Engineering',
    'MATLAB',
    'PCB Design',
    'System Modeling & Simulation'
  ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"/>
        <polyline points="8 6 2 12 8 18"/>
      </svg>
    ),
  },
]

export default function Mechatronics() {
  const cardsRef = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const delay = entry.target.dataset.delay || 0
            entry.target.style.animationDelay = `${delay}s`
            entry.target.classList.add('animate-fade-up')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )
    cardsRef.current.forEach((el) => el && observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <span className={styles.num}>01 —</span>
        <h2 className={styles.title}>Mechatronics: three disciplines, one engineer</h2>
        <span className={styles.rule} />
      </div>
      <div className={styles.grid}>
        {disciplines.map((d, i) => (
          <div
            key={d.name}
            className={styles.card}
            ref={(el) => (cardsRef.current[i] = el)}
            data-delay={i * 0.1}
          >
            <div className={styles.icon}>{d.icon}</div>
            <p className={styles.name}>{d.name}</p>
            <ul className={styles.skills}>
              {d.skills.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
