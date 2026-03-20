import React from 'react'
import styles from './Skills.module.css'

const groups = [
  {
    name: 'Programming & Software',
    tags: [
      'Python',
      'C Programming',
      'JavaScript',
      'React',
      'Flask',
      'REST APIs',
      'Collaborative Software Development'
    ],
  },
  {
    name: 'Mechanical Engineering',
    tags: [
      'SolidWorks',
      'Fusion 360',
      'Finite Element Analysis (FEA)',
      'CAD/CAM',
      'Mechanical Systems',
      'Precision Engineering',
      'Manufacturing Processes',
      'Thermodynamics',
      'Structural Analysis',
      'Industrial Equipment & Structures design'
    ],
  },
  {
    name: 'Electrical & Energy Systems',
    tags: [
  'Solar PV Systems',
  'DC/AC Power Distribution',
  'Inverter Systems',
  'Protection Devices (MCB, RCCB, Isolators)',
  'Programmable Logic Controllers (PLC)',
  'Power Electronics',
  'AC/DC Motors & Starters',
  'Motor Control & Drives',
  'Electrical Testing & Troubleshooting',
  'System Integration & Grounding'
],
  },
  {
    name: 'Control & Simulation',
    tags: [
      'MATLAB',
      'Control Systems Engineering',
      'Robust Control',
      'STM32 Microcontrollers',
      'Embedded Systems',
      'PCB Design',
      'System Modeling & Simulation',
      'Signal Processing'
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className={styles.section}>
      <div className={styles.header}>
        <span className={styles.num}>04 —</span>
        <h2 className={styles.title}>Technical skills</h2>
        <span className={styles.rule} />
      </div>
      <div className={styles.matrix}>
        {groups.map((g) => (
          <div key={g.name} className={styles.group}>
            <p className={styles.groupName}>{g.name}</p>
            <div className={styles.tags}>
              {g.tags.map((t) => (
                <span key={t} className={styles.tag}>{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
