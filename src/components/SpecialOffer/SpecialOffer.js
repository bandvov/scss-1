import React from 'react'
import styles from './SpecialOffer.module.scss'
import Button from '../Button/Button'

export default function SpecialOffer() {
  return (
    <section className={styles.special__offer}>
      <h2>
        Special Offer for Today
      </h2>
      <h3>
        10% Off for New Tesla Model S
      </h3>
      <Button style={{ margin: 'auto', backgroundColor: 'transparent', border: '1px solid var(--white)' }} >Details</Button>
    </section>
  )
}
