import React from 'react'
import styles from './FeaturedCarItem.module.scss'
export default function FeaturedCarItem({
  name,
  src,
  url,
  price,
  ...props
}) {

  return (
    <li className={styles.featured__car} {...props}>
      <img alt={name} className={styles.featured__car__image} src={src} />
      <div className={styles.featured__car__content} >
        <h2 alt={name} className={styles.featured__car__name}>
          {name}
        </h2>
        <h2 className={styles.featured__car__price}>
          ${price}
        </h2>
      </div>
    </li>
  )
}
