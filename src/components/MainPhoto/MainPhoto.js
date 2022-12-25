import React from 'react'
import styles from './MainPhoto.module.scss'

export default function MainPhoto() {
  return (
    <section className={styles.mainphoto}>
      <div className={styles.bigphoto}></div>
      <div className={styles.smallphoto}></div>
      <div className={styles.smallphoto}></div>
      <div className={styles.smallphoto}></div>
    </section>
  )
}
