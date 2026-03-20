import React, { useEffect, useRef } from 'react'
import styles from './Timeline.module.css'

export default function Timeline({ id, sectionNum, title, entries }) {
  const rowsRef = useRef([])

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
    rowsRef.current.forEach((el) => el && observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id={id} className={styles.section}>
      <div className={styles.header}>
        <span className={styles.num}>{sectionNum} —</span>
        <h2 className={styles.title}>{title}</h2>
        <span className={styles.rule} />
      </div>
      <div className={styles.timeline}>
        {entries.map((entry, i) => (
          <div
            key={i}
            className={styles.entry}
            ref={(el) => (rowsRef.current[i] = el)}
            data-delay={i * 0.08}
          >
            <div className={styles.left}>
              <p className={styles.date}>{entry.date}</p>
              <p className={styles.org}>{entry.org}</p>
            </div>
            <div className={styles.right}>
              <p className={styles.role}>{entry.role}</p>
              {Array.isArray(entry.desc) ? (
                <ul className={styles.descList}>
                  {entry.desc.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              ) : (
                <p className={styles.desc}>{entry.desc}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
