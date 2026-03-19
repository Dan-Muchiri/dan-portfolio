import React from 'react'
import styles from './Skills.module.css'

const groups = [
  {
    name: 'Programming',
    tags: ['Python', 'JavaScript', 'React', 'Flask', 'C'],
  },
  {
    name: 'Mechanical Design',
    tags: ['SolidWorks', 'Fusion 360', 'FEA', 'CAD/CAM'],
  },
  {
    name: 'Electrical & Solar',
    tags: ['Solar PV', 'DC/AC Wiring', 'Inverters', 'PLC', 'Power Electronics'],
  },
  {
    name: 'Control & Simulation',
    tags: ['MATLAB', 'Control Engineering', 'STM32', 'PCB Design', 'Robust Control'],
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
