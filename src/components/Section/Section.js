import React from 'react'
import styles from './Section.module.scss'

export default function Section({ title, children }) {
  return (
    <section className={styles.copy__section}>
      <h2>{title}</h2>
      {children}
    </section>
  )
}
