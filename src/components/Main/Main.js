import React from 'react'
import MainPhoto from '../MainPhoto/MainPhoto'
import SpecialOffer from '../SpecialOffer/SpecialOffer'
import styles from './Main.module.scss'
export default function Main() {
  return (
    <main className={styles.main}>
      <section className={styles.main__content}>
        <MainPhoto />
        <section className={styles.copy__section}>
          <h2>Desciption</h2>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </span>
        </section>
        <video>
          <source
            src='https://video.twimg.com/tweet_video/Fk0GLisXkAIKZpt.mp4'
            type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </section>
      <div style={{ border: '1px solid red' }}>
        <SpecialOffer />
      </div>
    </main>
  )
}
