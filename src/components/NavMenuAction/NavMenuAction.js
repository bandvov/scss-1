import React from 'react'
import Button from '../Button/Button'
import styles from './NavMenuAction.module.scss';

export default function NavMenuAction() {
  return (
    <diV className={styles.navmenuaction}>
      <div className={styles.avatar}></div>
      <Button >Add your item</Button>
    </diV>
  )
}
