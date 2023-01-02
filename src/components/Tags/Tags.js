import React from 'react'
import { TAGS } from '../../constants'
import TagItem from '../TagItem/TagItem'
import styles from './Tags.module.scss'
export default function Tags() {
  return (
    <div className={styles.tags}>
      <h2>Tags</h2>
      <ul className={styles.tags__list}>
        {TAGS.map(tag => {
          return <TagItem {...tag} />
        })}
      </ul>
    </div>
  )
}
