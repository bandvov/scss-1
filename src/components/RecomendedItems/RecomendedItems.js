import React from 'react'
import RecomendedItem from '../RecomendedItem/RecomendedItem'
import styles from './RecomendedItems.module.scss'
import { RECOMENDED_ITEMS } from '../../constants'

export default function RecomendedItems() {
  return (
    <div className={styles.recomended__items}>
      {RECOMENDED_ITEMS.map((item) => {
        return <RecomendedItem {...item} />
      })}
    </div>
  )
}
