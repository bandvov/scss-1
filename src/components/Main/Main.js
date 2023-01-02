import React from 'react'
import Section from '../Section/Section'
import MainPhoto from '../MainPhoto/MainPhoto'
import SpecialOffer from '../SpecialOffer/SpecialOffer'
import styles from './Main.module.scss'
import { SPECIFICATION_ITEMS } from '../../constants'
import SpecificationListItem from '../SpecificationListItem/SpecificationListItem'
import SpecificationImage from '../SpecificationImage/SpecificationImage'
import ContactDealer from '../ContactDealer/ContactDealer'
import CustomerAdvisor from '../CustomerAdvisor/CustomerAdvisor'
import FeaturedCars from '../FeaturedCars/FeaturedCars'
import Tags from '../Tags/Tags'

export default function Main() {
  return (
    <main className={styles.main}>
      <section className={styles.main__content}>
        <MainPhoto />
        <Section title="Desciption">
          <span style={{
            fontFamily: 'Mulish',
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: "16px",
            lineHeight: "120%",
            letterSpacing: "0.005em",
            color: "var(--gray)",
          }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </span>
        </Section>
        <video controls>
          <source
            src='https://video.twimg.com/tweet_video/Fk0GLisXkAIKZpt.mp4'
            type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <Section title="Specification">
          <ul style={{
            display: 'grid',
            gridTemplateColumns: "1fr 1fr 1fr",
            columnGap: '48px',
            margin: '0',
            padding: '0'
          }}>
            {SPECIFICATION_ITEMS.map((item, index) => {
              const withUnderscore = index > 8
              return <SpecificationListItem
                withUnderscore={withUnderscore}
                image={<SpecificationImage />}
                {...item} />
            })}
          </ul>
        </Section>
      </section>
      <div className={styles.side__content} >
        <SpecialOffer />
        <ContactDealer />
        <CustomerAdvisor />
        <FeaturedCars />
        <Tags />
      </div>
    </main >
  )
}
