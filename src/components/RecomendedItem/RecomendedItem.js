import React from 'react'
import { Link } from 'react-router-dom'
import Ribbon from '../Ribbon/Ribbon'
import styles from './RecomendedItem.module.scss'

export default function RecomendedItem({ title, category, price, url, ribbons }) {
  return (
    <Link to={url} className={styles.recomended__item}>
      <span>
        {ribbons?.map(ribbon => {
          return <Ribbon>{ribbon}</Ribbon>
        })}
      </span>
      <span></span>
      <span className={styles.recomended__item__title} >
        {title}
      </span>
      <span className={styles.recomended__item__category}>
        {category}
      </span>
      <span className={styles.recomended__item__price}>
        ${price}
      </span>
    </Link>
  )
}
