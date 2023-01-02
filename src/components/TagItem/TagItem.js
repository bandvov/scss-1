import React from 'react'
import Button from '../Button/Button'
import styles from './TagItem.module.scss'
import { Link } from 'react-router-dom'
export default function TagItem({ title, url }) {
  return (
    <Link to={url}>
      <Button className={styles.tag__item} >
        {title}
      </Button >
    </Link>
  )
}
