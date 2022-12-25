import React from 'react'
import styles from './Title.module.scss'
export default function Title() {
  return (
    <div className={styles.title}>
      <div className={styles.title_content}>
        <div className={styles.title__item}>Tesla</div>
        <div className={`${styles.title__item} ${styles.title__item__price}`}>$120000</div>
      </div>
    </div>
  )
}
