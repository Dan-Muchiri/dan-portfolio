import React from 'react'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <span className={styles.name}>Dan Muchiri</span>
      <div className={styles.links}>
        <a href="tel:+254706318757">+254 706 318 757</a>
        <a href="mailto:danspmunene@gmail.com">danspmunene@gmail.com</a>
        <a href="https://linkedin.com/in/danmuchiri" target="_blank" rel="noreferrer">LinkedIn</a>
        <a href="https://github.com/danmuchiri" target="_blank" rel="noreferrer">GitHub</a>
      </div>
      <span className={styles.copy}>Nairobi, Kenya</span>
    </footer>
  )
}
