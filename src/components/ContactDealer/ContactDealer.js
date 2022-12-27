import React from 'react'
import styles from './ContactDealer.module.scss'

export default function ContactDealer() {
  return (
    <form className={styles.contact__dealer__form}>
      <h2>Contact Dealer</h2>
      <input className={styles.contact__dealer__form__name} type="text" placeholder='Your name' />
      <input className={styles.contact__dealer__form__email} type="text" placeholder='Your email' />
      <textarea cols="24" rows={6.} className={styles.contact__dealer__form__message} placeholder='Your message' />
      <button style={{ width: 'max-content', marginTop: "16px" }}>Send Message</button>
    </form>
  )
}
