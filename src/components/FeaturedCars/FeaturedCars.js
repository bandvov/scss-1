import React from 'react'
import { FEATURED_CARS } from '../../constants'
import FeaturedCarItem from '../FeaturedCarItem/FeaturedCarItem'
import styles from './FeaturedCars.module.scss'

export default function FeaturedCars() {
  return (
    <div className={styles.featuredCars}>
      <h2 className={styles.featuredCars__title}>
        Featured Cars
      </h2>
      <ul className={styles.featuredCars__list}>
        {FEATURED_CARS.map(car => {
          return <FeaturedCarItem {...car} />
        })}
      </ul>
    </div>
  )
}
