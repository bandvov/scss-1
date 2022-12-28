import React from 'react'
import Button from '../Button/Button'
import styles from './CustomerAdvisor.module.scss'

export default function CustomerAdvisor() {
  return (
    <div className={styles.customer__advisor}>
      <h2 className={styles.customer__advisor__title}>Customer Advisor</h2>
      <div className={styles.customer__advisor__avatar} />
      <h3 className={styles.customer__advisor__name} >David Yates</h3>
      <Button style={{ width: 'max-content', justifySelf: 'center' }} >View Profile</Button>
    </div>
  )
}
