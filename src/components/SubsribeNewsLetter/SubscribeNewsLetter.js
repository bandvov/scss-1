import React from 'react'
import Button from '../Button/Button'
import styles from './SubscribeNewsLetter.module.scss'

export default function SubscribeNewsLetter() {
  return (
    <section className={styles.subscribe__news__letter__section}>
      <h2 className={styles.subscribe__news__letter__section__header}>Subscribe Our News Letter</h2>
      <h3 className={styles.subscribe__news__letter__section__subheader}>You can read our news letter and get free knowledge</h3>
      <form className={styles.subscribe__news__letter__section__form}>
        <label className={styles.subscribe__news__letter__section__form__label}>
          <span className={styles.subscribe__news__letter__section__form__label__text}>
            Your Name
          </span>
          <input className={styles.subscribe__news__letter__section__form__label__input} placeholder='Input your name' />
        </label>
        <label className={styles.subscribe__news__letter__section__form__label}>
          <span className={styles.subscribe__news__letter__section__form__label__text}>
            Your Email
          </span>
          <input className={styles.subscribe__news__letter__section__form__label__input} placeholder='Input your email' />
        </label>
        <Button style={{ height: 'max-content', alignSelf: 'end', padding: "18px 26px" }} type='submit'>Subscribe</Button>
      </form>
    </section>
  )
}
